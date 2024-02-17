import Image from "next/image"

import errorCat from '@/public/images/404/error-cat.png'

function NotFoundPage() {
	return <main className="w-full h-full min-h-screen flex flex-col items-center justify-center">
		
		<Image src={errorCat} alt='Cute photo of a cat.' className="aspect-square object-cover w-56" />
		<h1 className='font-ppneuemontreal text-xlnm pt-3'>Error 404 - Page not found</h1>
		<h1 className='font-ppneuemontreal text-mdnm '>Sorry, it's probably just under construction...</h1>
	</main>
}

export default NotFoundPage