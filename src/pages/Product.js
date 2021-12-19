import React from 'react';
import ProductCard from '../components/ProductCard'

const Product = () => {
	const items = [{
		name: 'MacBook Pro',
		specifications: ['16GB ram', '512GB SSD']
	}, {
		name: 'MacBook Air',
		specifications: ['8GB ram', '128 SSD']
	}];

    return (
		<>
			<h1>Produtos</h1>

			<div style={{ margin: '0 20px' }}>
				{items.map((item, index) => (
					<ProductCard key={index + 1} name={item.name} specifications={item.specifications}/>
				))}
			</div>
		</>
	)
};

export default Product;
