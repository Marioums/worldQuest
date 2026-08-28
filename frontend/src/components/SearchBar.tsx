import React, {useState} from "react";

function SearchBar(){
    const [query, setQuery] = useState(""); 

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setQuery(e.target.value); 
        console.log(e.target.value); 
    }

    return <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl">
        <input 
            type="text" 
            placeholder="Search for a country..." 
            className="bg-transparent outline-none w-full text-white"
            onChange={handleChange}
            value={query}
        />

    </div>
}

export default SearchBar; 