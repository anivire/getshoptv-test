import Image from 'next/image';

export default function Partners() {
  return (
    <section className="mx-auto flex w-full max-w-[1220px] flex-row items-center justify-between md:h-[120px] md:px-3 lg:h-[317px] lg:px-0">
      <h3 className="text-heading-md font-bold md:max-w-36 lg:max-w-full">
        Наши партнёры по монетизации
      </h3>
      <div className="flex flex-row items-center gap-[81px]">
        <Image
          src={'/images/logos/clickwave-logo.png'}
          alt="Clickwave Logo"
          width={355}
          height={109}
          className="w-fit md:h-[50px] lg:h-16"
        />
        <Image
          src={'/images/logos/zyphronix-logo.png'}
          alt="Clickwave Logo"
          width={204}
          height={142}
          className="w-fit md:h-[50px] lg:h-16"
        />
        <Image
          src={'/images/logos/novasphere-logo.png'}
          alt="Clickwave Logo"
          width={384}
          height={122}
          className="w-fit md:h-[50px] lg:h-16"
        />
      </div>
    </section>
  );
}
