import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import LogoIcon from './icons/LogoIcon';
import Burger from './icons/Burger';

export default function Header() {
  const router = useRouter();
  const { query } = router;

  return (
    <header className="mx-auto flex max-w-[1220px] flex-row items-center justify-between px-[16px] py-7 md:px-[40px] lg:px-0">
      {!query.withLogo ? <Logo /> : <LogoIcon size={55} />}

      <div className="inline-flex items-center md:hidden lg:block">
        <Link
          href="/"
          className="px-8 py-[10px] text-button-base text-black hover:text-accent active:text-accent active:underline"
        >
          Преимущества
        </Link>
        <Link
          href="/"
          className="px-8 py-[10px] text-button-base text-black hover:text-accent active:text-accent active:underline"
        >
          Как работаем
        </Link>
      </div>
      <button className="block lg:hidden">
        <Burger />
      </button>
    </header>
  );
}
