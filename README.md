# 🎬 CMPS Film Index - Frontend

## 📌 Project Overview
**CMPS Film Index** is a frontend interface for browsing, filtering, and managing a collection of films.  
Built using standard web technologies (HTML, CSS, JavaScript, jQuery), the frontend connects to a RESTful backend API to interact with a PostgreSQL database.  
- 📦 Lightweight and fast  
- 🔍 Filter films by genre or year  
- ➕ Add, update, or delete films via the interface  

## 📚 Table of Contents
- [Project Overview](#-project-overview)  
- [Installation & Setup](#-installation--setup)  
- [Usage Instructions](#-usage-instructions)  
- [Interface](#interface)  
- [API Integration](#-api-integration)  
- [Post and Put Films](#post-and-put-films)  
- [Contributing Guidelines](#-contributing-guidelines)  
- [License](#-license)  

## 🛠 Installation & Setup
### ✅ Prerequisites  
To run the frontend locally, make sure you have:  
- A browser like Chrome or Firefox  
- (Optional) Live Server extension for VS Code OR Python HTTP server  

### ⚙️ Setup Instructions  
1. Clone the repository:  
```bash
git clone https://github.com/JJGrennie/CMPS_Index
```
2. Navigate to the frontend folder:  
[https://github.com/JJGrennie/CMPS_Index/tree/frontend](https://github.com/JJGrennie/CMPS_Index/tree/frontend)  
3. Launch with Live Server or open in a browser:  
[http://localhost:8000](http://localhost:8000)  

## 🚀 Usage Instructions  
Once loaded in the browser:  
- 🎥 Browse all films  
- 🔍 Use filters (genre/year) to narrow results  
- ➕ Submit new films using the form  
- 🛠️ Edit or delete existing entries (using backend API)  

## 🖼️ Interface  
- **Index Main Page**  
![Index Page](https://github.com/user-attachments/assets/b8f6ac36-458a-4071-9f74-ae89c3ef5494)  
- **Add Film Page**  
![Add Film](https://github.com/user-attachments/assets/fe6531d5-1bb5-4586-83cc-0ccd2dc7614e)  
- **Change Film Page**  
![Change Film](https://github.com/user-attachments/assets/52187630-be66-4372-91df-b3430181342c)  

## 🌐 API Integration  
**Base URL for API**  
```js
const baseUrl = "https://cmps-index.onrender.com/api/v1/film";
```
### Get All Films  
```js
fetch(baseUrl)
  .then(response => response.json())
  .then(data => {
    const formattedData = data.map(film => [
        film.id,
        film.genre,
        film.movie,
        film.year,
    ]);
    console.log(formattedData);
  });
```
### Filter by Genre  
```js
fetch("https://cmps-index.onrender.com/api/v1/film/filter/search?genre=thriller")
  .then(res => res.json())
  .then(data => console.log(data));
```
### Filter by Year  
```js
fetch("https://cmps-index.onrender.com/api/v1/film/filter/search?year=1995")
  .then(res => res.json())
  .then(data => console.log(data));
```
### Filter by ID  
```js
fetch("https://cmps-index.onrender.com/api/v1/film/2")
  .then(res => res.json())
  .then(data => console.log(data));
```

## ✏️ Post and Put Films  

### Post a New Film  
```js
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
```

### Update an Existing Film  
```js
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
```

## 🤝 Contributing Guidelines  
1. Fork this repository  
2. Create a new branch:  
```bash
git checkout -b feature-name
```
3. Make your changes and commit:  
```bash
git commit -m "Add feature"
```
4. Push to your fork:  
```bash
git push origin feature-name
```
5. Open a Pull Request  

## 📄 License  
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
