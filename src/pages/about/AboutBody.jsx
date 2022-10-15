import React from 'react'
import image from '../../assets/images/chair/chair3.webp'
import profile from '../../assets/images/profile.png'
import TeamCard from './TeamCard'

const AboutBody = () => {
  return (
    <div className=''>
        <div>
          <section className='flex md:px-16 lg:px-20 py-10 px-4 flex-col md:flex-row'>
            <div className='md:w-[90rem]'>
              <img src={image} alt="about" className='w-full h-full' />
            </div>
            <div className='py-6 md:px-12'>
              <div>
                <h3 className='text-orange-600 text-2xl font-light'>Save more with us. We give you the best price for all your orders.</h3>
                <div>
                  <h4 className='text-2xl font-bold text-gray-700 py-4 mt-4'>Our Vission</h4>
                  <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloremque autem recusandae tenetur, obcaecati perspiciatis veniam dolorum. Pariatur obcaecati tempora iure, repellat laudantium quam, animi ducimus dicta necessitatibus, iusto velit.</p>
                </div>
                <div>
                  <h4 className='text-2xl font-bold text-gray-700 py-4 mt-4'>Our Mission</h4>
                  <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloremque autem recusandae tenetur, obcaecati perspiciatis veniam dolorum. Pariatur obcaecati tempora iure, repellat laudantium quam, animi ducimus dicta necessitatibus, iusto velit.</p>
                </div>
              </div>
            </div>
          </section>

          {/* services */}
          <section className='bg-[#eff7fa] md:px-20 py-8 md:py-16 px-4 flex flex-col items-center'>
            <h3 className='text-3xl font-bold text-gray-700'>What We Provide?</h3>
            <p className='text-gray-500 text-sm py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            
            <div className='mt-4 w-full grid items-center grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] md:gap-x-6 gap-y-6'>
              <ServiceCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                  </svg>
                }   
                title="Best Prices & Offers"
                text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
              />
              <ServiceCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                  </svg>
                }
                title="Wide Assortment"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve."
              />
              <ServiceCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                  </svg>
                }
                title="Easy Returns"
                text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using."
              />
              <ServiceCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                  </svg>
                }
                title="Free & Next Day Delivery"
                text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC."
              />
              <ServiceCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                </svg>
                }
                title="100% Satisfaction Guarantee"
                text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
              />
              <ServiceCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-tag-fill" viewBox="0 0 16 16">
                    <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  </svg>
                }
                title="Great Daily Deals Discount"
                text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using."
              />
            </div>
          </section>

          {/* our team */}
          <section className='md:px-18 py-8 md:py-16 px-4 flex flex-col items-center'>
            <h3 className='text-3xl font-bold text-gray-700'>Our Team</h3>
            <p className='text-gray-500 text-sm py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className='flex items-center w-full md:space-x-4 lg:space-x-8 mt-6 flex-col md:flex-row space-y-28 md:space-y-16'>
                <TeamCard 
                  image={profile}
                  name="Melah Ghislain"
                  role="Full Stack Developer"
                  text="The emphasis on innovation and technology in our companies has resulted in a few"
                />
                <TeamCard 
                  image={profile}
                  name="Melah Ghislain"
                  role="Full Stack Developer"
                  text="The emphasis on innovation and technology in our companies has resulted in a few"
                />
                <TeamCard 
                  image={profile}
                  name="Melah Ghislain"
                  role="Full Stack Developer"
                  text="The emphasis on innovation and technology in our companies has resulted in a few"
                />
            </div>
          </section>
        </div>
    </div>
  )
}

export default AboutBody

function ServiceCard({icon, title, text}){
  return (
    <div className='py-3'>
      <span className='text-green-400'>
        {icon}
      </span>
      <h3 className='text-teal-500 text-xl font-bold my-4'>{title}</h3>
      <p className='text-sm text-gray-500'>{text}</p>
    </div>
  )
}

