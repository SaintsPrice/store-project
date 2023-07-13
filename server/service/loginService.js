const ApiError = require("../error/ApiError")
const { User, Basket, Token } = require("../models/models")
const bcrypt = require('bcrypt')
const tokenService = require("./tokenService")

class LoginService {
  async registration(email, password, name, family, role) {
    const candidate = await User.findOne({where:{email}})

    if(candidate) {
      throw ApiError.badRequest(`Пользователь с почтовым адресом ${email} уже существует `)
    }
    const hash = await bcrypt.hash(password, 10)
    const user = await User.create({email, password: hash, name, family})
    const basket = await Basket.create({userId: user.id})

    const tokens = tokenService.generateTokens(user.id, email, name, user.role)

    await tokenService.saveTokens(user.id, tokens.refreshToken)

    return {
      ...tokens,
      user: {
        id: user.id,
        email,
        name,
        role: user.role
      },
      basket: {
        id: basket.id,
        userId: user.id
      }
    }
  }

  async login(email, password, role) {
    const user = await User.findOne({where: {email}})
    if(!user) {
      throw ApiError.badRequest(`Пользователь с email ${email} не найден`)
    }
    const isPassEquals = await bcrypt.compare(password, user.password)
    if(!isPassEquals) {
      throw ApiError.badRequest('Введен неправильный пароль')
    }

    const basket = await Basket.findOne({where: {userId: user.id}})
    const tokens = tokenService.generateTokens(user.id, email, user.role)

    await tokenService.saveTokens(user.id, tokens.refreshToken)

    return {
      ...tokens,
      user: {
        id: user.id,
        email,
        role: user.role
      },
      basket: {
        id: basket.id,
        userId: user.id
      }
    }
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken)

    return token
  }

  async refresh(refreshToken) {
    if(!refreshToken) {
      throw ApiError.unauthorizedError()
    }

    const userData = tokenService.validateRefreshToken(refreshToken)

    const tokenFromDb = await Token.findOne({where: {token: refreshToken}})

    if(!userData || !tokenFromDb) {
      console.log(userData)
      console.log(tokenFromDb)
      throw ApiError.unauthorizedError()
    }

    const user = await User.findOne({where: {id: userData.id}})

    const tokens = await tokenService.generateTokens(user.id, user.email, user.role)

    await tokenService.saveTokens(user.id, tokens.refreshToken)

    return {
      ...tokens,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    }
  }
}

module.exports = new LoginService()