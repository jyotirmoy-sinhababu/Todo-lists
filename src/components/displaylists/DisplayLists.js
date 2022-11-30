import React from 'react';

const DisplayLists = ({ item }) => {
  return (
    <div>
      <div>
        <p>{item.title} </p>
        <p>{item.lists} </p>
      </div>
      <div>
        <p>{item.date} </p>
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default DisplayLists;
