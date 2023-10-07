import React from 'react';
import './More.css';

export const More = ({ onClick }) => {
  return (
    <div className='showcase__more more'>
      <button
        type='button'
        className='more__button more__button_previous'
        onClick={() => {
          onClick();
          console.log('more => Click!');
        }}
      >
        {'Предыдущая страница <<'}
      </button>
      <span className='more__page-number'></span>
      <button
        type='button'
        className='more__button more__button_next'
        onClick={() => {
          onClick();
          console.log('more => Click!');
        }}
      >
        {'>> Следущая страница'}
      </button>
    </div>
  );
};