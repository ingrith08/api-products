const express = require('express')
const router = express.Router();
const product = require('../controllers/product')
const cors = require('cors')

router.use(cors())
router.options('*', cors())

router.get('/', (req, res) => res.status(200).send("Welcome to Mercado Libre product api"));
router.get('/api/items', product.list);
router.get('/api/items/:id', product.getByID);

module.exports = router