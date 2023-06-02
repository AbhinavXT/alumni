import { useRouter } from 'next/router'
import { useState } from "react";
import axios from 'axios'

const userForm = () => {
    const router = useRouter()

    const [formData, setFormData] = useState({
        profile:'', 
        email:'', 
        mobile:'', 
        course:'', 
        branch:'' ,
        start:'', 
        end:'', 
        org:'', 
        exp:'', 
        brief:''
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

        localStorage.setItem("userData", JSON.stringify(formData))

        router.push('/')
    };

    return (
        <form className="flex flex-col gap-y-6 itmes-left items-left px-[600px] justify-center my-16">
            <div className="flex items-center justify-center font-bold text-2xl pb-12">User Profile Form</div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Full Name</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="owner" 
                    value={formData.profile}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Email</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="title" 
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Mobile</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="company" 
                    value={formData.mobile}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Course</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="location" 
                    value={formData.course}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Branch</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="deadline" 
                    value={formData.branch}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Year of Admission</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="salary" 
                    value={formData.start}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Year of Passing</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="type" 
                    value={formData.end}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Current Organization</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="link" 
                    value={formData.org}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Experience</label>
                <input 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="link" 
                    value={formData.exp}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-y-1">
                <label className="font-bold text-lg ">Brief about you</label>
                <textarea 
                    className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                    type="text"
                    name="link" 
                    value={formData.brief}
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

export default userForm