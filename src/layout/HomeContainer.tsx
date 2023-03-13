import React from 'react';
import './styles.scss';

interface Props {
    children: JSX.Element | JSX.Element[];
};

export const HomeContainer: React.FC<Props> = ({children}) => {

  return (
    <div className='divHome'>
        {children}
    </div>
  )
}
