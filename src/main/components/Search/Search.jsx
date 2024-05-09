import { HiOutlineSearch, HiMinusCircle } from "react-icons/hi";

import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Search({ setSearchTerm }) {
  let [term, setTerm] = useState('');

  function clearSearch() {
    setTerm('');
    setSearchTerm('');
  }

  function updateSearchTerm(event) {
    setTerm(event.target.value);
    setSearchTerm(event.target.value);
  }

  return (
    <div className="search-container">
      <HiOutlineSearch />
      <input
        onChange={updateSearchTerm}
        placeholder="Search for a movie"
        type="text"
        value={term}
      />
      <HiMinusCircle onClick={clearSearch} />
    </div>
  );
}

Search.propTypes = {
  setSearchTerm: PropTypes.func,
};
