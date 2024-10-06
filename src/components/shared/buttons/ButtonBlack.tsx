import { FC } from 'react';

interface Props {
  text: string;
  onClick: () => void;
}

const ButtonBlack: FC<Props> = ({ text, onClick }) => {
  return (
    <button className="text-button-base disabled:bg-cloud-gray h-[48px] rounded-[10px] bg-black px-[20px] py-[12px] text-white disabled:text-white md:w-full lg:w-[210px]">
      {text}
    </button>
  );
};

export default ButtonBlack;
