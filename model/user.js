const jwt = require('../utils/jwt');
const { mongo } = require('../dao');
const { collections, userTypes } = require('../const');


class User {

    constructor(resData) {
        this.userName = resData.userName;
        this.password = resData.password;
        this.type = resData.password;
    }

    makeAdmin() {
        this.type = userTypes.ADMIN;
    }

    makeRegular() {
        this.type = userTypes.REGULAR;
    }

    encryptPassword() {
        this.password = jwt.encryptPassword(this.password)
    }

    serialize() {
        return {
            "userName": this.userName,
            "password": this.type
        }

    }

    async save() {

        await mongo.insert(collections.users, this);

    }

}


module.exports = User;