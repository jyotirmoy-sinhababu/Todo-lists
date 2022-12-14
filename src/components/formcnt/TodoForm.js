import React from 'react';
import { useState } from 'react';

import './form.css';

const TodoForm = ({ handleSubmit, isClose }) => {
  const [data, setData] = useState('');
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault(e);
          handleSubmit(data);
        }}
      >
        <input
          className='input-txt'
          onChange={(e) => {
            handleChange(e);
          }}
          type='text'
          name='title'
          placeholder=' Enter title'
        />
        <input
          className='input-txt'
          onChange={(e) => {
            handleChange(e);
          }}
          type='text'
          name='date'
          placeholder='Enter date'
        />
        <textarea
          className='input-txt-area'
          onChange={(e) => {
            handleChange(e);
          }}
          name='lists'
          placeholder='Write your lists'
        ></textarea>
        <div className='btn-cnt'>
          {' '}
          <button className='btn' type='submit'>
            Add
          </button>
          <button onClick={isClose} className='btn'>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
