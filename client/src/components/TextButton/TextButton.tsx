import { ButtonHTMLAttributes, FC } from 'react';
import './TextButton.scss';

type TextButtonProps = {
  children: string;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const TextButton: FC<TextButtonProps> = ({ children, onClick, className, ...rest }) => {
  const classes = 'text-button' + (className ? ` ${className}` : '');
  
  return (
    <button
      className={classes}
      type='button'
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default TextButton;