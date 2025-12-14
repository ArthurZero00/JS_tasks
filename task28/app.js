const app = require("http");
const operations = require("./crud.js");

const server = app.createServer((req, res) => {

    if(req.method === "GET"){
        const items = operations.readItems();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(items));
    }else if(req.method === "POST"){
        operations.createItem(req,res);
    }else if(req.method === "PUT"){
        operations.updateItem(req, res);
    }else if(req.method === "DELETE"){
        operations.removeItem(req);
        res.end(JSON.stringify(items));
    }
})
const PORT = 3000;
server.listen(PORT, () => {
    {
        console.log(`Server is listening on ${PORT} port...`);
    }  
});