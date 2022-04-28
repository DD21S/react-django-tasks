import { useState } from 'react';

function Form({ title, buttonTitle, isSubmiting, messageSubmiting, handleSubmit }) {
	const [ name, setName ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ importance, setImportance ] = useState('LO');

	return (
		<div className="task-form">
			<h2>{ title }</h2>
			<form onSubmit={ e => handleSubmit(e, name, description, importance) }>
				<label>Name:</label>
				<input
					type='text'
					required
					value={ name }
					onChange={ e => setName(e.target.value) }
				/>
				<label>Description:</label>
				<textarea 
					required
					value={ description }
					onChange={ e => setDescription(e.target.value) }
				></textarea>
				<label>Importance:</label>
				<select
					value={ importance }
					onChange={ e => setImportance(e.target.value) }
				>
					<option value="LO">Low</option>
					<option value="MD">Medium</option>
					<option value="HI">High</option>
				</select>
				{ !isSubmiting && <button>{ buttonTitle }</button> }
				{ isSubmiting && <button disabled>{ messageSubmiting }</button> }
			</form>
		</div>
	);
}

export default Form;