import { FC } from "react";
import './LanguageButton.scss';

type LanguageButtonProps = {
  children: string;
  active?: boolean
}

/*
  С этим не стал сильно заморачиваться, функционала всё равно нет
  Чисто заглушечный компонент
*/

const LanguageButton: FC<LanguageButtonProps> = ({ children, active }) => {
  const className = 'language-button' + (active ? ' language-button--active' : '');

  return (
    <button className={className} type='button'>
      {children}
    </button>
  )
}

export default LanguageButton;