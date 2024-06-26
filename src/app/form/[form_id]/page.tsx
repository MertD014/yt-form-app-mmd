"use client"

import FormHeader from '@/app/components/FormHeader';
import React from 'react'

const getForm = async () => {
	try {

		const result = await fetch("http://localhost:3000/api/form/[formId]", { cache: "no-store" });

		if (!result.ok) {
			throw new Error('Failed to fetch form');
		}

		return result.json();

	} catch (error) { console.log("Error loading form", error); }
}

export default async function Form() {

	// No API yet
	/* const { form } = await getForm(); */

	return (
		<div className='mx-4'>
			<FormHeader />
			<div>
				{/* {form} */}
			</div>
			<button
				type="submit"
				className="py-3 px-6 w-fit"
			>
				Submit
			</button>
		</div>
	);
}