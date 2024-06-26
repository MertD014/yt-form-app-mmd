'use client'
import Nav from "./components/Navbar"
import Footer from "./components/Footer"
import FormHeader from "./components/FormHeader";
import SuccessNotification from "./components/SuccessNotification";
import UnsuccessNotification from "./components/UnsuccessfulNotification";
        
import React, { useState } from 'react'
import EmailInput from './components/formInputs/EmailInput'
import FullName from './components/formInputs/FullName'
import PhoneNumberInput from './components/formInputs/PhoneNumberInput'
import ShortAnswerInput from './components/formInputs/ShortAnswerInput'


const getForms = async () => {
	try {
		const result = await fetch("http://localhost:3000/api/form", { cache: "no-store", });
		if (!result.ok) {
			throw new Error('Failed to fetch forms');
		}

		return result.json();
	} 
  catch (error) { console.log("Error loading forms", error); }
}

export default function Home() {
      
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log('Form Submitted!')
  }
  
	// No API yet
	/* const { forms } = await getForms(); */
  
  return (
    <main className="flex justify-center items-center h-screen">
      <Nav />
      <FormHeader />
      {/* {forms.map(form => (<div className="mx-4">
				{form}
			</div>
			))} */}
      
      <div className='w-1/3 p-4 bg-white rounded-3xl justify-center items-center'>
        <div className='text-5xl text-center text-orange-400 font-extrabold mb-2'>Testing</div>
        <FullName />
        <EmailInput />
        <PhoneNumberInput />
        <ShortAnswerInput question={'Is it ok?'} />
      </div>
      {/* < SuccessNotification /> */}
      <UnsuccessNotification/>
      <Footer/>
    </main>
  );
}
