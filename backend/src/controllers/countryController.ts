import {Request, Response} from "express"; 
import * as countryModel from "../models/countryModel.js"

export async function getVisitedCountries(req: Request, res: Response){
    try{
        const countries = await countryModel.getVisitedCountries(); 
        res.json({countries}); 
    }catch(err){
        console.error(err); 
        res.status(500).json({error: "Failed to get visited countries"}); 
    }
}

export async function addVisitedCountry(req: Request, res: Response ){
    try{
        const {countryCode} = req.body; 

        if(!countryCode){
            return res.status(400).json({error: "Conutry code is required"}); 
        }

        const country = await countryModel.addVisitedCountry(countryCode); 
        return res.json({country})
    }catch(err){
        console.error(err); 
        res.status(500).json({error: "Fail to add country"}); 
    }
}

export async function removeVisitedCountry(req: Request, res: Response){
    try{
        const { countryCode } = req.params; 
        if(!countryCode){
            return res.status(400).json({error: "Country code is required"}); 
        }
        
        const country = (await countryModel.removeVisitedCountry(countryCode as string));
        if(!country){
            return res.status(404).json({error: "Country not found in your visited list"}); 
        }

        return res.json({country})
    }catch(err){
        console.error(err); 
        res.status(500).json({error: "Fail to delete country"}); 
    }
}

export async function searchCountries(req: Request, res: Response ){
    try{
        const {query} = req.query; 

        if(!query || typeof query !== "string"){
            return res.status(400).json({error: "Search query is required"}); 
        }

        const countries = await countryModel.searchCountries(query); 
        return res.json({countries}); 
    }catch(err){
        console.error(err); 
        res.status(500).json({error: "No country suggestions"}); 
    }
}