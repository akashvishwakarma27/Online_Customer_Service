console.log("JavaScript file loaded.");
document.getElementById('login-form').addEventListener('submit', async function (event) {
    console.log("Form submit event triggered.");
	event.preventDefault();

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	const data = {
		username: username,
		password: password,
	};

	console.log("Before fetch:", data);

	try {
		const response = await fetch('http://localhost:8080/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	
		console.log("After fetch:", response);
	
		if (!response.ok) {
			throw new Error('Login failed.');
		}
	
		const result = await response.json();
		console.log("Response data:", result);
	} catch (error) {
		console.error("Error:", error);
	}
});
