function surprise() {
    let message = document.getElementById("message");
    message.innerText = "You found the fun button!";
    message.style.color = "#00ccff";
}

function addPost() {
    let input = document.getElementById("newPost");
    if (input && input.value) {
        let posts = document.getElementById("posts");
        posts.innerHTML += `
            <div class="post">
                <h2>New Post</h2>
                <p>${input.value}</p>
            </div>
        `;
        input.value = "";
    }
}

function addLearn() {
    let message = document.getElementById("learn-message");
    message.innerText = "Lesson added! (Check back for more.)";
    message.style.color = "#222";
}
