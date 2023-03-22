let users = [`Dale1`, `Dale2`, `Dale3`, `admin`];


function generic_greeting() {
    console.log(`hello welcome`);
}

generic_greeting();

function specific_greeting(usernames) {
    console.log(`hello there ${usernames} ,welcome`);
}

specific_greeting(`Dale1`);

function find_admin(users, search_user) {
    for (let counter = 0; counter < userslength; counter++) {
        if (users[counter] === `admin`) {
            return true;
        }
    }
    return false;
}