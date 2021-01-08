const { cekToken } = require('../helper/jwt')
const { User } = require('../models')

async function authentication (err, req, res, next) {
    try {
        let token = cekToken(req.header.access_token)
        const match = await User.findOne({
            where: { email: token.email}
        })
        if (!match) {
            next({name:'Unauthorized', message:'kamu harus login dahulu'})
        } else {
            res.user = token
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    authentication,
}