import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');
  const { setProducts, setLoading } = useContext(AppContext);

  const handlesSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (  
    <form className="search-bar" onSubmit={handlesSearch}>
      {name}
      <input type="search" value={searchValue} placeholder="Buscar Produtos" className="search__input" onChange={ ({ target }) => setSearchValue(target.value) } required />

      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
