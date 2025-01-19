'use client';

import { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

declare module 'jspdf' {
  interface jsPDF {
//@ts-expect-error old library
    autoTable: (options) => jsPDF;
  }
}

interface Analytics {
  enrollClicks: number;
  downloadClicks: number;
  connectClicks: number;
  androidClicks: number;
  iosClicks: number;
}

interface User {
  id: string;
  name: string | null;
  phone: string;
  createdAt: string;
  message: string | null;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [reportLimit, setReportLimit] = useState(50);
  const [displayLimit] = useState(50); // Fixed display limit for the table

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        setError('');
        fetchData();
      } else {
        setError('Invalid password');
      }
    } catch (error) {
      setError('Something went wrong');
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const [analyticsRes, usersRes] = await Promise.all([
        fetch('/api/admin/analytics'),
        fetch('/api/admin/users'),
      ]);

      if (analyticsRes.ok && usersRes.ok) {
        const [analyticsData, usersData] = await Promise.all([
          analyticsRes.json(),
          usersRes.json(),
        ]);

        setAnalytics(analyticsData);
        setUsers(usersData);
      }
    } catch (error) {
      setError('Failed to fetch data');
      console.error(error);
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Add analytics
    doc.setFontSize(16);
    doc.text('Analytics Report', 20, 20);
    doc.setFontSize(12);
    doc.text([
      `Enroll Clicks: ${analytics?.enrollClicks}`,
      `Download Clicks: ${analytics?.downloadClicks}`,
      `Connect Clicks: ${analytics?.connectClicks}`,
      `Android Users: ${analytics?.androidClicks}`,
      `iOS Users: ${analytics?.iosClicks}`,
    ], 20, 40);

    // Add users table with selected limit
    const usersToReport = users.slice(0, reportLimit);
    doc.autoTable({
      head: [['Name', 'Phone', 'Joined On', 'Message']],
      body: usersToReport.map(user => [
        user.name || 'N/A',
        user.phone,
        new Date(user.createdAt).toLocaleDateString(),
        user.message || 'N/A',
      ]),
      startY: 80,
    });

    doc.save('mehandy-analytics.pdf');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF6EA]">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="title-font text-2xl mb-6 text-center text-[#FF4B91]">Admin Login</h1>
          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4B91]"
              required
            />
            <button type="submit" className="btn-primary w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF6EA] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center mb-8">
          <h1 className="title-font text-3xl text-[#FF4B91]">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="reportLimit" className="text-sm">Users in report:</label>
              <input
                type="number"
                id="reportLimit"
                value={reportLimit}
                onChange={(e) => setReportLimit(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4B91]"
                min="1"
              />
            </div>
            <button
              onClick={downloadPDF}
              className="btn-primary"
            >
              Download Report
            </button>
          </div>
        </div>

        {/* Analytics Cards */}
        <h3 className="text-lg font-semibold mb-2">A few of button clicks</h3>
        <div className="flex flex-col md:flex-row gap-2 mb-8">
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between flex-grow">
            <h3 className="text-lg font-semibold mb-2">Enroll in course</h3>
            <p className="text-3xl text-[#FF4B91]">{analytics?.enrollClicks}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between flex-grow">
            <h3 className="text-lg font-semibold mb-2">Download the app</h3>
            <p className="text-3xl text-[#FF4B91]">{analytics?.downloadClicks}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between flex-grow">
            <h3 className="text-lg font-semibold mb-2">Connect with Tanisha</h3>
            <p className="text-3xl text-[#FF4B91]">{analytics?.connectClicks}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between flex-grow">
            <h3 className="text-lg font-semibold mb-2">Android Users</h3>
            <p className="text-3xl text-[#FF4B91]">{analytics?.androidClicks}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between flex-grow">
            <h3 className="text-lg font-semibold mb-2">iOS Users</h3>
            <p className="text-3xl text-[#FF4B91]">{analytics?.iosClicks}</p>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl">Latest {displayLimit} Users</h2>
            <p className="text-sm text-gray-600">Showing {Math.min(users.length, displayLimit)} of {users.length} users</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Phone</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Joined On</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.slice(0, displayLimit).map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4">{user.name || 'N/A'}</td>
                    <td className="px-6 py-4">{user.phone}</td>
                    <td className="px-6 py-4">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">{user.message || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 