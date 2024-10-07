import { useState } from 'react';
import ToggleButton from './shared/buttons/ToggleButton';

export default function MonetizationToggle() {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  return (
    <section className="mx-auto w-full max-w-[1220px] justify-between md:flex md:flex-row md:gap-[80px] md:px-[40px] lg:grid lg:grid-cols-2 lg:px-0">
      <h2 className="text-heading-base font-bold md:max-w-72 lg:max-w-md">
        Дополнительные источники выручки для разных компаний
      </h2>
      <div className="flex flex-col md:gap-[16px] lg:gap-[32px]">
        <ToggleButton
          firstButtonTitle={'Операторам'}
          secondButtonTitle={'ОТТ сервисам'}
          onSelectedButtonChange={setSelectedButton}
        />
        <p className="text-body-lg">
          {selectedButton === 0
            ? 'Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации'
            : 'Дополнительные возможности обогащения данных об аудитории и монетизации'}
        </p>
      </div>
    </section>
  );
}
