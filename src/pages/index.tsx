import FeedbackForm from '@/components/FeedbackForm';
import Hero from '@/components/Hero';
import MonetizationToggle from '@/components/MonetizationToggle';
import Partners from '@/components/Partners';
import Reports from '@/components/Reports';
import RevenueOptimization from '@/components/RevenueOptimization';
import { ActiveSectionProvider } from '@/providers/ActiveSectionContext';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo
        title="GetShopTV - Монетизируйте клиентскую базу, не снижая NPS"
        description="Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации."
      />
      <main className="flex flex-col gap-[80px] md:gap-[120px] lg:gap-[180px]">
        <Hero />
        <MonetizationToggle />
        <RevenueOptimization />
        <Partners />
        <Reports />
        <FeedbackForm />
      </main>
    </>
  );
}
