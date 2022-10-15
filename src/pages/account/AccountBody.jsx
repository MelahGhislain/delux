import React from 'react'
import profile from '../../assets/images/profile.png'

const AccountBody = () => {
  return (
    <div className='bg-[#eff7fa] px-4 md:px-20 lg:px-32 py-10'>
        <div className='bg-white border shadow flex flex-col md:flex-row'>
            <section className='border-r md:w-[35%] flex flex-col items-center px-2 py-5'>
                <div className='flex items-center justify-center flex-col'>
                    <div className='h-[10rem] w-[10rem] rounded-full'>
                        <img src={profile} alt="profile" className='h-full w-full rounded-full' />
                    </div>
                    <h4 className='text-xl text-teal-600 py-2 font-bold'>Hi Ghislain</h4>
                </div>
                <ul className='w-full mt-12 mb-4'>
                    <li className='flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-orange-600 py-3 px-4 text-white border border-gray-50'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-1x2-fill" viewBox="0 0 16 16">
                                <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z"/>
                            </svg>
                        </span>
                        <p>Dashboard</p>
                    </li>
                    <li className='flex items-center space-x-2 py-3 px-4 text-gray-400 text-sm border border-gray-50'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </svg>
                        </span>
                        <p>Orders</p>
                    </li>
                    <li className='flex items-center space-x-2 py-3 px-4 text-gray-400 text-sm border border-gray-50'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                        </span>
                        <p>Adress</p>
                    </li>
                    <li className='flex items-center space-x-2 py-3 px-4 text-gray-400 text-sm border border-gray-50'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                        </span>
                        <p>Account details</p>
                    </li>
                    <li className='flex items-center space-x-2 py-3 px-4 text-gray-400 text-sm border border-gray-50'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                            </svg>
                        </span>
                        <p>Logout</p>
                    </li>
                </ul>
            </section>

            <section className='px-4 py-4'>
                <p className='text-gray-400 font-light'>From your account dashboard you can view your recent orders, manage your shipping and billing adresses, and edit your password and accoutn details.</p>
            </section>
        </div>
    </div>
  )
}

export default AccountBody