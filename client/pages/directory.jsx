import Head from "next/head"
import { useState, useEffect } from "react"
import axios from 'axios'

import Alumnus from "../components/Alumnus"

import data from "../data/users.json"

const directory = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value)
        console.log(event.target.value)
    }

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/directory');
            console.log(response.data);
            // Optionally, you can display a success message or perform additional actions here
        } catch (error) {
            console.error('Failed to submit form', error);
            // Optionally, you can display an error message or handle the error
        }
    }

    useEffect(() => {
        fetchData()

        const results = data.filter((user) =>
            user["First Name"].toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <div className="directoryMain">
            <Head>
                <title>Alumni Directory</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <div className="directoryOuterDiv"> */}
            <div className='directoryFormOuterDiv'>
                <div action="submit">
                    <input 
                        className="directoryFormInput" 
                        id="filter" 
                        type="text" 
                        placeholder="Enter keyword..." 
                        value={searchTerm}
                        onChange={handleChange} 
                    />
                </div>
                <button
                    className="bg-[#1D3557] p-4"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
            </div>

            <div className="flex flex-col gap-y-8">
                <div className="directoryAlumnsGrid">{data.length} Members in community</div>
                <Alumnus search={searchResults}/>
            </div>
        </div>
    )
}

export default directory