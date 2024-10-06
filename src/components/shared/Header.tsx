import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import LogoIcon from './icons/LogoIcon';

export default function Header() {
  const router = useRouter();
  const { query } = router;

  return (
    <header className="mx-auto flex max-w-[1220px] flex-row justify-between py-7">
      {!query.withLogo ? <Logo /> : <LogoIcon isSmall={true} />}

      <div className="inline-flex items-center">
        <Link
          href="/"
          className="text-button-base px-8 py-[10px] text-header-nav-default hover:text-header-nav-hover active:text-header-nav-active active:underline"
        >
          Преимущества
        </Link>
        <Link
          href="/"
          className="text-button-base px-8 py-[10px] text-header-nav-default hover:text-header-nav-hover active:text-header-nav-active active:underline"
        >
          Как работаем
        </Link>
      </div>
    </header>
  );
}
