import React from 'react';


const SearchBox = ({searchChange}) => {
    return(
        <input type="search" placeholder="Enter name" onChange={searchChange} />
    )
}

export default SearchBox;
