import { useState } from "react";

const SubAdmin = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(0)
    
    const handleChange = (e) => {
        setEmail(e.target.value)
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

        if(email)
            localStorage.setItem("subAdminEmail", email)

        setSubmitted(1)
    };

    return (
        <div className='flex flex-col gap-y-4'>
            <div className='font-bold text-2xl pb-6'>Assign SubAdmin Role</div>
            
            <div className="flex flex-col px-32 gap-y-2">
                <div className="flex flex-col gap-y-1">
                    <label className="font-bold text-lg">Sub Admin Email</label>
                    <input 
                        className="border-2 border-gray-700 shadow-inner shadow-gray-300 rounded px-2 py-1 text-black" 
                        type="text"
                        name="owner" 
                        onChange={handleChange}
                    />
                </div>

                {submitted === 0 ? (
                    <button
                        onClick={handleSubmit} 
                        className="flex items-center justify-center mx-auto px-32 py-2 mt-4 bg-[#0D2E71] text-white rounded font-bold shadow-blue-500 shadow-md" 
                    >
                        Assign Role
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit} 
                        className="flex items-center justify-center mx-auto px-32 py-2 mt-4 bg-green-700 text-white rounded font-bold shadow-green-300 shadow-md" 
                    >
                        Role Assigned
                    </button>
                )}
            </div>
        </div>
    )
}

export default SubAdmin