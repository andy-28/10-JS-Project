const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("andy-28");

async function getUser(username) {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json;

    createUserCard(respData);
    gerRepos(username);
}

async function gerRepos(username) {
    const resp = await fetch(APIURL + username + "/repos");
    const respData = await resp.json();

    addReposToCard(respData);
}