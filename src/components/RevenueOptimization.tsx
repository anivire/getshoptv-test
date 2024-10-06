import ArrowTopRight from './shared/icons/ArrowTopRight';
import LogoIcon from './shared/icons/LogoIcon';

export default function RevenueOptimization() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 h-[647px] w-full self-center bg-gray-04" />
      <div className="relative mx-auto flex w-full max-w-[1220px] flex-col gap-[80px]">
        <h2 className="text-heading-base text-center font-bold">
          Баланс между выручкой и удовлетворённостью пользователей
        </h2>
        <div className="flex w-full flex-row">
          <div className="flex w-[300px] flex-col gap-[16px] p-[32px]">
            <ArrowTopRight />
            <h3 className="text-heading-md font-bold">
              Частотность под контролем
            </h3>
            <p className="text-body-base">
              Чтобы не ронять NPS и не увеличивать отток пользователей
            </p>
          </div>
          <div className="grid grow grid-cols-1 place-items-center">
            <div className="relative h-0.5 w-full bg-orange">
              <div className="absolute inset-y-0 left-0 h-3 w-3 self-center rounded-full bg-orange" />
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 transform self-center">
                <LogoIcon />
              </div>
              <div className="absolute inset-y-0 right-0 h-3 w-3 self-center rounded-full bg-orange" />
            </div>
          </div>
          <div className="flex w-[300px] flex-col gap-[16px] p-[32px]">
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
