import React from 'react'
import DashboradCard from './components/DashboradCard'

const Dashboard = () => {
  return (
    <div className='px-6 py-6'>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold text-gray-800'>Dashboard</h1>
            <div className='flex items-center space-x-1 text-gray-500 text-xs'>
                <span className='text-red-600 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                    </svg>
                </span>
                <p>/</p>
                <p>Dashboard</p>
            </div>
        </div>

        <div className='mt-4'>
            <div className='w-full grid items-center grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] md:gap-x-6 gap-y-8'>
              
              <DashboradCard 
                increase={true}
                title="Total Sales"
                price="XAF 500000"
                percentage="30.5"
                compairedTo="August"
              />
              <DashboradCard 
                increase={false}
                title="Total Orders"
                price="450"
                percentage="30.5"
                compairedTo="August"
              />
              <DashboradCard 
                increase={true}
                title="Total Revenu"
                price="XAF 6000000"
                percentage="20.5"
                compairedTo="2021"
              />
          </div>
        </div>
    </div>
  )
}

export default Dashboard