let mainDiv = document.querySelector(".album");
fetch("https://jsonplaceholder.typicode.com/albums")
	.then((result) => result.json())
	.then((albums) => {
		albums.forEach((album) => {
			let albumSpan = document.createElement("span");
			let userId = document.createTextNode(`User Id : ${album.userId}`);
			let id = document.createTextNode(`Id : ${album.id}  `);
			let title = document.createTextNode(`Title : ${album.title}  `);
			albumSpan.appendChild(userId);
			albumSpan.appendChild(id);
			albumSpan.appendChild(title);
			mainDiv.appendChild(albumSpan);
		});
	});
