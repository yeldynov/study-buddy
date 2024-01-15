import { MouseEventHandler } from 'react';

export interface ButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
