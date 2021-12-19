import React, { useState } from 'react';
import axios from 'axios';
import { get } from 'lodash';

const ProductChallenge = () => {
	const [itemsListedByKey, setItemsListed] = useState({});
	const [products, setProducts] = useState([]);

	const baseUrl = 'https://ranekapi.origamid.dev/json/api/produto';

	const fetchProductItems = async productName => {
		if (itemsListedByKey[productName]) {
			return setProducts(itemsListedByKey[productName]);
		}

		const url = `${baseUrl}/${productName}`;

		const response = await axios.get(url);

		const data = get(response, ['data']);

		const images = data.fotos || [];

		setItemsListed(value => {
			return {
				...value,
				[productName]: images
			};
		})

		return setProducts(images);
	}

    return (
		<>
			<h1>Produtos</h1>

			{products.length && (
				<div className="product-card">
					{ products.map(item => {
						return (
							<div key={Math.random()}>
								<h5>{ item.titulo }</h5>
								<img style={{ maxHeight: '80px' }} src={item.src}/>
							</div>
						)
					}) }
				</div>
			)}

			<div style={{ display: 'flex', marginTop: '24px' }}>
				<button className="ds-button ds-button--primary" onClick={() => fetchProductItems('tablet')} style={{ marginRight: '8px' }}>Tablet</button>
				<button className="ds-button ds-button--primary" onClick={() => fetchProductItems('smartphone')} style={{ marginRight: '8px' }}>Smartphone</button>
				<button className="ds-button ds-button--primary" onClick={() => fetchProductItems('notebook')}>Notebook</button>
			</div>
		</>
	)
};

export default ProductChallenge;
