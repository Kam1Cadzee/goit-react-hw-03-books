import React from 'react';
import Loader from 'halogen/RotateLoader';
import css from './BookSearch.module.css';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';
import genres from '../../genres';
import ErrorFetch from '../Error/ErrorFetch';

const NO_IMAGE =
  'https://cdn.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png';

class BookSearch extends React.Component {
  state = {
    items: [],
    isLoading: false,
    error: null,
  };

  handleSubmit = (query, genre) => {
    this.setState({ isLoading: true });
    this.fetchBooks(query, genre);
  };

  fetchBooks = (query, genre) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${genre}`;
    const mapDataToBook = item => {
      const info = item.volumeInfo;
      const { authors, imageLinks } = info;

      let author = 'No name';
      let image = NO_IMAGE;

      if (authors) {
        author = authors.join(', ');
      }
      if (imageLinks && imageLinks.smallThumbnail) {
        image = imageLinks.smallThumbnail;
      }

      return {
        id: item.id,
        title: info.title,
        publisher: info.publisher,
        publishedDate: info.publishedDate,
        pageCount: info.pageCount,
        rating: info.averageRating,
        description: info.description,
        author,
        image,
      };
    };

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const items = data.items ? data.items.map(mapDataToBook) : [];
        this.setState({ items });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { items, isLoading, error } = this.state;

    return (
      <div className={css.container}>
        <SearchForm genres={genres} onSubmit={this.handleSubmit} />
        {error ? <ErrorFetch text={error.message} /> : null}
        {isLoading ? (
          <Loader
            className={css.loading}
            color="#26A65B"
            size="16px"
            margin="4px"
          />
        ) : (
          <BookList items={items} />
        )}
      </div>
    );
  }
}

export default BookSearch;
