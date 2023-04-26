const header = document.createElement("h1");
header.textContent = "WOW!";

const root = document.querySelector("#root");
root.append(header);

fetch("http://localhost:3000/posts/")
    .then(response => response.json())
    .then(messages => {
        console.log(messages);
        messages.forEach(message => {
            const postElement = document.createElement("p");
            postElement.textContent = `${message.id} (${message.author}): ${message.title}`;
            root.append(postElement);
        });
    });
