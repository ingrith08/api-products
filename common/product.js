const axios = require('axios');

module.exports = {
    getProducts,
    productById,
    getDescription
}

async function getProducts(filters) {
    try {
        return await axios({
            method: 'GET',
            url: 'https://api.mercadolibre.com/sites/MLA/search?q='+filters,
          });
    } catch (error) {
        return error.toJSON();
    }
}

async function productById(id) {
    try {
        return await axios({
            method: 'GET',
            url: 'https://api.mercadolibre.com/items/'+id,
          });
    } catch (error) {
        return error.toJSON();
    }
}

async function getDescription(id) {
    try {
        return await axios({
            method: 'GET',
            url: 'https://api.mercadolibre.com/items/'+id+'/description',
          });
    } catch (error) {
        return error.toJSON();
    }
}