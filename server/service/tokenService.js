const jwt = require("jsonwebtoken")
const { Token } = require("../models/models")
const {SECRET_ACCESS_KEY, SECRET_REFRESH_KEY} = process.env

class TokenService {
  generateTokens(id, email, role) {
    const payload = {
      id,
      email,
      role
    }

    const accessToken = jwt.sign(payload, SECRET_ACCESS_KEY, {expiresIn: '15m'})
    const refreshToken = jwt.sign(payload, SECRET_REFRESH_KEY, {expiresIn: '30d'})

    return {
      accessToken,
      refreshToken
    }
  }

  validateAccessToken(accessToken) {
    const tokenData = jwt.verify(accessToken, SECRET_ACCESS_KEY)

    return tokenData
  }

  validateRefreshToken(refreshToken) {
    const tokenData = jwt.verify(refreshToken, SECRET_REFRESH_KEY)

    return tokenData
  }

  async saveTokens(userId, refreshToken) {
    const tokenData = await Token.findOne({where: {userId}})

    if(tokenData) {
      tokenData.token = refreshToken

      return tokenData.save()
    }

    const token = await Token.create({token: refreshToken, userId})

    return token
  }

  async removeToken(refreshToken) {
    const tokenData = await Token.destroy({where: {token: refreshToken}})

    return tokenData
  }

}

module.exports = new TokenService()