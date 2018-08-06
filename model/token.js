const jwt = require('../utils/jwt');
const { mongo } = require('../dao');
const { collections, userTypes } = require('../const');
const ObjectId = require('mongodb').ObjectID;


class Token {

    constructor(resData) {
        this.id = resData.id || "";
        this.inviteid = resData.inviteid || "";
        this.expirydate = resData.expirydate || "";
    }

    // serialize() {
    //     return {
    //         "userName": this.userName,
    //         "type": this.type
    //     }

    // }

    async deleteItem(id) {
        let idstr = String(id)
        await mongo.deleteItem(collections.tokens, { "_id": ObjectId(idstr) })
        //return token
    }

    async getCount(id) {
        let token = await mongo.count(collections.tokens, { "id": this.id || id })
        return token
    }

    async getById(id) {

        let token = await mongo.query(collections.tokens, { "id": this.id || id });
        return token

    }

    async getByToken(token) {
        let tokenval = await mongo.query(collections.tokens, { "inviteid": this.token || token });
        if (tokenval && tokenval.length > 0) {
            return tokenval[0];
        } else {
            return null;
        }
    }

    async save() {

        await mongo.insert(collections.tokens, this);

    }

}


module.exports = Token;