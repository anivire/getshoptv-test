import { useMediaQuery } from 'react-responsive';
import ArrowTopRight from './shared/icons/ArrowTopRight';
import LogoIcon from './shared/icons/LogoIcon';

export default function RevenueOptimization() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 w-full self-center bg-frost-gray md:h-[471px] lg:h-[647px]" />
      <div className="relative mx-auto flex w-full max-w-[1220px] flex-col px-[16px] md:items-center md:gap-[60px] md:px-[40px] lg:items-center lg:gap-[80px] lg:px-0">
        <h2 className="text-heading-base font-bold md:max-w-lg md:text-center lg:max-w-full">
          Баланс между выручкой и удовлетворённостью пользователей
        </h2>
        <div className="flex w-full flex-col md:flex-row">
          <div className="flex flex-col gap-[16px] p-[24px] md:w-[216px] lg:w-[300px] lg:p-[32px]">
            <ArrowTopRight />
            <h3 className="text-heading-md font-bold">
              Частотность под контролем
            </h3>
            <p className="text-body-base">
              Чтобы не ронять NPS и не увеличивать отток пользователей
            </p>
          </div>
          <div className="grid grow grid-cols-1 place-items-center">
            <div className="relative h-[175px] w-0.5 bg-accent md:h-0.5 md:w-full">
              <div className="absolute -inset-x-[5px] h-3 w-3 self-center rounded-full bg-accent md:inset-x-auto md:inset-y-0 md:left-0" />
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 transform self-center">
                {isDesktop ? <LogoIcon /> : <LogoIcon size={80} />}
              </div>
              <div className="absolute -inset-x-[5px] bottom-0 h-3 w-3 self-center rounded-full bg-accent md:inset-x-auto md:inset-y-0 md:right-0" />
            </div>
          </div>
          <div className="flex flex-col gap-[16px] p-[24px] md:w-[216px] lg:w-[300px] lg:p-[32px]">
            <ArrowTopRight />
            <h3 className="text-heading-md font-bold">Максимальная выручка</h3>
            <p className="text-body-base">
              За счёт заполенения всех рекламных мест по высокой цене
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
