const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
	event.preventDefault();
	const formData = new FormData(formEl);
	const data = Object.fromEntries(formData);

	if(data.genre === "" || data.movie === "" || data.year === "") {
		alert("Please fill out all fields before submitting.");
	} else {
		fetch('https://cmps-index.onrender.com/api/v1/film', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(res => {
			if (!res.ok) {
				throw new Error("Failed to submit");
			}
			return res.json();
		})
		.then(response => {
			alert(`Success! "${data.movie}" (${data.year}) added to the ${data.genre} genre.`);
		})
		.catch(error => {
			console.error(error);
			alert("Something went wrong. Please try again.");
		});
	}
});