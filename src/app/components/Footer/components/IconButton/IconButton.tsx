import React, { ReactElement } from 'react';
import css from './IconButton.module.css';

interface IProps {
  icon: ReactElement;
}

export const IconButton = ({ icon }: IProps) => {
  return <div className={css.button}>{icon}</div>;
};
