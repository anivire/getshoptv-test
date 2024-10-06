import Image from 'next/image';
import ButtonOrange from './shared/buttons/ButtonOrange';

export default function Hero() {
  return (
    <>
      <Image
        src={'/images/blue-glass-shapes-composition-3d-rendering 1.png'}
        alt="Background shapes"
        width={1440}
        height={801}
        quality={100}
        className="absolute inset-0 -z-10 mx-auto mt-[67px] object-cover opacity-80"
        style={{
          maskImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 0))',
        }}
      />

      <section className="flexflex-col relative z-10 pt-[100px]">
        <div className="mx-auto flex max-w-[1220px] flex-col gap-[80px]">
          <div className="flex flex-col gap-8">
            <h1 className="text-heading-lg font-bold">
              Монетизируйте клиентскую базу, не снижая NPS
            </h1>
            <h3 className="text-heading-md max-w-2xl font-normal">
              Найдите идеальный баланс выручки и удовлетворённости пользователей
              с платформой рекламной монетизации
            </h3>
          </div>
          <ButtonOrange text="Заказать звонок" onClick={() => {}} />
        </div>
      </section>
    </>
  );
}
