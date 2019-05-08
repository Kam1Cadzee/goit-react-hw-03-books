import React from 'react';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

class SearchForm extends React.Component {
  state = {
    query: '',
    genre: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { genre, query } = this.state;
    const { onSubmit } = this.props;
    onSubmit(query, genre);
  };

  render() {
    const { genres } = this.props;
    const { genre, query } = this.state;

    return (
      <div className={css.container}>
        <form>
          <input
            name="query"
            type="text"
            value={query}
            onChange={this.handleChange}
          />
          <select
            name="genre"
            value={genre}
            onChange={this.handleChange}
            onBlur={() => null}
          >
            <option value="" disabled>
              Choose here
            </option>
            {genres.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input type="submit" value="Search" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default SearchForm;
