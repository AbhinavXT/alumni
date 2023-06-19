import { useState } from "react";

const Database = () => {
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
        <div className='flex flex-col gap-y-16 px-40'>
        	{/* <div className="flex flex-col gap-y-6">
				<div className="font-bold text-xl">Import Data</div>
				
				<div className="flex justify-between px-12">
					<button className="flex gap-x-2 items-center shadow-md shadow-gray-400 px-4 py-2 rounded font-bold">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
						  	<path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"/>
						</svg>
						
						<div>
							Feed Database
						</div>
					</button>
					<button className="flex gap-x-2 items-center shadow-md shadow-gray-400 px-4 py-2 rounded font-bold">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
						  	<path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"/>
						</svg>
						
						<div>
							Career Database
						</div>
					</button>
					<button className="flex gap-x-2 items-center shadow-md shadow-gray-400 px-4 py-2 rounded font-bold">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
						  	<path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"/>
						</svg>
						
						<div>
							User Database
						</div>
					</button>
				</div>
			</div> */}
			
			<div className="flex flex-col gap-y-8">
				<div className="font-bold text-2xl">Export Data</div>
				
				<div className="flex justify-between px-12">
					<a 
						href="/data/feed.json"
						download
						className="flex gap-x-2 items-center cursor-pointer bg-[#0D2E71] text-white shadow-md shadow-blue-900 px-4 py-2 rounded font-bold"
						
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
						  	<path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
						</svg>
						
						<div>
							Feed Database
						</div>
					</a>
					<a 
						href="/data/careers.json"
						download
						className="flex gap-x-2 items-center cursor-pointer bg-[#0D2E71] text-white shadow-md shadow-blue-900 px-4 py-2 rounded font-bold"
						
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
						  	<path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
						</svg>

						<div>
							Career Database
						</div>
					</a>
					<a 
						href="/data/allData.xlsx"
						download
						className="flex gap-x-2 items-center cursor-pointer bg-[#0D2E71] text-white shadow-md shadow-blue-900 px-4 py-2 rounded font-bold"
						
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
						  	<path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
						</svg>
						
						<div>
							User Database
						</div>
					</a>
				</div>
			</div>
        </div>
    )
}

export default Database