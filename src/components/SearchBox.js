import React from 'react';
import './SearchBox.css'
const SearchBox=(({searchfield,searchChange})=>{
	return(
		// className='pa2'
		<div id='box'>
			<input 
			className='pa3 ba b--green bg-lightest-blue' 
			type='search' 
			placeholder="Search your friends" 
			onChange={searchChange}/>
		</div>
		);
}
)
export default SearchBox;