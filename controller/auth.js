const { Response, User } = require('../model');


async function signup() {

    try {

        return new Response({
            code: 200,
            message: "success full sinup",
            data: null,
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



async function login() {

    try {

        return new Response({
            code: 200,
            message: "success full login",
            data: null,
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




module.exports = {
    signup,
    login
}   
