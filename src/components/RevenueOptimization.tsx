import ArrowTopRight from './shared/icons/ArrowTopRight';
import LogoIcon from './shared/icons/LogoIcon';

export default function RevenueOptimization() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 w-full self-center bg-frost-gray md:h-[471px] lg:h-[647px]" />
      <div className="relative mx-auto flex w-full max-w-[1220px] flex-col md:items-center md:gap-[60px] md:px-[40px] lg:items-baseline lg:gap-[80px] lg:px-0">
        <h2 className="text-center text-heading-base font-bold md:max-w-lg lg:max-w-full">
          Баланс между выручкой и удовлетворённостью пользователей
        </h2>
        <div className="flex w-full flex-row">
          <div className="flex flex-col gap-[16px] md:w-[216px] md:p-[24px] lg:w-[300px] lg:p-[32px]">
            <ArrowTopRight />
            <h3 className="text-heading-md font-bold">
              Частотность под контролем
            </h3>
            <p className="text-body-base">
              Чтобы не ронять NPS и не увеличивать отток пользователей
            </p>
          </div>
          <div className="grid grow grid-cols-1 place-items-center">
            <div className="relative h-0.5 w-full bg-accent">
              <div className="absolute inset-y-0 left-0 h-3 w-3 self-center rounded-full bg-accent" />
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 transform self-center">
                <span className="hidden lg:block">
                  <LogoIcon />
                </span>
                <span className="block lg:hidden">
                  <LogoIcon size={80} />
                </span>
              </div>
              <div className="absolute inset-y-0 right-0 h-3 w-3 self-center rounded-full bg-accent" />
            </div>
          </div>
          <div className="flex flex-col gap-[16px] md:w-[216px] md:p-[24px] lg:w-[300px] lg:p-[32px]">
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
