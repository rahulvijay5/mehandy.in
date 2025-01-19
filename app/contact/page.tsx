'use client';

import { useState } from 'react';
import YoutubeIcon, { InstagramIcon, WhatsAppIcon, TelegramIcon } from '../components/Icons';
import Link from 'next/link';
import { trackAction } from '@/lib/analytics';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await trackAction("ttlSCk");
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, message }),
      });

      if (response.ok) {
        alert('Thank you for reaching out! We will contact you soon.');
        setName('');
        setPhone('');
        setMessage('');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FFF6EA]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FFF6EA]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="title-font text-5xl mb-6 text-[#FF4B91]">Get in Touch</h1>
            <p className="text-xl mb-8">
              Have questions about our courses or want to collaborate? We&apos;d love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="title-font text-3xl mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4B91]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4B91]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4B91]"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="title-font text-3xl mb-6">Connect with Us</h2>
                <div className="space-y-4">
                  <Link
                    href="https://www.instagram.com/tanisha_mehandi_tutorial/"
                    target="_blank"
                    className="flex items-center gap-4 text-gray-600 hover:text-[#FF4B91] transition-colors"
                  >
                    <InstagramIcon className="w-6 h-6" />
                    <span>@tanisha_mehandi_tutorial</span>
                  </Link>
                  <Link
                    href="https://www.youtube.com/@tanisha.mehandi.tutorial"
                    target="_blank"
                    className="flex items-center gap-4 text-gray-600 hover:text-[#FF4B91] transition-colors"
                  >
                    <YoutubeIcon className="w-6 h-6" />
                    <span>Tanisha Mehandi Tutorial</span>
                  </Link>
                  <Link
                    href="https://whatsapp.com/channel/0029VaSBk0W6GcGCphZqH53S"
                    target="_blank"
                    className="flex items-center gap-4 text-gray-600 hover:text-[#FF4B91] transition-colors"
                  >
                    <WhatsAppIcon className="w-6 h-6" />
                    <span>WhatsApp Channel</span>
                  </Link>
                  <Link
                    href="https://t.me/tanishamehanditutorial"
                    target="_blank"
                    className="flex items-center gap-4 text-gray-600 hover:text-[#FF4B91] transition-colors"
                  >
                    <TelegramIcon className="w-6 h-6" />
                    <span>Telegram Channel</span>
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="title-font text-3xl mb-6">Business Hours</h2>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Saturday</p>
                  <p className="font-semibold">10:00 AM - 7:00 PM (IST)</p>
                  <p className="mt-4 text-sm">
                    We typically respond within 24 hours during business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}