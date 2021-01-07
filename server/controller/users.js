const { User } = require('../models/')
const { comparePassword } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')

class UserController {
    static async register (req, res, next) {
        const { userName, email, password } = req.body
        try {
            const data = await User.create({
                userName,
                email,
                password
            })
            res.status(201).json({
                userName,
                email,
            })
        } catch (err) {
            next(err)
        }
    }
    static async login (req, res,next) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({
                where: { email }
            })
            if (!user) {
                next({name:'NotFound', message:'Email atau Password salah'})
            } else {
                const match = comparePassword(password, user.password)
                if (match) {
                    //jwt
                    const userDATA = {
                        id: user.id,
                        userName: user.userName,
                        email: user.email
                    }
                    const access_token = generateToken(userDATA)
                    res.status(200).json({
                        access_token: access_token
                    })
                } else {
                    next({name:'NotFound', message:'Email atau Password salah'})
                }
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController