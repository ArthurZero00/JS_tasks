import {read, readdByID, create, update, Delete }  from "../models/product.js"
import express from "express"
import {param, body, validationResult } from "express-validator"
const router = express.Router();

router.get("/products", (req, res) => {
    console.log("Requested Get.")
    const products = read();
    res.json(products);
    
})

router.get("/products/:id", [
    param("id").isUUID(4).withMessage("ID must be a valid UUID v4")
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log("Requested Get by ID");
    const id = req.params.id;
    //console.log(req.params.id)
    const product = readdByID(id);
    res.json(product);
})

router.post("/products",[
    body("name").notEmpty().withMessage("Name is required"),
    body("price").isFloat({ gt: 0 }).withMessage("Price must be a number greater than 0")
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log("Requested Post.")
    const newPost= create(req.body.name, req.body.price);
    res.json(newPost)
})

router.put("/products", [
    body("id").isUUID(4).withMessage("ID must be a valid UUID v4"),
    body("name").optional().notEmpty().withMessage("Name cannot be empty"),
    body("price").optional().isFloat({ gt: 0 }).withMessage("Price must be a number greater than 0")
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log("Requested Put")
    const updated = update(req);
    res.json(updated);
})

router.delete("/products/:id", [
    param("id").isUUID(4).withMessage("ID must be a valid UUID v4")
  ], (req, res) => {
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      };
    console.log("Requested Delete")
    const deleted = Delete(req.params.id);
    res.json(deleted);
})

export default router;