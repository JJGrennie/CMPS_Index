const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
	event.preventDefault();
	const formData = new FormData(formEl);
	const data = Object.fromEntries(formData);

	const { id, genre, movie, year } = data;

	if (!id || genre === "" || movie === "" || year === "") {
		alert("Please fill out all fields including the ID.");
	} else {
		fetch(`https://cmps-index.onrender.com/api/v1/film/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ genre, movie, year })
		})
		.then(res => {
			if (!res.ok) {
				throw new Error("Failed to update film");
			}
			return res.json();
		})
		.then(response => {
			alert(`Success! Film ID ${id} updated to: "${movie}" (${year}) in the ${genre} genre.`);
		})
		.catch(error => {
			console.error(error);
			alert("Something went wrong while updating. Please try again.");
		});
	}
});