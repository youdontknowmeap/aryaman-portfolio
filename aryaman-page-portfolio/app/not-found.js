import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed inset-0 bg-[#080808] flex flex-col items-center justify-center z-[9999] p-5">
      <div className="flex flex-col items-center gap-0">
        <h1 className="font-['Bebas_Neue'] text-[clamp(120px,20vw,200px)] text-[#1A1A1A] leading-[0.8] select-none">
          404
        </h1>
        <div className="flex flex-col items-center gap-4 mt-[-20px]">
          <p className="font-['Bebas_Neue'] text-[clamp(24px,4vw,36px)] text-[#F0EDE6] tracking-wide">
            THIS PAGE DOESN&apos;T EXIST.
          </p>
          <p className="font-['Bebas_Neue'] text-[clamp(24px,4vw,36px)] text-[#FE651A] tracking-wide mt-[-10px]">
            BUT THE WORK DOES.
          </p>
        </div>
      </div>

      <Link
        href="/"
        className="font-['Space_Mono'] text-[12px] text-[#707070] hover:text-[#F0EDE6] mt-16 transition-colors duration-300 tracking-[0.1em] uppercase"
      >
        ← BACK TO THE ARCHIVE
      </Link>
    </div>
  );
}
