import React from 'react';
import PropTypes from 'prop-types';
import css from './BookList.module.css';
import BookListItem from './BookListItem/BookListItem';

const BookList = ({ items }) => {
  return (
    <div className={css.container}>
      {items.length === 0 ? (
        <p>Ничего не найдено</p>
      ) : (
        items.map(item => <BookListItem key={item.id} {...item} />)
      )}
    </div>
  );
};

BookList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
BookList.defaultProps = {
  items: [],
};
export default BookList;
