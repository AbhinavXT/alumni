import Head from 'next/head'
import React from 'react'

const aboutus = () => {
	return (
		<div className='aboutusMain'>
			<Head>
                <title>About Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
			<div className='aboutusMainDiv'>About GBPEC</div>
			<div className='aboutusMainDivText'>
				<div className='text-xl'>Govind Bhallabh Pant Institute of Engineering & Technology</div>
				<div className='text-xl'>(An Autonomus Institute of Govt. of Uttarakhand)</div>
				<div className='text-xl'>(Formaly Known as " G. B. Pant Engineering College")</div> 
			</div>
		</div>
	)
}

export default aboutus