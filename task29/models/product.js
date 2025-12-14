import { v4 as uuidv4 } from 'uuid';


const products = [ {name: "Arthur", price: 29},
                    {id: "1db44d7e-a4f3-402b-b17a-58bf1d16bb82"},
                    {
                        "id": "242a3267-a86e-4c59-abfe-779971f11937",
                        "name": "Artyhur",
                        "price": 234
                    }
];


const create = (name, price) => {
    const newProduct = {id: uuidv4(), name: name, price: price};
    products.push(newProduct);
    return "Product has been added";
}

const read = () => {
    return products;
}

const readdByID = (id) => {
    const index = products.findIndex((elem) => elem.id == id);
    if(index === -1){
        return `The product with provided ID ${id} not found`;
    }
    return products[index];
}

const update = (req) => {
    const index = products.findIndex((elem) => elem.id == req.body.id);
    if(index === -1){
        return `The product with provided ID ${id} not found`;
    }
    products[index].name = req.body.name;
    products[index].price = req.body.price;
    return 'Product has been updated'

}

const Delete = (id) => {
   // console.log(id);
    const index = products.findIndex((elem) => elem.id == id);
    if(index === -1){
        return `The product with provided ID ${id} not found`;
    }
   // console.log(index);
    products.splice(index, 1);
    return `Product with ID ${id} has been deleted`;
}


export  {
    read,
    readdByID,
    update,
    Delete,
    create,
}