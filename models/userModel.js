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
    console.log(username);
    console.log(password);
    console.log("credentials | result");
    console.log(result);
    if (result[0]) {
        return true;
    }
    else {
        return false;
    }
    
}



module.exports = { findUser, insertUser };