import React from 'react'

function index({ result }) {
	return (
		<>
			<h4>Você acertou {result.rightAnswers} de {result.totalAnswers}</h4>
		</>
	)
}

export default index
