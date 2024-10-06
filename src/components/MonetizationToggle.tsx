import { useState } from 'react';
import ToggleButton from './shared/buttons/ToggleButton';

export default function MonetizationToggle() {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  return (
    <section className="mx-auto grid w-full max-w-[1220px] grid-cols-2 justify-between md:px-3 lg:px-0">
      <h2 className="text-heading-base font-bold md:max-w-64 lg:max-w-md">
        Дополнительные источники выручки для разных компаний
      </h2>
      <div className="flex flex-col gap-[32px]">
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
