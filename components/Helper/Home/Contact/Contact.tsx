import { section } from 'framer-motion/client'
import React, { useRef } from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_n5cdxno'
const TEMPLATE_ID = 'template_rwzw9a4'
const PUBLIC_KEY = 'Dy39kcJ-QemgjzSdf'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        alert('Message sent successfully!')
        formRef.current?.reset()
      })
      .catch((err) => {
        console.error('EmailJS Error:', err)
        alert('Failed to send message. Please try again later.')
      })
  }

  return (
    <section id='contact'>
      <div className='pt-16 pb-16'>
        <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>

          {/* Left: Info Section */}
          <div>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200'>
              Schedule a call with me to see if I can help you
            </h1>
            <p className='text-gray-400 mt-6 text-base sm:text-lg'>
              Reach out to me today and let's discuss how I can help you achieve
              your goals.
            </p>
            <div className='mt-7'>
              <div className='flex items-center space-x-3 mb-4'>
                <BiPhone className='w-9 h-9 text-cyan-300'/>
                <p className='text-xl font-bold text-gray-400'>+094760941191</p>
              </div>

              <div className='flex items-center space-x-3 mb-4'>
                <BiEnvelope className='w-9 h-9 text-cyan-300'/>
                <p className='text-xl font-bold text-gray-400'>tharindun979@gmail.com</p>
              </div>

              <div className='flex items-center space-x-3 mb-4'>
                <BiMap className='w-9 h-9 text-cyan-300'/>
                <p className='text-xl font-bold text-gray-400'>Colombo, Sri Lanka</p>
              </div>
            </div>

            <div className='flex items-center mt-8 space-x-3'>
              <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
                <FaFacebook className='text-white w-6 h-6'/>
              </div>

              <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-red-600 transition-all duration-300'>
                <FaYoutube className='text-white w-6 h-6'/>
              </div>

              <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-sky-400 transition-all duration-300'>
                <FaTwitter className='text-white w-6 h-6'/>
              </div>

              <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-pink-500 transition-all duration-300'>
                <FaInstagram className='text-white w-6 h-6'/>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="0"
            className="md:p-10 p-5 bg-[#131332] rounded-lg flex flex-col"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white rounded-md outline-none w-full placeholder:text-white/70 focus:ring-2 focus:ring-cyan-300"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white rounded-md outline-none w-full placeholder:text-white/70 focus:ring-2 focus:ring-cyan-300"
              required
            />

            <input
              type="text"
              name="user_phone"
              placeholder="Mobile Number"
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white rounded-md outline-none w-full placeholder:text-white/70 focus:ring-2 focus:ring-cyan-300"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white rounded-md outline-none w-full placeholder:text-white/70 focus:ring-2 focus:ring-cyan-300 h-[10rem] resize-none"
              required
            />

            <button
              type="submit"
              className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full'
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact
