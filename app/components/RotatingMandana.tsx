import Image from 'next/image';

interface RotatingMandanaProps {
  position: 'left' | 'right';
}

export default function RotatingMandana({ position }: RotatingMandanaProps) {
  return (
    <div
      className={`fixed ${
        position === 'left' ? '-left-1/2' : '-right-1/2'
      } top-1/2 -translate-y-1/2 w-32 h-32 opacity-20 pointer-events-none hidden lg:block`}
    >
      <div className="relative w-full h-full animate-[spin_30s_linear_infinite]">
        <Image
          src="/mandana.avif"
          alt="Mandana Design"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
} 