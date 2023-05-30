import { useRouter } from 'next/router'
import { useState } from "react";
import axios from 'axios'

const careerForm = () => {
    const router = useRouter()

    const [formData, setFormData] = useState({
        owner: '',
        title: '',
        company: '',
        location: '',
        deadline: '',
        salary: '',
        type: '',
        link: '',
        status: 0
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

        localStorage.setItem("post", JSON.stringify(formData))

        router.push('/careers')
    };

    return (
        <form className="flex flex-col gap-y-6 itmes-left items-left px-[600px] justify-center my-16">
            <div className="flex items-center justify-center font-bold text-2xl pb-12">Career Post Form</div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Full Name</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="owner" 
                    value={formData.owner}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Job Position</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="title" 
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Company Name</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Location</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="location" 
                    value={formData.location}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Deadline</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="deadline" 
                    value={formData.deadline}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Salary</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="salary" 
                    value={formData.salary}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Type</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="type" 
                    value={formData.type}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Link</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="link" 
                    value={formData.link}
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

export default careerForm