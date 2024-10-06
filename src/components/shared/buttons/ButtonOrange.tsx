import { FC } from 'react';

interface Props {
  text: string;
  onClick: () => void;
}

const ButtonOrange: FC<Props> = ({ text, onClick }) => {
  return (
    <button className="text-button-base h-[48px] w-[210px] rounded-[10px] bg-orange px-[20px] py-[12px] text-white hover:bg-dark-orange disabled:bg-gray-02 disabled:text-gray-01">
      {text}
    </button>
  );
};

export default ButtonOrange;
