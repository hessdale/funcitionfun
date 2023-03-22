let usernames = [`Dale1`, `Dale2`, `Dale3`];


function generic_greeting() {
    console.log(`hello welcome`);
}

generic_greeting();

function specific_greeting(usernames) {
    console.log(`hello there ${usernames} ,welcome`);
}

specific_greeting(`Dale1`);