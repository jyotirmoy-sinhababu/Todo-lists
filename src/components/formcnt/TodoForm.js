import React from 'react';

const TodoForm = () => {
  return (
    <>
      <form>
        <input type='text' name='title' placeholder=' Enter title' />
        <input type='text' name='date' placeholder='Enter date' />
      </form>
    </>
  );
};

export default TodoForm;
