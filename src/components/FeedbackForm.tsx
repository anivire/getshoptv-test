import Link from 'next/link';
import ButtonBlack from './shared/buttons/ButtonBlack';

export default function FeedbackForm() {
  return (
    <section className="mx-auto flex w-full max-w-[1220px] flex-col gap-[64px] pb-[80px]">
      <h2 className="text-heading-base font-bold">Заполните форму</h2>
      <div className="flex w-full flex-row gap-[40px]">
        <textarea
          placeholder="Напишите свой вопрос"
          className="h-[216px] w-full resize-none rounded-[12px] bg-transparent p-3 outline outline-2 outline-gray-01 transition-all duration-300 ease-in-out focus:outline-black"
        />
        <div className="flex flex-col gap-[48px]">
          <div className="flex flex-col gap-[32px]">
            <input
              placeholder="Введите e-mail"
              className="w-full border-b-2 border-gray-01 bg-transparent py-3 outline-none transition-all duration-300 ease-in-out focus:border-black"
            />
            <div className="">
              <p className="text-body-md">
                Я ознакомлен(а) с{' '}
                <Link href="/" className="underline">
                  политикой конфиденциальности
                </Link>{' '}
                и согласен(на) на обработку{' '}
                <Link href={'/'} className="underline">
                  персональных данных
                </Link>
                .
              </p>
            </div>
          </div>
          <ButtonBlack text="Отправить" onClick={() => {}} />
        </div>
      </div>
    </section>
  );
}
