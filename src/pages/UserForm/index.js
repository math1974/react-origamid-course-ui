import React, { useCallback } from 'react'

import './style.css';

function UserForm() {
	const defaultValues = {
		name: '',
		born: '',
		cpf: '',
		password: '',
		email: '',
		receive_notifications: false,
		gender: ''
	};
	const [data, setData] = React.useState(defaultValues);
	const formInputs = [{
		type: 'text',
		key: 'name',
		placeholder: 'Nome'
	}, {
		type: 'text',
		key: 'born',
		placeholder: 'Data de nascimento'
	}, {
		type: 'text',
		key: 'cpf',
		placeholder: 'CPF'
	}, {
		type: 'password',
		key: 'password',
		placeholder: 'Senha'
	}, {
		type: 'email',
		key: 'email',
		placeholder: 'Email'
	}, {
		type: 'checkbox',
		value: "receive_notications",
		key: 'receive_notifications',
		placeholder: 'Deseja receber notificações via e-mail?'
	}, {
		type: 'radio',
		value: "man",
		key: 'gender',
		name: 'gender',
		placeholder: 'Masculino'
	}, {
		type: 'radio',
		value: "woman",
		key: 'gender',
		name: 'gender',
		placeholder: 'Feminino'
	}];

	const handleInputChange = useCallback((event, key) => {
		const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

		setData(info => ({
			...info,
			[key]: inputValue
		}));
	}, []);

    return (
        <>
			{
				formInputs.map((item, index) => {
					return (
						<div key={index} style={{ marginTop: index !== 0 && '16px'  }}>
							<label htmlFor={item.key}>{item.placeholder}</label>

							<input type={item.type} name={item.name} value={!['checkbox', 'radio'].includes(item.type) ? data[item.key] : item.value} checked={['checkbox', 'radio'].includes(item.type) ? item.type === 'checkbox' ? data[item.key] : data[item.key] === item.value : false} onChange={event => handleInputChange(event, item.key)} placeholder={item.placeholder} id={item.key}></input>
						</div>
					)
				})
			}
        </>
    )
}

export default UserForm
