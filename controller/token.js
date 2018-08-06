const { Response, Token } = require('../model');
const { mongo } = require('../dao');
const { collections, userTypes } = require('../const');
const jwt = require('../utils/jwt');
const UIDGenerator = require('uid-generator');
const uidgen = new UIDGenerator(UIDGenerator.BASE36, 10);

async function deleteToken(id){
    try{
        let token = new Token({})
        await token.deleteItem(id)
        return new Response({
            code: 200,
            message: "Deleted Successfully",
            data: {body:"Delete"},
            err: null
        })
    }
    catch(err){
        console.log(err)
    }
}

async function getCount(id){
    try{
        let token = new Token({})
        let tokens = await token.getCount(id)
        return new Response({
            code: 200,
            message: "Count obtained",
            data: {tokens},
            err: null
        })
    }
    catch(err){
        console.log(err)
    }
}

async function checkTokens(tokenid){
    try{
        let token = new Token({})
        let tokens = await token.getByToken(tokenid)
        return new Response({
            code: 200,
            message: "Token obtained",
            data: {tokens},
            err: null
        })
    }
    catch(err){
        console.log(err)
    }
}

async function getTokens(id){
    try{
        let token = new Token({})
        let tokens = await token.getById(id)
        return new Response({
            code: 200,
            message: "Tokens obtained",
            data: {tokens},
            err: null
        })
    }
    catch(err){
        console.log(err)
    }
}

async function generateToken(userData){
    
    try{
        uid = await uidgen.generate()
        let token = new Token({
            id:userData._id,
            inviteid:uid,
            expirydate: Date.now() + 1000*60*60*24*7
        })
        token.save();
        return new Response({
            code: 200,
            message: "success full login",
            data: {user:userData,token: uid},
            err: null
        })

    }catch(err){  
            return new Response({
                code: 500,
                message: "Something went wrong",
                data: null,
                err: err.message
            })
        }
    
      
}

module.exports = {
    generateToken,
    getTokens,
    checkTokens,
    getCount,
    deleteToken
}   
