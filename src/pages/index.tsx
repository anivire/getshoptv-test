import FeedbackForm from '@/components/FeedbackForm';
import Hero from '@/components/Hero';
import MonetizationToggle from '@/components/MonetizationToggle';
import Partners from '@/components/Partners';
import Reports from '@/components/Reports';
import RevenueOptimization from '@/components/RevenueOptimization';

export default function Home() {
  return (
    <main className="flex flex-col gap-[80px] md:gap-[120px] lg:gap-[180px]">
      <Hero />
      <MonetizationToggle />
      {/* <RevenueOptimization /> */}
      {/* <Partners /> */}
      {/* <Reports /> */}
      {/* <FeedbackForm /> */}
    </main>
  );
}
