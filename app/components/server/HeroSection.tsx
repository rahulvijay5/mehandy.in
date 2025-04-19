import Image from 'next/image';
import Link from 'next/link';
import { DownloadButton } from '../client/DownloadButton';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#FFF6EA] to-white py-32 overflow-hidden">
      {/* Background Mandana */}
      <div className="absolute inset-0 opacity-5">
        <div className="relative w-full h-full animate-[spin_60s_linear_infinite]">
          <Image
            src="/mandana.avif"
            alt="Mandana Design"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="title-font text-6xl mb-6 text-[#FF4B91]">
            Mehandy.in
          </h1>
          <p className="text-3xl mb-8">Get Handy with Skills</p>
          <p className="text-xl mb-10 leading-relaxed">
            Meet <Link href="/about" className="text-[#FF4B91]">Tanisha Vijay</Link>, a renowned Mehendi artist with over 850k+
            Instagram followers and 110k+ YouTube subscribers. Awarded by
            Skillshare for excellence in teaching.
          </p>
          <DownloadButton />
        </div>
      </div>
    </section>
  );
} 