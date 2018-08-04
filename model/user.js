
class User {

    constructor(resData) {
        this.userName = resData.userName;
        this.password = resData.password;
    }

}


module.exports.User = User;