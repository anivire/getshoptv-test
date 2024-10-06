import Image from 'next/image';
import ButtonBlack from './shared/buttons/ButtonBlack';
import ArrowTopRight from './shared/icons/ArrowTopRight';

export default function Reports() {
  return (
    <section className="relative">
      <div className="bg-frost-gray absolute inset-0 -z-10 h-[647px] w-full self-center" />

      <div className="relative mx-auto flex w-full max-w-[1220px] flex-col gap-[80px]">
        <div className="flex max-w-[497px] flex-col gap-[32px]">
          <h2 className="text-heading-base font-bold">
            Подробные отчёты для вас и правообладателей
          </h2>
          <div className="flex flex-col gap-[20px]">
            {[
              'Выручка, CTR, показы и другие показатели в реальном времени.',
              'Инструменты контроля качества трафика.',
              'Ежемесячные автоматические отчёты для каждого правообладателя.',
            ].map((text, index) => (
              <div
                key={index}
                className="text-body-lg grid grid-cols-10 items-start gap-[16px]"
              >
                <ArrowTopRight />
                <p className="col-span-9 w-fit">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <ButtonBlack text="Заказать звонок" onClick={() => {}} />
        <Image
          src={'/images/reports.png'}
          alt="Reports dashboard"
          width={631}
          height={482}
          className="iset-0 absolute right-0"
        />
      </div>
    </section>
  );
}
