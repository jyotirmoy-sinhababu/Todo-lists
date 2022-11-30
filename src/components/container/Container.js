import React, { useEffect, useState } from 'react';
import Modal from '../../modal/Modal';
import DisplayLists from '../displaylists/DisplayLists';
import TodoForm from '../formcnt/TodoForm';

const Container = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formInput, setFormInput] = useState([]);

  // to open modal
  const openModal = () => {
    setIsOpen(true);
  };

  //to save todo-form data
  const saveTodoData = (data) => {
    if (data?.title && data?.date && data?.lists) {
      data.id = Math.floor(Math.random() * 1000);
      setFormInput([...formInput, data]);
      setIsOpen(false);
    }
  };
  useEffect(() => {
    console.log(formInput);
  }, [formInput]);
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '1500px',
          gap: '2rem',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginRight: '2.5rem',
          height: '80px',
        }}
      >
        <p
          style={{
            fontSize: '1.5rem',
            fontWeight: 400,
            color: 'cornflowerblue',
          }}
        >
          Start taking note..
        </p>
        <div
          className='add-btn-cnt'
          style={{
            height: '55px',
            width: '55px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            backgroundColor: 'cornflowerblue',
          }}
        >
          <button
            onClick={openModal}
            style={{
              border: 'none',
              backgroundColor: 'cornflowerblue',
              borderRadius: '50%',
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='43'
              height='43'
              fill='currentColor'
              className='bi bi-plus-lg'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        {formInput?.map((item) => {
          return (
            <div key={item.id}>
              <DisplayLists item={item} />
            </div>
          );
        })}
      </div>
      <div>
        <Modal isOpen={isOpen}>
          <TodoForm handleSubmit={saveTodoData} />
        </Modal>
      </div>
    </>
  );
};

export default Container;
