// const mongoose = require('mongoose');
const {model,Schema} = require('mongoose');

const profileSchema = new Schema({
    firstName : String,
    lastName : String,
    phone : String,
    avatar : String,
    avatar : String,
    user : {
        type :Schema.Types.ObjectId,
        ref : 'User'
    }

});

const Profile = model('Profile', userSchema);


module.exports = Profile;