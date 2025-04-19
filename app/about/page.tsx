import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFF6EA]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FFF6EA]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div>
              <h1 className="title-font text-5xl mb-6 text-[#FF4B91]">
                Meet Tanisha Vijay
              </h1>
              <p className="text-lg leading-relaxed mb-8">
                A passionate Mehendi artist with over a decade of experience in transforming hands into canvases of beauty. From humble beginnings to becoming one of India&apos;s most followed Mehendi artists, my journey has been nothing short of magical.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                </Link>
                <Link href="/#course" className="btn-secondary">
                  View Courses
                </Link>
              </div>
            </div>
            <div className="relative aspect-square rounded-full min-w-[400px] overflow-hidden shadow-xl">
              <Image
                src="/tanisha.avif"
                alt="Tanisha Vijay"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="title-font text-4xl mb-12 text-center">My Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl text-[#FF4B91] mb-4">2018</div>
              <h3 className="text-xl font-semibold mb-4">The Beginning</h3>
              <p className="text-gray-600">
                Started learning Mehendi art and fell in love with the intricate patterns and cultural significance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl text-[#FF4B91] mb-4">2022</div>
              <h3 className="text-xl font-semibold mb-4">Social Media Journey</h3>
              <p className="text-gray-600">
                Began sharing my art on social media, quickly gaining recognition for unique designs and teaching style.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl text-[#FF4B91] mb-4">2025</div>
              <h3 className="text-xl font-semibold mb-4">Major Milestone</h3>
              <p className="text-gray-600">
                Reached 850k+ Instagram followers and launched online courses to share knowledge with aspiring artists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="title-font text-4xl mb-12 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FFF6EA] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Social Media Impact</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#FF4B91] rounded-full"></div>
                  <span>850,000+ Instagram Followers</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#FF4B91] rounded-full"></div>
                  <span>110,000+ YouTube Subscribers</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#FF4B91] rounded-full"></div>
                  <span>1M+ Monthly Content Views</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#FFF6EA] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Recognition</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#FF4B91] rounded-full"></div>
                  <span>Best Art Content Creator Award</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#FF4B91] rounded-full"></div>
                  <span>Featured on Multiple Channels</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#FF4B91] rounded-full"></div>
                  <span>Conducted 100+ Live Workshops</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="title-font text-4xl mb-8">My Vision</h2>
          <p className="text-xl leading-relaxed">
            To make the art of Mehendi accessible to everyone, preserving its traditional essence while embracing modern techniques. Through my courses and tutorials, I aim to empower the next generation of Mehendi artists.
          </p>
          <Link href="/#course" className="btn-primary inline-block mt-8">
            Start Learning Today
          </Link>
        </div>
      </section>
    </main>
  );
}