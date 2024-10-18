import React from 'react'
import ReviewSlider  from '../components/common/ReviewSlider'
import Footer from '../components/common/Footer'
import ContactDetails from '../components/core/Contact/ContactDetails'
import ContactForm from '../components/core/Contact/ContactForm'
const ContactPage = () => {
  return (
    <div>
      <div className='mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row'>
        <div className='lg:w-[40%]'>
            <ContactDetails />
        </div>

        <div className='lg:w-[60%]'>
            <ContactForm />
        </div>
      </div>

      <div className='my-20 px-5 text-white'>
        <h1 className='text-center text-4xl font-semibold mt-8'>
            Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>

      <Footer />
    </div>
  )
}

export default ContactPage
