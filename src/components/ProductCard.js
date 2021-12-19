import React from 'react';

const ProductCard = ({ name, specifications }) => {
    return (
		<>
			<div className="product-card" style={{ display: 'flex', flexDirection: 'column' }}>
				<h3>{ name }</h3>
				<ul>
					{specifications.map((specification, index) => (
						<li key={index + 1}>{specification}</li>
					))}
				</ul>
			</div>
		</>
	)
};

export default ProductCard;
