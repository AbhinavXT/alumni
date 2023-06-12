import { useRouter } from 'next/router'
import { useState } from "react";
import axios from 'axios'
import moment from 'moment';

const experienceForm = () => {
    const router = useRouter()

    const [formData, setFormData] = useState({
        comp: '',
        title: '',
        text:'',
    });
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // try {
        //     console.log(formData)
        //     const response = await axios.post('http://localhost:5000/api/career', formData);
        //     console.log(response.data.message);
        //     // Optionally, you can display a success message or perform additional actions here
        // } catch (error) {
        //     console.error('Failed to submit form', error);
        //     // Optionally, you can display an error message or handle the error
        // }

        localStorage.setItem("expData", JSON.stringify(formData))
    };

    return (
        <form className="flex flex-col gap-y-6 itmes-left items-left px-[600px] justify-center my-16">
            <div className="flex items-center justify-center font-bold text-2xl pb-12">Add Experence Form</div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Name of Company</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="comp" 
                    value={formData.comp}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Title</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="title" 
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Details</label>
                <textarea 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="text" 
                    value={formData.text}
                    onChange={handleChange}
                />
            </div>

            <button
                onClick={handleSubmit} 
                className="flex items-center justify-center px-4 py-2 mt-4 bg-[#0D2E71] text-white rounded font-bold" 
            >
                Submit
            </button>
        </form>
    )
}

export default experienceForm