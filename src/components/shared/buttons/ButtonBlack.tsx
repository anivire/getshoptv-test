import { FC } from 'react';

interface Props {
  text: string;
  onClick: () => void;
}

const ButtonBlack: FC<Props> = ({ text, onClick }) => {
  return (
    <button className="text-button-base h-[48px] w-[210px] rounded-[10px] bg-black px-[20px] py-[12px] text-white disabled:bg-gray-02 disabled:text-white">
      {text}
    </button>
  );
};

export default ButtonBlack;
