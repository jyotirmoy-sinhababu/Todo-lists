import React, { useState } from 'react';
import Modal from '../../modal/Modal';
import EditForm from '../formcnt/EditForm';

import './display.css';

const DisplayLists = ({ item, handleEdit, handelDelete }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const openEdit = () => {
    setIsEditOpen(true);
  };

  const closeEdit = () => {
    setIsEditOpen(false);
  };

  const handleChangeSelect = (e) => {
    item.priority = e.target.value;
  };

  return (
    <div className='display-cnt'>
      <div className='dis-value-cnt'>
        {' '}
        <div>
          <p className='dis-value'>{item.title} </p>
          <p className='dis-value'>{item.lists} </p>
        </div>
        <div>
          <p className='dis-value'>{item.date} </p>
        </div>
      </div>

      <div>
        <div>
          {!item?.priority ? (
            <select onChange={handleChangeSelect}>
              <option value='high'>High</option>
              <option value='mid'>Mid</option>
              <option value='low'>Low</option>
            </select>
          ) : (
            <p>{item?.priority}</p>
          )}
        </div>
        <div>
          <input type='checkbox' name='check' value='done' />
          <label htmlFor='vehicle1'> I have completed</label>
        </div>
        <button onClick={openEdit}>Edit</button>
        <button
          onClick={() => {
            handelDelete(item);
          }}
        >
          Delete
        </button>
      </div>
      <div>
        <Modal isOpen={isEditOpen}>
          <EditForm
            closeEdit={closeEdit}
            inputs={item}
            handleEdit={handleEdit}
          />
        </Modal>
      </div>
    </div>
  );
};

export default DisplayLists;
