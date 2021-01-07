const { cekToken } = require('../helper/jwt')
const { User } = require('../models')

async function authentication (err, req, res, next) {
    try {
        let token = cekToken(req.header.access_token)
        const match = await User.findOne({
            where: { email: token.email}
        })
        if (!match) {
            res.status(401).json({
                msg: 'Login First'
            })
        } else {
            res.user = match
            next()
        }
    } catch (err) {
        res.status(400).json({
            msg: err.msg
        })
    }
}

async function authorize (req, res, next) {
    console.log(req.user);
    User.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        if(!data) { 
            res.status(401).json({
                msg: 'Your Account is not Allowed!'
            })
        } else {
            next()
        }
    })
    .catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
}

module.exports = {
    authentication,
    authorize
}