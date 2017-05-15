import React from 'react';
import propTypes from 'prop-types';

const AddItem = ({ onSubmit }) => {
  return (
    <div>
      <p>Add a new item!</p>
      <form onSubmit={onSubmit}>
        <label for="name">Item name</label>
        <input id="name" name="name" type="text" />
        <br />

        <label for="description">Item description</label>
        <input id="description" name="description" type="text" />
        <br />

        <label for="amount">Item amount</label>
        <input id="amount" name="amount" type="text" />
        <br />

        <label for="category">Item category</label>
        <input id="category" name="category" type="text" />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

AddItem.propTypes = {
  onSubmit: propTypes.func.isRequired
};

export default AddItem;
