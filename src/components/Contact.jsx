import React from 'react';
import gradient2 from '../assets/images/gradient2.jpg';

const Contact = () => {
  return (
    <div>
      <img
        className='w-full h-screen object-cover object-center'
        src={gradient2} //!!!
        alt='A colorful gradient background photo.'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div
          id='contact'
          className='max-w-[1040px] m-auto md:pl-20 sm:p-4 p-6 py-4 sm:py-10'
        >
          <h1 className=' sm:mb-12 mb-6 text-2xl sm:text-6xl font-bold text-center text-gray-800'>
            Contact
          </h1>
          <form
            action=''
            method='POST'
            encType='multipart/form-data'
          >
            <div className='grid md:grid-cols-2 sm:gap-4 w-full sm:py-2'>
              <div className='flex flex-col'>
                <label className='text-center font-medium uppercase text-sm sm:py-2 text-grey-800 mt-1'>
                  Name
                </label>
                <input
                  className='bg-transparent border-2 rounded-lg p-2 sm:p-3 flex border-gray-800 focus:outline-none'
                  type='text'
                  name='name'
                />
              </div>
              <div className='flex flex-col'>
                <label className='text-center font-medium uppercase text-sm sm:py-2 text-grey-800 mt-1'>
                  Phone
                </label>
                <input
                  className='bg-transparent border-2 rounded-lg p-2 sm:p-3 flex border-gray-800 focus:outline-none'
                  type='text'
                  name='phone'
                />
              </div>
            </div>
            <div className='grid sm:gap-4 w-full'>
              <div className='flex flex-col'>
                <div className='flex flex-col sm:py-2'>
                  <label className='text-center font-medium uppercase text-sm sm:py-2 text-grey-800 mt-1'>
                    Email
                  </label>
                  <input
                    className='bg-transparent border-2 rounded-lg p-2 sm:p-3 flex border-gray-800 focus:outline-none'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center font-medium uppercase text-sm sm:py-2 text-grey-800 mt-1'>
                    Subject
                  </label>
                  <input
                    className='bg-transparent border-2 rounded-lg p-2 sm:p-3 flex border-gray-800 focus:outline-none'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-center font-medium uppercase text-sm sm:py-2 text-grey-800 mt-1'>
                    Message
                  </label>
                  <textarea
                    className='bg-transparent border-2 rounded-lg p-3 border-gray-800 focus:outline-none sm:block hidden sm:visible invisible'
                    rows='10'
                    name='message'
                  ></textarea>
                  <textarea
                    className='bg-transparent border-2 rounded-lg p-2 sm:p-3 border-gray-800 focus:outline-none sm:hidden block sm:invisible visible'
                    rows='5'
                    name='message'
                  ></textarea>
                </div>
                <div className='flex flex-col'>
                  <button className='bg-blue-700 text-gray-100 text-xl hover:italic sm:mt-4 mt-5 w-full p-2 sm:p-4 rounded-lg'>
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
