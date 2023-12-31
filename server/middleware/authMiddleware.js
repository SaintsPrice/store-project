const ApiError = require("../error/ApiError")
const tokenService = require("../service/tokenService")

module.exports = function(req, res, next) {
  try{
    const token = req.headers.authorization.split(' ')[1]

    if(!token) {
      return next(ApiError.unauthorizedError())
    }

    const userData = tokenService.validateAccessToken(token)

    if(!userData) {
      return next(ApiError.unauthorizedError())
    }

    req.user = userData

    next()
  }
  catch(e) {
    return next(ApiError.unauthorizedError())
  }
}