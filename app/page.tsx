"use client";

import { useState } from "react";
import Image from "next/image";
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import YoutubeIcon, {
  InstagramIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "./components/Icons";
import StudentShowcase from "./components/StudentShowcase";
import Link from "next/link";
import { trackAction } from "@/lib/analytics";

export default function Home() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await trackAction("ttlSCk");
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
      });

      if (response.ok) {
        alert("Successfully sent a message to Tanisha! We will get back to you soon.");
        setPhone("");
        setName("");
      } else {
        alert("Failed to send a message to Tanisha. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* <RotatingMandana position="left" />
      <RotatingMandana position="right" /> */}

      {/* Header Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <section className="relative bg-gradient-to-b from-[#FFF6EA] to-white py-32 overflow-hidden">
          {/* Background Mandana */}
          <div className="absolute inset-0 opacity-5">
            <div className="relative w-full h-full animate-[spin_60s_linear_infinite]">
              <Image
                src="/mandana.avif"
                alt="Mandana Design"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="title-font text-5xl sm:text-6xl mb-6 text-[#FF4B91]">
                Mehandy.in
              </h1>
              <p className="text-3xl mb-8">Get Handy with Skills</p>
              <p className="text-xl mb-10 leading-relaxed">
                Meet <Link href="/about" className="text-[#FF4B91]">Tanisha Vijay</Link>, a renowned Mehendi artist with over 550k+
                Instagram followers and 80k+ YouTube subscribers. Awarded by
                Skillshare for excellence in teaching.
              </p>
              <Link href="https://play.google.com/store/apps/details?id=co.martin.nbxku" className="">
              <button
                className="btn-primary text-xl px-10 py-3 relative overflow-hidden group"
                onClick={() => trackAction("dldBCk")}
              >
                <span className="relative z-10">Download the Mobile App</span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button> </Link>
              
            </div>
          </div>
        </section>
      </Suspense>

      {/* Stats Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Link href="https://www.instagram.com/tanisha_mehandi_tutorial/" className="p-6 bg-[#FFF6EA] rounded-lg flex items-center justify-center hover:shadow-xl transition-colors gap-4 md:flex-col">
                <InstagramIcon className="w-10 h-10" />
                <h3 className="title-font text-4xl text-[#FF4B91] flex items-center justify-center">
                  <span className="text-5xl font-extrabold">550</span>
                  <span>k+</span>
                </h3>
                <p className="text-lg">Instagram Followers</p>
              </Link>
              <div className="p-6 bg-[#FFF6EA] rounded-lg relative">
                <Image
                  src="/award_winning_photo.avif"
                  alt="Best Art Content Creator Award"
                  width={400}
                  height={400}
                  className="mx-auto mb-4 rounded-full"
                />
                <p className="text-lg">
                  Awarded as{" "}
                  <span className="font-semibold">
                    Best Art Content Creator
                  </span>
                </p>
              </div>
              <Link href="https://www.youtube.com/@tanisha.mehandi.tutorial" className="p-6 hover:shadow-xl bg-[#FFF6EA] rounded-lg flex items-center justify-center gap-4 md:flex-col">
                <YoutubeIcon className="w-10 h-10" />
                <h3 className="title-font text-4xl text-[#FF4B91] flex items-center justify-center">
                  <span className="text-5xl font-extrabold">80</span>
                  <span>k+</span>
                </h3>
                <p className="text-lg">YouTube Subscribers</p>
              </Link>
            </div>
          </div>
        </section>
      </Suspense>

      {/* Course Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <section className="py-20 bg-white" id="courses">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="title-font text-4xl mb-4">Mixology Mehendi Course</h2>
              <p className="text-xl mb-4">A basic 5-lesson course designed for beginners</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="relative aspect-square rounded-2xl shadow-lg w-full h-full">
                <Image
                  src="/course.jpeg"
                  alt="Mehendi Course Preview"
                  width={1000}
                  height={1000}
                  className="object-contain hover:scale-105 transition-transform rounded-2xl duration-500"
                />
              </div>
              <div className="space-y-4 w-full">
                {["Detailed Knowledge","Every Topics Covered in Detail","Powder and Oil Measurement","Ingredients and their Uses","Preservatives uses in paste"].map((lesson, index) => (
                  <div
                    key={lesson}
                    className="bg-[#FFF6EA] p-6 rounded-lg shadow-md transform hover:scale-102 transition-all duration-300"
                    style={{
                    opacity: 0,
                      animation: "fadeInUp 0.5s ease forwards",
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <h3 className="title-font text-2xl">{lesson}</h3>

                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-12">
              <button
                className="btn-primary text-2xl shadow-lg relative overflow-hidden group"
                onClick={() => trackAction("erlBCk")}
              >
                <span className="relative z-10">Enroll in the Course Now!</span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
              <div className="text-[#FF4B91] font-bold mt-6 flex flex-col md:flex-row items-center gap-2 justify-center">
                <div className="text-2xl">
                  at just <span className="text-4xl relative font-extrabold">₹200</span>
                </div>
                <span className="bg-[#ffcd39] text-white px-2 py-1 rounded-lg animate-pulse">
                  (Initial Launch Offer)
                </span>
              </div>
            </div>
          </div>
        </section>
      </Suspense>

      {/* Highlights Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <section className="py-20 bg-[#FFF6EA]">
          <div className="container-custom max-w-3xl mx-auto">
            <h2 className="title-font text-4xl mb-8 text-center">
              Watch Tanisha in Action!
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/kNUWvD2_400?si=lk0XfIjYvsxX6dlr"
                title="Tanisha Vijay Mehendi Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>
      </Suspense>

      {/* Student Showcase */}
      <Suspense fallback={<LoadingSpinner />}>
        <StudentShowcase />
      </Suspense>

      {/* Waitlist Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="title-font text-4xl mb-4">Connect with Us</h2>
              <p className="text-lg mb-8">
                Be the first to know about new courses and updates.
              </p>
              <form
                onSubmit={handleWaitlistSubmit}
                className="space-y-4 max-w-lg mx-auto"
              >
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4B91]"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4B91]"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary w-full relative overflow-hidden group"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Joining..." : "Connect with Tanisha"}
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </Suspense>

      {/* Footer */}
      <footer className="bg-[#FFF6EA] py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="title-font text-2xl mb-4">Mehandy.in</h3>
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Mehandy.in. All rights reserved.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4">Follow Us On</h3>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/tanisha_mehandi_tutorial/" className="text-[#FF4B91] hover:opacity-80">
                  <InstagramIcon className="h-8 w-8" />
                </Link>
                <Link href="https://www.youtube.com/@tanisha.mehandi.tutorial" className="text-[#FF4B91] hover:opacity-80">
                  <YoutubeIcon className="h-8 w-8" />
                </Link>
                <Link href=" https://whatsapp.com/channel/0029VaSBk0W6GcGCphZqH53S" className="text-[#FF4B91] hover:opacity-80">
                  <WhatsAppIcon className="h-8 w-8" />
                </Link>
                <Link href="https://t.me/tanishamehanditutorial" className="text-[#FF4B91] hover:opacity-80">
                  <TelegramIcon className="h-8 w-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
