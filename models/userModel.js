const db = require('../database/dbConfig');

async function insertUser(username, password) {
    //TODO start your code right here
    console.log(username)
    console.log(password)
    const result = await db('users')
        .insert({ email: username, user_password: password });
    console.log(result);
    return result;
}

async function findUser(username, password) {
    const result = await db('users')
        .where("email", username)
        .where("user_password", password)
        .select();
    return result;
}

module.exports = { findUser, insertUser };