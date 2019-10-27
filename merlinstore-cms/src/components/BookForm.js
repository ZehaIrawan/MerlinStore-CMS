import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../redux/actions/book';

const BookForm = ({ addBook }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    author: '',
    totalChapter: '',
    currentChapter: '',
  });

  const { title, category, author, totalChapter, currentChapter } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    addBook(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title" id="titleLabel">
        Title:
        <input
          type="text"
          name="title"
          id="title"
          onChange={e => onChange(e)}
          value={title}
          required
        />
      </label>
      <label htmlFor="categories" id="categoriesLabel">
        Category:
        <select name="category" onChange={e => onChange(e)} value={category}>
          <option value="0">* Select Category</option>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Fiction">Fiction</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </label>
      <label htmlFor="title" id="titleLabel">
        Author:
        <input
          type="text"
          name="author"
          onChange={e => onChange(e)}
          value={author}
          required
        />
      </label>

      <label htmlFor="title" id="titleLabel">
        Total Chapter:
        <input
          type="text"
          name="totalChapter"
          onChange={e => onChange(e)}
          value={totalChapter}
          required
        />
      </label>

      <label htmlFor="title" id="titleLabel">
        Current Chapter:
        <input
          type="text"
          name="currentChapter"
          onChange={e => onChange(e)}
          value={currentChapter}
          required
        />
      </label>

      <button className="blue-button form-button bold" type="submit">
        Add Book
      </button>
    </form>
  );
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addBook },
)(BookForm);