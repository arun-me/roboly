import React from 'react';

const Card=({name,email,id})=>{
			return(
			<div className='tc bg-light-green grow br3 pa3 ma2 dib bw3 shadow-5'>
			<img alt="Avatars"src={`https://robohash.org/set_set5/bgset_bg1/${id}?size=200x200`}/>
			<div>
			<h2>{name}</h2>
			<p>{email}</p>
			</div>
			</div>
			);
	}
export default Card;