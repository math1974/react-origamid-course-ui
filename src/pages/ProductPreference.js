import axios from 'axios';
import { get } from 'lodash';
import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading'

const ProductPreference = () => {
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(false);
	const [preference, setPreference] = useState('');
	const baseUrl = 'https://ranekapi.origamid.dev/json/api/produto';

	const init = () => {
		const preference = localStorage.getItem('preference');
		const product = localStorage.getItem('product');

		setPreference(preference);
		setProduct(product && JSON.parse(product));
	};

	useEffect(init, []);

	const getPreferenceItem = async name => {
		const url = `${baseUrl}/${name}`;

		const response = await axios.get(url);

		return get(response, ['data']);
	}

	const addPreference = async name => {
		setLoading(true);

		localStorage.setItem('preference', name);

		setPreference(name);

		setTimeout(async () => {
			const product = await getPreferenceItem(name);

			addProduct(product);

			setLoading(false);
		}, 2000);
	};

	const addProduct = product => {
		localStorage.setItem('product', JSON.stringify(product));

		setProduct(product);
	}

    return (
		<>
			<main style={{ justifyContent: 'center', textAlign: 'center' }}>
				<h1>Preferência {preference ? `: ${preference}` : ''}</h1>

				{loading && (
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<Loading />
					</div>
				)}

				{
					!loading && preference && product && (
						<div style={{ marginTop: '16px' }}>
							<h4>{ product.nome }</h4>

							<p>{ product.preco }</p>
						</div>
					)
				}

				<div style={{ marginTop: '16px' }}>
					<button disabled={loading} onClick={() => addPreference('notebook')} style={{ marginRight: '8px' }} className="ds-button ds-button--primary">Notebook</button>
					<button disabled={loading} onClick={() => addPreference('smartphone')} className="ds-button ds-button--primary">Smartphone</button>
				</div>
			</main>
		</>
	)
};

export default ProductPreference;
