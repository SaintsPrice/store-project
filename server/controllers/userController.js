const ApiError = require('../error/ApiError');
const { User } = require('../models/models');
const loginService = require('../service/loginService');

class UserController {
    async registration(req, res, next) {
      try {
        const {email, password, role} = req.body

        const userData = await loginService.registration(email, password, role)

        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
  
        return res.json(userData)
      }
      catch(e) {
        console.log(e)
        next(e)
      }
    }

    async login(req, res, next) {
      try{
        const {email, password, role} = req.body

        const userData = await loginService.login(email, password, role)

        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})

        return res.json(userData)
      }
      catch(e) {
        console.log(e)
        next(e)
      }
    }

    async logout(req, res, next) {
      try{
        const {refreshToken} = req.cookies

        const token = await loginService.logout(refreshToken)
        res.clearCookie('refreshToken')

        return res.json(token)
      }
      catch(e) {
        next(e)
      }
    }

    async refresh(req, res, next) {
      try{
        const {refreshToken} = req.cookies

        const userData = await loginService.refresh(refreshToken)

        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})

        return res.json(userData)
      }
      catch(e) {
        console.log(e)
        next(e)
      }
    }

    async check(req, res, next) {
        const {id} = req.query
        if(!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }
}

module.exports = new UserController()