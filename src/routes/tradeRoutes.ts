import { getPriceChanges } from "../controllers/tradeController";
import express from "express";
const tradeRoutes = express.Router();

tradeRoutes.get("/history", getPriceChanges);

export default tradeRoutes;
