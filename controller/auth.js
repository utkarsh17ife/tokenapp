const { Response, User } = require('../model');
const { mongo } = require('../dao');
const { collections, userTypes } = require('../const');
const jwt = require('../utils/jwt');


async function createAdmin(adminData) {

    try {

        let user = new User(adminData);
        user.encryptPassword()
        user.makeAdmin()
        user.save()

        console.log(`Admin: ${adminData.userName} created`);

    } catch (err) {

        console.log(`Failed to create Admin: ${adminData.userName}`);

    }

}


async function signup(signupData) {

    try {

        let user = new User(signupData);
        let available = await user.userNameAvailability();
        if (!available) {
            return new Response({
                code: 200,
                message: "UserName taken",
                data: {},
                err: null
            })
        }

        user.encryptPassword()
        user.makeRegular()
        user.save()

        return new Response({
            code: 200,
            message: "success full sinup",
            data: {},
            err: null
        })

    } catch (err) {

        return new Response({
            code: 500,
            message: "Something went wrong",
            data: null,
            err: err.message
        })


    }

}



async function login(loginData) {

    try {

        let user = new User({});
        let userFromDb = await user.getByUserName(loginData.userName);
        if (!userFromDb) {
            return new Response({
                code: 200,
                message: "No such user in the system",
                data: null,
                err: null
            })
        }

        //check for creds
        if (!jwt.comparePassword(loginData.password, userFromDb.password)) {
            return new Response({
                code: 200,
                message: "Wrong userName/password",
                data: null,
                err: null
            })
        };

        //create JWT token
        delete userFromDb.password;
        let jwtToken = jwt.createToken(userFromDb);
        return new Response({
            code: 200,
            message: "success full login",
            data: {
                userDetails: userFromDb,
                jwtToken
            },
            err: null
        })



        return new Response({
            code: 200,
            message: "success full login",
            data: null,
            err: null
        })


    } catch (err) {
        console.log(err)
        return new Response({
            code: 500,
            message: "Something went wrong",
            data: null,
            err: err.message
        })


    }

}


async function checkAdmins(noOfAdmins) {

    try {

        let admins = await mongo.query(collections.users, {
            type: userTypes.ADMIN
        })

        return admins.length >= noOfAdmins;


    } catch (err) {

        return new Response({
            code: 500,
            message: "Something went wrong",
            data: null,
            err: err.message
        })


    }

}





module.exports = {
    signup,
    login,
    createAdmin,
    checkAdmins
}   
