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
            res.user = token
            next()
        }
    } catch (err) {
        res.status(400).json({
            msg: err.msg
        })
    }
}

module.exports = {
    authentication,
}