const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleLogin = asyncHandler(async(req, res, next) => {

    const { token } = req.body;

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const { sub, email, name, picture} = payload;

    console.log(payload);
    

});


module.exports = {
    googleLogin,
}