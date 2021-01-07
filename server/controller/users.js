const { User } = require('../models/')
const { comparePassword } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')

class UserController {
    static async register (req, res) {
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
            res.status(401).json(err)
        }
    }
    static async login (req, res) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({
                where: { email }
            })
            if (!user) {
                res.status(401).json({
                    msg: 'Email or password not defined'
                })
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
                    res.status(401).json({
                        msg: 'Email or password not defined'
                    })
                }
            }
        } catch (err) {
            res.status(401).json(err)
        }
    }
}

module.exports = UserController