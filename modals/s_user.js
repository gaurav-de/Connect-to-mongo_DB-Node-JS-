const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
    email: { type: String, required: true, unique: true }, // you can remove unique attribute
    age: String,
}, {timestamps: true})

const User = mongoose.model('usernames', usersSchema) // 'usernames' is collection 
module.exports = User