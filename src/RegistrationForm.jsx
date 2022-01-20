import React, { useState } from 'react'
import './RegistrationForm.css'
import RegistList from './RegistList'

const RegistrationForm = () => {
	const [userInput, setUserInput] = useState({
		fname: '',
		lname: '',
		email: '',
		pass: '',
		selected: 'JavaScript',
		message: '',
	})
	const [registArray, setRegistArray] = useState([])

	const inputChangeHandler = (event) => {
		const currentInput = event.target.name

		setUserInput((prevState) => {
			return {
				...prevState,
				[currentInput]: event.target.value,
			}
		})
	}

	const submitHandler = (event) => {
		event.preventDefault()
		const registrationData = {
			...userInput,
			id: Math.random().toString(),
		}
		console.log(registrationData)

		setRegistArray([...registArray, registrationData])
	}
	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className='registration-container'>
					<label id='heading'> Registration Form</label>
					<div className='registration-container_input'>
						<label>Login</label>
						<input
							name='login'
							type='text'
							onChange={inputChangeHandler}
							value={userInput.login ||''}
						/>
					</div>
					<div className='registration-container_input'>
						<label>First Name</label>
						<input
							name='fname'
							type='text'
							onChange={inputChangeHandler}
							value={userInput.fname ||''}
						/>
					</div>
					<div className='registration-container_input'>
						<label>Last Name</label>
						<input
							name='lname'
							type='text'
							onChange={inputChangeHandler}
							value={userInput.lname ||''}
						/>
					</div>
					<div className='registration-container_input'>
						<label>Email</label>
						<input
							name='email'
							type='email'
							onChange={inputChangeHandler}
							value={userInput.email ||''}
						/>
					</div>
					<div className='registration-container_input'>
						<label>Password</label>
						<input
							name='pass'
							type='password'
							onChange={inputChangeHandler}
							value={userInput.pass ||''}
						/>
					</div>
					<div className='registration-container_input'>
						<label>Select course</label>
						<select
							name='selected'
							onChange={inputChangeHandler}
							value={userInput.selected ||''}
						>
							<option value='JavaScript'>JavaScript</option>
							<option value='Java'>Java</option>
							<option value='UX/UI Design'>UX/UI Design</option>
							<option value='Project Management'>Project Management</option>
						</select>
					</div>
					<div className='registration-container_input'>
						<label>Message</label>
						<textarea
							name='message'
							onChange={inputChangeHandler}
							value={userInput.message}
						></textarea>
					</div>

					<div className='registration-action'>
						<button type='submit'>Register Now</button>
					</div>
				</div>
			</form>
			<RegistList registration={registArray} />
		</div>
	)
}

export default RegistrationForm
