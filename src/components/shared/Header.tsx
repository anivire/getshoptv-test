import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import LogoIcon from './icons/LogoIcon';
import Burger from './icons/Burger';

export default function Header() {
  const router = useRouter();
  const { query } = router;

  return (
    <header className="mx-auto flex max-w-[1220px] flex-row items-center justify-between py-7 md:px-3 lg:px-0">
      {!query.withLogo ? <Logo /> : <LogoIcon size={55} />}

      <div className="inline-flex items-center md:hidden lg:block">
        <Link
          href="/"
          className="text-button-base hover:text-accent active:text-accent px-8 py-[10px] text-black active:underline"
        >
          Преимущества
        </Link>
        <Link
          href="/"
          className="text-button-base hover:text-accent active:text-accent px-8 py-[10px] text-black active:underline"
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
