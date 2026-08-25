import pool from "../config/database"; 

export async function getVisitedCountries(){
     const result = await pool.query("SELECT country_code FROM visited_countries"); 
    return result.rows; 
}

export async function addVisitedCountry(countryCode: string){
    const result = await pool.query("INSERT INTO visited_countries (country_code) VALUES ($1) RETURNING *", [countryCode]); 
    return result.rows[0]; 
}

export async function removeVisitedCountry(countryCode:string){
    const result = await pool.query("DELETE FROM visited_countries WHERE country_code = $1 RETURNING *", [countryCode]); 
    return result.rows; 
}

export async function searchCountries(query: string){
    const result = await pool.query("SELECT country_code, country_name FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'", [query]); 
    return result.rows;    
}