import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import SearchElement from '../../components/searchElement';

const ENTER_KEY = 'Enter';

const SearchBox = ({ search, data }) => {
  const [query, setQuery] = useState('');

  const handleChange = useCallback(
    ({ target: { value } }) => setQuery(value),
  );

  const handleClick = useCallback(
    () => search(query),
    [query],
  );

  const handleKeyPress = useCallback(
    ({ key }) => (key === ENTER_KEY ? handleClick() : undefined),
    [handleClick],
  );

  return (
    <SearchElement
      handleChange={handleChange}
      handleClick={handleClick}
      handleKeyPress={handleKeyPress}
      data={data}
    />
  );
};
SearchBox.propTypes = {
  search: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SearchBox;
