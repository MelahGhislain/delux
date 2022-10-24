import React from 'react'

const ContactBody = () => {
  return (
    <div className=' '>
        <div className='bg-[#eff7fa] flex px-4 md:px-10 lg:px-24 py-10 flex-col md:flex-row'>
            {/* get in touch */}
            <div className='md:w-[30rem]'>
                <h3 className='text-2xl font-bold text-gray-900'>Get in touch</h3>

                {/* adress */}
                <div className='mt-8'>
                    <div className='flex text-gray-600 font-normal space-x-3'>
                        <span>
                            h
                        </span>
                        <h5>Address :</h5> 
                    </div>
                    <p className='text-sm text-gray-500 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>

                {/* mobile */}
                <div className='mt-4'>
                    <div className='flex text-gray-600 font-normal space-x-3'>
                        <span>
                            h
                        </span>
                        <h5>Mobile :</h5> 
                    </div>
                    <p className='text-sm text-gray-500 mt-2'>+237 675 909 367</p>
                </div>

                {/* whatsapp */}
                <div className='mt-4'>
                    <div className='flex text-gray-600 font-normal space-x-3'>
                        <span>
                            h
                        </span>
                        <h5>WhatsApp :</h5> 
                    </div>
                    <p className='text-sm text-gray-500 mt-2'>+237 675 909 367</p>
                </div>

                {/* email */}
                <div className='mt-4'>
                    <div className='flex text-gray-600 font-normal space-x-3'>
                        <span>
                            h
                        </span>
                        <h5>Email :</h5> 
                    </div>
                    <p className='text-sm text-gray-500 mt-2'>info@delux.cm</p>
                </div>

                {/* email */}
                <div className='mt-4'>
                    <div className='flex text-gray-500 font-normal space-x-3'>
                        <span>
                            Follow :
                        </span>
                        <div className='flex items-center space-x-2'>
                            <div className='border bg-white h-[1.5rem] w-[1.5rem] rounded-full'>

                            </div>
                            <div className='border bg-white h-[1.5rem] w-[1.5rem] rounded-full'>

                            </div>
                            <div className='border bg-white h-[1.5rem] w-[1.5rem] rounded-full'>

                            </div>
                        </div> 
                    </div>
                </div>
                
                

            </div>
            {/* map */}
            <div className='w-full'>
                map
            </div>
        </div>

        {/* Contact Us */}
        <div className='bg-white flex px-4 md:px-10 lg:px-24 py-10'>
            <div className='flex-1 bg-white  h-max '>
                <h2 className='text-2xl font-bold text-gray-700 mb-4'>Contact Us</h2>
                <form >
                    <div className='flex items-center md:space-x-4 mb-3 flex-col md:flex-row space-y-3 md:space-y-0'>
                        <input type="text" name='name' className='px-2 py-2 border border-gray-200 w-full placeholder:text-sm placeholder:text-gray-400' placeholder='Your Name*'/>
                        <input type="email" name='email' className='px-2 py-2 border border-gray-200 w-full placeholder:text-sm placeholder:text-gray-400' placeholder='Your Email*'/>
                    </div>
                    <div className='mb-3'>
                        <input type="text" name='subject' className='px-2 py-2 border border-gray-200 w-full placeholder:text-sm placeholder:text-gray-400' placeholder='subject' />
                    </div>
                    <div className='mb-3'>
                        <textarea name="message" rows="3" className='px-2 py-2 border border-gray-200 w-full placeholder:text-sm placeholder:text-gray-400' placeholder='Your message'></textarea>
                    </div>
                    <button className='text-xs text-white bg-gradient-to-r from-orange-400 to-orange-700 px-4 py-3 w-full md:w-max'>Send Message</button>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default ContactBody