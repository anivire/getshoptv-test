import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="">
      <p className="inline-flex w-[180px] justify-center rounded-[10px] bg-white text-[36.7px] font-black uppercase tracking-[0.77px]">
        Logo
      </p>
    </Link>
  );
}
