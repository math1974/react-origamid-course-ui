import React from 'react'

import './style.css';
import '../../css/Button.css';

function index({ question, handleSelectAnswer, handleNextQuestion }) {
	return (
		<>
			<div className="question-form__item">
				<div className="question-form__item__title">{ question?.text }</div>

				{
					question?.options.map((value, index) => {
						return (

							<div key={index + 1}>
								<input type="radio" name="question" checked={question.answer === value} value={value} onChange={handleSelectAnswer} id={value}></input>

								<label htmlFor={value}>
									{value}
								</label>
							</div>
						)
					})
				}

			</div>

			<button className="ds-button ds-button--primary" onClick={handleNextQuestion}>Próximo</button>
		</>
	)
}

export default index
