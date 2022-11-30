import React from 'react';
import { useState } from 'react';

const TodoForm = ({ handleSubmit }) => {
  const [data, setData] = useState('');
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault(e);
          handleSubmit(data);
        }}
      >
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          type='text'
          name='title'
          placeholder=' Enter title'
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          type='text'
          name='date'
          placeholder='Enter date'
        />
        <textarea
          onChange={(e) => {
            handleChange(e);
          }}
          name='lists'
          placeholder='Write your lists'
        ></textarea>
        <button type='submit'>Add</button>
      </form>
    </>
  );
};

export default TodoForm;
