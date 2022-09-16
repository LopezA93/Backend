const {faker} = require("@faker-js/faker")

function products(n) {
    const productos = []
    for (let i=0; i<n; i++) {
        const _producto = {
            nombre: faker.commerce.productName(),
            precio: faker.commerce.price(),
            imagen: faker.image.cats()
        
         
           
        }
        productos.push(_producto)
    }
    
    return productos
}

module.exports = { products }