const express = require("express");
const router = express.Router();
const _DefaultRoutes = require("../config/defaultRoutes");
const _ProductAPI = require("../routes/api/productRouter");

router.use(_DefaultRoutes.PRODUCT.ROOT, _ProductAPI);

module.exports = router;