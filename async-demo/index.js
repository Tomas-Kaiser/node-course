console.log("Before");
const user = getUser(1, (user) => {
    console.log(user);
    getRepositories(user.gitHubUsername, (repos) => {
        console.log(repos);
    });
});
console.log("After");

function getUser(id, callback) {
    setTimeout(() => { // This is async func or unblocking func. This schedule a task to be perform in the future
        console.log(`Reading a user with id ${id} from a database...`);
        callback({id, gitHubUsername: "Tomas"});
    }, 1000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log(`Getting repos for ${username}...`);
        callback(["repo1", "repo2", "repo3"]);
    }, 1000);
}