import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import LogoIcon from './icons/LogoIcon';
import Burger from './icons/Burger';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from 'react';
import Close from './icons/Close';

export default function Header() {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const router = useRouter();
  const { query } = router;
  const isMobile = useMediaQuery({ query: '(max-width: 320px)' });

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {isModalOpened && (
        <nav
          ref={modalRef}
          className="fixed right-0 z-20 flex h-full w-full flex-col justify-center gap-5 bg-white md:w-[280px]"
        >
          <button
            onClick={() => setIsModalOpened(false)}
            className="absolute right-4 top-7 md:right-10"
          >
            {isMobile ? <Close size={32} /> : <Close size={55} />}
          </button>
          <Link
            href="/"
            onClick={() => setIsModalOpened(false)}
            className="px-[32px] py-[10px] text-button-base font-bold text-black hover:text-accent active:text-accent active:underline"
          >
            Преимущества
          </Link>
          <Link
            href="/"
            onClick={() => setIsModalOpened(false)}
            className="px-[32px] py-[10px] text-button-base font-bold text-black hover:text-accent active:text-accent active:underline"
          >
            Как работаем
          </Link>
        </nav>
      )}
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
        <button
          onClick={() => setIsModalOpened(true)}
          className="block lg:hidden"
        >
          {isMobile ? <Burger size={32} /> : <Burger size={55} />}
        </button>
      </header>
    </>
  );
}
