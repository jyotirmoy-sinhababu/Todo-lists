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
        <div className='dis-value-date-cnt'>
          <p className='dis-value-date'>{item.date} </p>
        </div>
        <div className='dis-value-txt-cnt'>
          <p className='dis-value-title'>{item.title} </p>
        </div>
        <div className='dis-value-lists-cnt'>
          {' '}
          <p className='dis-value-lists'>{item.lists} </p>
        </div>
      </div>

      <div>
        <div className='select-cnt'>
          {!item?.priority ? (
            <select className='select' onChange={handleChangeSelect}>
              <option value='high'>High</option>
              <option value='mid'>Mid</option>
              <option value='low'>Low</option>
            </select>
          ) : (
            <p>{item?.priority}</p>
          )}
        </div>
        <div className='checkbox-cnt'>
          <input type='checkbox' name='check' value='done' />
          <label className='label' htmlFor='vehicle1'>
            {' '}
            I have completed
          </label>
        </div>
        <div className='btn-cnt-one'>
          {' '}
          <button className='btn' onClick={openEdit}>
            Edit
          </button>
          <button
            className='btn'
            onClick={() => {
              handelDelete(item);
            }}
          >
            Delete
          </button>
        </div>
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
