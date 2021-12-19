import React, { useState } from 'react'
import QuestionForm from '../../components/QuestionForm'
import ExamResult from '../../components/ExamResult'

function UserForm() {
	const [result, setResult] = useState(null);
	const [questions, setQuestions] = useState([{
		id: 1,
		text: 'Which method is used to reduce or keep an array length.',
		options: [
			'reduce',
			'map',
			'filter'
		],
		rightAnswer: 'filter'
	}, {
		id: 2,
		text: 'How can we parse a number to Integer?',
		options: [
			'parseInt()',
			'parseFloat()',
			'Number()'
		],
		rightAnswer: 'parseInt()'
	}, {
		id: 3,
		text: 'If you log typeof an array, what is it gonna output?',
		options: [
			'object',
			'array',
			'string'
		],
		rightAnswer: 'object'
	}]);

	const [question, setQuestion] = useState(questions[0]);

	const updateQuestionsInfo = () => {
		const questionIndex = questions.findIndex(item => item.id === question.id);
		const newQuestions = [...questions];

		newQuestions[questionIndex] = {
			...question
		};

		setQuestions([...newQuestions]);

		return newQuestions;
	};

	const handleNextQuestion = () => {
		const questionIndex = questions.findIndex(item => question.id === item.id);

		const questionsUpdated = updateQuestionsInfo();

		if (questionIndex + 1 === questions.length) {
			const rightAnswers = questionsUpdated.filter(item => item.rightAnswer === item.answer).length;

			setResult({
				rightAnswers,
				totalAnswers: questionsUpdated.length
			});

			setQuestion(null);

			return ;
		}

		const newQuestion = questions[questionIndex + 1];

		setQuestion({
			...newQuestion
		});
	};

	const handleSelectAnswer = ({ target }) => {
		const inputValue = target.value;

		setQuestion({
			...question,
			answer: inputValue
		});
	};

    return (
        <>
			{
				question ? (
					<QuestionForm question={question} handleNextQuestion={handleNextQuestion} handleSelectAnswer={handleSelectAnswer} />
				) : (
					<ExamResult result={result} />
				)
			}
        </>
    )
}

export default UserForm
