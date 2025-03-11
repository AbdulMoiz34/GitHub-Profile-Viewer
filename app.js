function getData() {
    const input = document.querySelector("#input");
    const joinedDate = document.querySelector(".joined-date");
    const img = document.querySelector(".profile-img");
    const username = document.querySelector(".username");
    const totalRepo = document.querySelector(".total-repo");

    fetch(`https://api.github.com/users/${input.value}`)
        .then(res => res.json())
        .then(function (data) {
            // joinedDate.textContent = 
            img.src = data.avatar_url;
            username.textContent = data.username;
            totalRepo.textContent = data.public_repos;
            joinedDate.textContent = new Date(data.created_at).toDateString();
            console.log(data);
        });
}