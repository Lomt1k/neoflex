import { FC, ReactElement } from 'react';
import './CounterButton.scss';

type CounterButtonProps = {
  onClick: () => void;
  icon: ReactElement;
  ariaLabel: string;
}

const CounterButton: FC<CounterButtonProps> = ({ onClick, icon, ariaLabel }) => {
  return (
    <button
      className="counter-button"
      type='button'
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  )
}

export default CounterButton;
