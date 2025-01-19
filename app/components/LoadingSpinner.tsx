export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-[#FFB4B4] rounded-full animate-[spin_3s_linear_infinite]" />
        <div className="absolute inset-2 border-4 border-[#FF4B91] rounded-full animate-[spin_2s_linear_infinite]" />
        <div className="absolute inset-4 border-4 border-[#FFDCB6] rounded-full animate-[spin_1.5s_linear_infinite]" />
      </div>
    </div>
  );
} 