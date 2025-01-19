"use client";
import Image from "next/image";
import React from "react";
import { trackAction } from '@/lib/analytics';

const features = [
  {
    title: 'Learn Anywhere',
    description: 'Access tutorials and courses on the go, perfect for busy schedules.',
    icon: '📱',
  },
  {
    title: 'Offline Access',
    description: 'Download lessons to watch without internet connection.',
    icon: '💾',
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your learning journey and track completion.',
    icon: '📊',
  },
  {
    title: 'Community Access',
    description: 'Connect with fellow learners and share your work.',
    icon: '👥',
  },
];

const AppPage = () => {
  return (
    <main className="min-h-screen bg-[#FFF6EA]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FFF6EA]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="title-font text-5xl mb-6 text-[#FF4B91]">
                Learn Mehendi on Your Phone
              </h1>
              <p className="text-xl mb-8">
                Download our mobile app to access courses, tutorials, and exclusive content anytime, anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => trackAction('Dandrd')}
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <span className="text-2xl">🤖</span>
                  Download for Android
                </button>
                <button
                  onClick={() => trackAction('Dios')}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <span className="text-2xl">🍎</span>
                  Download for iOS
                </button>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-[#FF4B91] rounded-full opacity-10 animate-pulse"></div>
              <Image
                src="/app.png"
                alt="Mehandy App Screenshot"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="title-font text-4xl mb-12 text-center">App Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="title-font text-4xl mb-8">Beautiful & Easy to Use</h2>
            <p className="text-xl mb-12">
              Our app is designed with you in mind. Simple, intuitive, and packed with features to enhance your learning experience.
            </p>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/app-preview.jpg"
                alt="App Interface Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-[#FF4B91] text-white rounded-2xl p-12 text-center">
            <h2 className="title-font text-4xl mb-6">Ready to Start Learning?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Download our app now and join thousands of students mastering the art of Mehendi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => trackAction('Dandrd')}
                className="bg-white text-[#FF4B91] px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span className="text-2xl">🤖</span>
                Download for Android
              </button>
              <button
                onClick={() => trackAction('Dios')}
                className="bg-white text-[#FF4B91] px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span className="text-2xl">🍎</span>
                Download for iOS
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppPage;
