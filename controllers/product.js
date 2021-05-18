const mercadoLibre = require('../common/product');
const _ = require('lodash');

module.exports = {
    list,
    getByID
}

async function list(req, res) {
    const query = req.query.q;
    try {
        const getProducts = await mercadoLibre.getProducts(query);
        const products = _.get(getProducts.data, 'results');

        if (_.get(getProducts, "name") === "Error") {
            return res.status(400).json(getProducts.message);
        }
           
        res.status(200).send(processProducts(products.slice(0, 4)));
    } catch (error) {
        console.error(error);
        res.status(500).send({error})
    }
}

async function getByID(req, res) {
    const id = req.params.id;
    try {
        const [product, description] = await Promise.all([
            mercadoLibre.productById(id),
            mercadoLibre.getDescription(id)
        ])
        if (_.get(product, "name") === "Error") {
            return res.status(400).json(product.message);
        }
        res.status(200).send(processProduct(product.data, description.data));
    } catch (error) {
        res.status(500).send({error})
    }
}

function processProduct(product, description) {
    return {
        author: {
            name: "Ingrhy",
            lastname: "Hincapié"
        },
        item: {
            id: _.get(product, "id"),
            title: _.get(product, "title"),
            price: {
                currency: _.get(product, "currency_id"),
                amount: _.get(product, "price"),
                decimals: _.get(product, "base_price"),
            },
            picture: _.get(product, "pictures[0].url"),
            condition: _.get(product, "condition"),
            free_shipping: _.get(product, "shipping.free_shipping"),
            sold_quantity: _.get(product, "sold_quantity"),
            description: _.get(description, "plain_text")
        }
    }
}

function processProducts(products) {
    const items =  _.map(products, function (product) { 
        return {
            id: _.get(product, "id"),
            title: _.get(product, "title"),
            price: {
                currency: _.get(product, "currency_id"),
                amount: _.get(product, "price"),
                decimals: _.get(product, "base_price"),
            },
            picture: _.get(product, "thumbnail"),
            condition: _.get(product, "condition"),
            free_shipping: _.get(product, "shipping.free_shipping"),
        }
    })

    const categories = _.map(products, function(product) {
        return product.category_id;
    })

    return {
        author: {
            name: "Ingrhy",
            lastname: "Hincapié"
        },
        categories,
        items
    }
}

