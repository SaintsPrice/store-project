const ApiError = require("../error/ApiError")
const { Rating } = require("../models/models")

class Rate {
  async create(req, res, next) {
    try {
      const {rate, userId, deviceId} = req.body
      const isRate = await Rating.findOne({where: {userId, deviceId}})
      if(isRate) {
        return next(ApiError.badRequest('Вы уже ставили рейтинг этому устройству'))
      }
      const rating = await Rating.create({rate, userId, deviceId})

      return res.json(rating)
    }
    catch(e) {
      console.log(e)
      next(e)
    }
  }

  async getDeviceRating(req, res, next) {
    try {
      const {deviceId} = req.query

      const rating = await Rating.findAll({where: {deviceId}})

      return res.json(rating)
    }
    catch(e) {
      next(e)
    }
  }
}

module.exports = new Rate()