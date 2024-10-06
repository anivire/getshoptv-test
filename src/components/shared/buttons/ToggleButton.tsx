import classNames from 'classnames';
import { FC, useState } from 'react';

interface Props {
  firstButtonTitle: string;
  secondButtonTitle: string;
  onSelectedButtonChange: (selectedButtonNumber: number) => void;
}

const ToggleButton: FC<Props> = ({
  firstButtonTitle,
  secondButtonTitle,
  onSelectedButtonChange,
}) => {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleSelectedButton = () => {
    if (selectedButton === 0) {
      setSelectedButton(1);
      onSelectedButtonChange(1);
    } else {
      setSelectedButton(0);
      onSelectedButtonChange(0);
    }
  };

  return (
    <div className="group-[toggle] flex w-full flex-row overflow-hidden rounded-[14px] bg-gray-04 p-[4px]">
      <button
        onClick={() => handleSelectedButton()}
        className={classNames(
          'text-heading-md w-full rounded-[10px] px-[37px] py-[10px] font-bold transition-colors duration-200 ease-in-out',
          {
            'bg-black text-white': selectedButton === 0,
            'bg-transparent text-gray-01 group-[toggle]:hover:text-white':
              selectedButton !== 0,
          }
        )}
      >
        {firstButtonTitle}
      </button>
      <button
        onClick={() => handleSelectedButton()}
        className={classNames(
          'text-heading-md w-full rounded-[10px] px-[37px] py-[10px] font-bold transition-colors duration-200 ease-in-out',
          {
            'bg-black text-white': selectedButton === 1,
            'bg-transparent text-gray-01 group-[toggle]:hover:text-white':
              selectedButton !== 1,
          }
        )}
      >
        {secondButtonTitle}
      </button>
    </div>
  );
};

export default ToggleButton;
