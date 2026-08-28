import express from "express"; 
import {getVisitedCountries, addVisitedCountry, removeVisitedCountry, searchCountries} from "../controllers/countryController.js"; 

const router = express.Router(); 

router.get("/visited", getVisitedCountries); 
router.post("/visited", addVisitedCountry);
router.delete("/visited/:countryCode", removeVisitedCountry); 
router.get("/search", searchCountries); 

export default router; 