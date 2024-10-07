import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import LogoIcon from './icons/LogoIcon';
import Burger from './icons/Burger';
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const router = useRouter();
  const { query } = router;
  const isMobile = useMediaQuery({ query: '(min-width: 320px)' });

  return (
    <header className="mx-auto flex max-w-[1220px] flex-row items-center justify-between px-[16px] py-7 md:px-[40px] lg:px-0">
      {!query.withLogo ? (
        <Logo />
      ) : isMobile ? (
        <LogoIcon size={32} />
      ) : (
        <LogoIcon size={55} />
      )}

      <div className="hidden items-center lg:inline-flex">
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
        {isMobile ? <Burger size={32} /> : <Burger />}
      </button>
    </header>
  );
}
