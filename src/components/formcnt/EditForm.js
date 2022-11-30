import React, { useState } from 'react';

import './form.css';

const EditForm = ({ closeEdit, inputs, handleEdit }) => {
  const [editedData, setEditedData] = useState(inputs);
  const onChangeEdit = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault(e);
          handleEdit(editedData);
        }}
      >
        <input
          className='input-txt'
          onChange={(e) => {
            onChangeEdit(e);
          }}
          value={editedData.title}
          type='text'
          name='title'
          placeholder=' Enter title'
        />
        <input
          className='input-txt'
          onChange={(e) => {
            onChangeEdit(e);
          }}
          value={editedData.date}
          type='text'
          name='date'
          placeholder='Enter date'
        />
        <textarea
          className='input-txt-area'
          onChange={(e) => {
            onChangeEdit(e);
          }}
          value={editedData.lists}
          name='lists'
          placeholder='Write your lists'
        ></textarea>
        <div className='btn-cnt'>
          {' '}
          <button className='btn' type='submit'>
            Save
          </button>
          <button className='btn' onClick={closeEdit}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
