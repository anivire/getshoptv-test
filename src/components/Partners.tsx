import Image from 'next/image';

export default function Partners() {
  return (
    <section className="mx-auto flex h-[317px] w-full max-w-[1220px] flex-row items-center justify-between">
      <h3 className="text-heading-md font-bold">
        Наши партнёры по монетизации
      </h3>
      <div className="flex flex-row items-center gap-[81px]">
        <Image
          src={'/images/logos/clickwave-logo.png'}
          alt="Clickwave Logo"
          width={355}
          height={109}
          className="h-16 w-fit"
        />
        <Image
          src={'/images/logos/zyphronix-logo.png'}
          alt="Clickwave Logo"
          width={204}
          height={142}
          className="h-16 w-fit"
        />
        <Image
          src={'/images/logos/novasphere-logo.png'}
          alt="Clickwave Logo"
          width={384}
          height={122}
          className="h-16 w-fit"
        />
      </div>
    </section>
  );
}
