
const registrationForm = document.getElementById('registrationForm')


console.log(firstName)
const handleSubmit = (event) => {
	event.preventDefault()
	const firstName = document.getElementById("firstName").value
	const lastName = document.getElementById("lastName").value
	const mobile = document.getElementById("mobile").value
	const email = document.getElementById("email").value
	const city = document.getElementById("city").value
	const data = {
		firstName: firstName,
		lastName : lastName,
		email : email,
		mobile : mobile,
		city : city,
	}
	console.log(firstName)
    console.log(data)
	fetch('http://localhost:8080/customers', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((responseData) => {
			console.log('Response from API:', responseData)
		})
		.catch((error) => {
			console.error('Error:', error)
		})
}

const submitButton = document.querySelector('button[type="submit"]')
submitButton.addEventListener('submit', handleSubmit)

const handleLogin = (event) => {
	event.preventDefault()

	const loginForm = document.getElementById('login-form')

	const usernameEl = document.getElementById("username") 
	const passwordEl = document.getElementById("password")


	const data = {
	username : usernameEl.value,
	password : passwordEl.value
	}

	console.log("data is", data)

	fetch('http://localhost:8080/customers', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((responseData) => {
			console.log('Response from API:', responseData)
		})
		.catch((error) => {
			console.error('Error:', error)
		})
}

const submitButtonForLogin = document.getElementById('loginbutton')
submitButtonForLogin.addEventListener('click', handleLogin)
