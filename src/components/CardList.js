 import React from 'react';
 import Card from './Card';
 // import Avatar from './Avatar';

const CardList=({Avatar})=>{
	return(
		<div>
			{
			Avatar.map((user,i)=>{
			return (
				<Card
					 key={i}
					 id={Avatar[i].id}
					 name={Avatar[i].name}
					 email={Avatar[i].email}
				 />
			);	
			})
		}

		</div>
	);
}
 
export default CardList;