document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#nome');
    const usernameElement = document.querySelector('#login');
    const avatarElement = document.querySelector('#img');
    const repositorioElement = document.querySelector('#repositorio');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    async function fetchUserData() {
        try {
            const response = await fetch('https://api.github.com/users/Filipexico');
            if (!response.ok) {
                throw new Error('User not found');
            }
            const json = await response.json();
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;
            followersElement.innerText = json.followers;
            repositorioElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        } catch (error) {
            console.error('Error fetching user data:', error);
            nameElement.innerText = 'Erro ao carregar dados do usuário';
        }
    }

    fetchUserData();
});