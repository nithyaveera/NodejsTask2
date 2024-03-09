import express from "express";
import { bookcount, bookeddata, bookingroom, createrooms, customerdata, getrooms } from "../Controller/Hallbooking.js";

let router = express.Router()
 
router.get('/', getrooms)
router.post('/createroom', createrooms)
router.post('/bookroom', bookingroom)
router.get('/bookdata', bookeddata)
router.get('/customerdata', customerdata)
router.get('/bookcount/:customerName',bookcount)

export default router