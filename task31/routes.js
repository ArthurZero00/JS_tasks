import * as operations from "./crud.js"
import express from "express"
import {param, body, validationResult } from "express-validator"


const router = express.Router();


router.get("/cars", async (req, res) => {
  try {
    res.json(await operations.getCars());  
  } catch (err) {
    console.error("Error fetching cars:", err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/cars/:id", [
    param("id").isUUID(4).withMessage("ID must be a valid UUID v4")
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log("Requested Get by ID");
    const id = req.params.id;
    //console.log(req.params.id)
    try {
      const car = await operations.getCarByID(id);
      res.json(car);
    } catch(err){
      console.error("Error Fetching car by ID", err);
      res.status(500).json({error: "Server error"});
    }
})

router.post(
  "/cars",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be a number greater than 0"),
    body("brand").notEmpty().withMessage("Brand is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      console.log("Requested Post.");
      const newCar = await operations.creatCar(req); 
      res.status(201).json(newCar); 
    } catch (err) {
      console.error("Error creating car:", err);
      res.status(500).json({ error: "Server error" });
    }
  }
);

router.put("/cars", [
    body("id").isUUID(4).withMessage("ID must be a valid UUID v4"),
    body("name").optional().notEmpty().withMessage("Name is rquired"),
    body("price").optional().isFloat({ gt: 0 }).withMessage("Price must be a number greater than 0"),
    body("brand").notEmpty().withMessage("Brand is required"),
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log("Requested Put")
    try {
      const updated = await operations.updateCar(req);
      res.json(updated);
    } catch(err){
      console.log("Error updating a car", err);
      res.status(500).json({error: "Server Error"});
    }
})

router.delete("/cars/:id", [
    param("id").isUUID(4).withMessage("ID must be a valid UUID v4")
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      };
    console.log("Requested Delete")
    try { 
      const deleted = await operations.deleteCar(req.params.id);
      res.json(deleted);
    } catch(err){
      console.error("Error deleting a car", err);
      res.status(500).json({error: "Server error"});
    }
})

export default router;