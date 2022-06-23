

const fs = require("fs");


class Contenedor {

    constructor(url) {
        this.url = url
    }

    /*Metodos*/
    async getAll() {

        try {
            const contenido = await fs.promises.readFile(this.url, "utf-8")
            const datos = JSON.parse(contenido)
            return datos


        } catch (error) {
            return console.log(error)
        }

    }



    async save(obj) {
        const data = await this.getAll();
        
        
        let id 
        const objeto = {...obj, id} 
        data.push(objeto)
        
        try {
            if (data.length == 0) {
                id = data.length.id -1
                obj.id = id;
            } else {
                obj.id = id +1
            }
            await fs.promises.writeFile(this.url, JSON.stringify(data));
            
            
            console.log(`Producto Guardado, ID N° ${id}`)
            
            
        } catch (error) {
            console.log(error)
        }

    }


    async getById(num) {
        try {
            const data = await this.getAll();
            const filtrado = data.find((item) => {
                if (num == item.id) {
                    return item
                } else {
                    return null
                }
            })
            return console.log("getByID:",filtrado)


        } catch (error) {
            return console.log(error)

        }
    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.url, "[]")
        } catch (error) {
            console.log(error)
        }
    }

    async deletByID(num) {
        try {
            const data = await this.getAll();
            const filtrado = data.filter((item) => {
                if (num != item.id) {
                    return item
                    
                } else {
                    return null
                }
            })
            const nuevoArray= fs.promises.writeFile("./productos2.txt", JSON.stringify(filtrado));
            console.log("deletByID: Producto Eliminado correctamente")
            return nuevoArray
        } catch (error) {
            return console.log(error)
        }
    }

}

let productos= new Contenedor("./productos2.txt");
productos.getById(3)
productos.save({nombre: "agua", id:""})
// let producto1 = new Contenedor({ nombre: "Gin", precio: 3500, url: "/gin.jpg", id: 1 });
// let producto2 = new Contenedor({ nombre: "Coca", precio: 3500, url: "/gin.jpg", id: 1 });
// producto2.save()
// producto1.getById(3)
// producto1.deletByID(2)

