import {v4 as uuidv4} from "uuid"
import { query } from "./db.js";



 async function getCars() {
    const select_query = "SELECT * FROM cars ";
    const result = await query(select_query);
    return result.rows;
};


async function getCarByID(id) {
    const selecByIDquery = "SELECT * FROM cars WHERE id=$1";
    const result = await query(selecByIDquery, [id]);
    return result.rows[0] || "No car found";
    
}


async function creatCar(req) {
    try {
      const id = uuidv4();
      const { name, brand, price } = req.body;
  
      const insert_query = `
        INSERT INTO cars (id, name, brand, price) 
        VALUES ($1, $2, $3, $4)
        RETURNING *; 
      `;
  
      const values = [id, name, brand, price];
      const result = await query(insert_query, values);
  
      console.log("Inserted:", result.rows[0]); 
      return "Car has been added";
    } catch (err) {
      console.error("Error inserting car:", err);
      throw err;
    }
  }

async function updateCar (req) {
   try { const updateQuery = `
    UPDATE cars
    SET name = $2,
        brand = $3,
        price = $4
    WHERE id = $1
    RETURNING *;
  `;
    const values = [req.body.id,req.body.name, req.body.brand, req.body.price];
    const result = await query(updateQuery, values);
    return `Car with id ${req.body.id} has been updated`;
   } catch(err){
    console.error("Error updating a car", err);
    throw err;
   }

}


async function deleteCar(id) {
    const deleteQuery = "DELETE FROM cars WHERE id = $1 RETURNING *";
    const result = await query(deleteQuery, [id]);
    return `Car has been deleted.`
}



export {
    getCars,
    getCarByID,
    creatCar,
    updateCar,
    deleteCar
}