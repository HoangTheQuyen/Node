const express = require('express')
const _Product = require('../../controllers/productApi')
const _DefaultRoutes = require('../../config/defaultRoutes')

const router = express.Router()

router.post(_DefaultRoutes.PRODUCT.GET_ALL, _Product.getAll)
router.post(_DefaultRoutes.PRODUCT.CREATE, _Product.createOne)
router.post(_DefaultRoutes.PRODUCT.GET_ONE, _Product.getOne)
router.post(_DefaultRoutes.PRODUCT.UPDATE, _Product.updateOne)
router.post(_DefaultRoutes.PRODUCT.REMOVE, _Product.deleteOne)

module.exports = router