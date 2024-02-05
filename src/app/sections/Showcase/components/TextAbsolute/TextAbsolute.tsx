import React from 'react';
import css from './TextAbsolute.module.css';

interface IProps {
  text: string;
  style: any;
}

export const TextAbsolute = ({ text, style }: IProps) => {
  return <span className={`${css.text} ${style}`}>{text}</span>;
};
