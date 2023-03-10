import React from 'react'

const Profile = () => {
    return (
        <div className='profileComponentMain'>
            <div className='profileComponentFull'>
                <div className='profileComponentInnerHeader'>
                    <div className='profileComponentInfo'>Contact Information</div>
                    <button className='text-red-700'>Edit</button>
                </div>
                <div className='profileComponentContactInner'> 
                    <div>
                        <span className='font-bold'>Email:</span>
                        &nbsp; abc@xyz.gamil.com
                    </div>
                    <div>
                        <span className='font-bold'>Linkedin:</span>
                        &nbsp; linkedin.com/in/abcxyz
                    </div>
                    <div>
                        <span className='font-bold'>Twitter:</span>
                        &nbsp; twitter.com/abcxyz    
                    </div>
                </div>
            </div>

            <div className='profileComponentFull'>
                <div className='profileComponentInnerHeader'>
                    <div className='profileComponentInfo'>Summary</div>
                    <button className='text-red-700'>Edit</button>       
                </div>
                <div className='p-2'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo id quam nesciunt minus hic 
                    consequuntur dicta ipsam. Minus aliquam eius nobis vezro ipsa voluptatem aut nihil omnis, 
                    in officiis quasi pariatur corrupti? Dolorem nisi ratione quam quisquam? Ex ipsam eveniet 
                    dolor quidem consequuntur! Aliquam cum eveniet libero eos voluptates nobis maiores possimus 
                    culpa modi dicta, adipisci soluta unde suscipit iusto iure earum officiis ex eos est suscipit 
                </div>
            </div>

            <div className='profileComponentFull'>
                <div className='profileComponentInnerHeader'>
                    <div className='profileComponentInfo'>Education</div>
                    <button className='text-red-700'>Edit</button>
                </div>
                <div className='flex flex-col p-2'>
                    <div className='flex justify-between'>
                        <div className='font-bold'>GB Pant Institute of Engineering and Technology, Uttarakhand, India</div>
                        <div>Aug 2019 - June 2023</div>
                    </div>
                    <div>Bachelor of Technology, Computer Science and Engineering</div>
                </div>
            </div>

            <div className='profileComponentFull'>
                <div className='profileComponentInnerHeader'>
                    <div className='profileComponentInfo'>Work experience</div>
                    <button className='text-red-700'>Edit</button>
                </div>
                <div className='text-red-600 p-2'> Share your work history to enhance your networking potential</div>
            </div>

            <div className='profileComponentFull'>
                <div className='profileComponentInnerHeader'>
                    <div className='profileComponentInfo'>Skills</div>
                    <button className='text-red-700'>Edit</button>
                </div>
                <div className='p-2'>C++, JavaScript, Solidity, SQL, HTML, CSS, React/Next.js, Hardhat, Git</div>
            </div>

            <div className='profileComponentFull'>
                <div className='profileComponentInnerHeader'>
                    <div className='profileComponentInfo'>Basic Information</div>
                    <button className='text-red-700'>Edit</button>
                </div>
                <div className='text-red-500 p-2'>Add your basic information here</div>
            </div>
        </div>
    )
}

export default Profile