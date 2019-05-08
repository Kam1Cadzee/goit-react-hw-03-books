import React from 'react';
import css from './BookListItem.module.css';
import PropTypes from 'prop-types';

const BookListItem = props => {
  const {
    title,
    image,
    description,
    author,
    publisher,
    publishedDate,
    pageCount,
    rating,
  } = props;
  return (
    <div className={css.container}>
      <div className={css.main}>
        <div className={css.image}>
          <img src={image} alt="" />
        </div>
        <div className={css.info}>
          <h1>Название: {title}</h1>
          <p>Автор: {author}</p>
          <p className={css.description}>Описание: {description}</p>
        </div>
      </div>
      <div>
        <p>
          <strong>Издатель: </strong>
          {publisher}
          <strong> Год: </strong>
          {publishedDate}
        </p>
        <p>
          <strong>Кол-во страниц: </strong>
          {pageCount} <strong>Рейтинг: </strong> {rating}
        </p>
      </div>
    </div>
  );
};

BookListItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  publisher: PropTypes.string,
  author: PropTypes.string.isRequired,
  publishedDate: PropTypes.string,
  pageCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
BookListItem.defaultProps = {
  description: '',
  rating: 'N/A',
  pageCount: 'N/A',
  publishedDate: 'N/A',
  publisher: '',
};
export default BookListItem;
