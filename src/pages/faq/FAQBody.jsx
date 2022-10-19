import React, { useState } from 'react'

const FAQBody = () => {
  return (
    <div className='bg-[#eff7fa] px-4 md:px-10 lg:px-24 shadow-md py-10'>
        <div className='flex md:space-x-8 lg:space-x-12 flex-col md:flex-row space-y-8 md:space-y-0'>

            <div className='flex-1 bg-white border px-6 py-8'>
                <QuestionCard 
                    question="Where can I get ...?"
                    answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsum accusamus voluptatibus dolores error praesentium saepe consequatur reprehenderit modi tenetur?"
                />
                <QuestionCard 
                    question="Where can I get ...?"
                    answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsum accusamus voluptatibus dolores error praesentium saepe consequatur reprehenderit modi tenetur?"
                />
                <QuestionCard 
                    question="Where can I get ...?"
                    answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsum accusamus voluptatibus dolores error praesentium saepe consequatur reprehenderit modi tenetur?"
                />
                <QuestionCard 
                    question="Where can I get ...?"
                    answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsum accusamus voluptatibus dolores error praesentium saepe consequatur reprehenderit modi tenetur?"
                />
                
            </div>
            <div className='flex-1 bg-white border h-max px-6 py-8'>
                <h2 className='text-xl font-bold text-gray-700 mb-4'>Ask us a question</h2>
                <form >
                    <div className='flex items-center lg:space-x-4 mb-3 flex-col lg:flex-row space-y-3 lg:space-y-0'>
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

export default FAQBody

function QuestionCard ({question, answer}){
    const [ans, setAns] = useState(false)

    return (
        <div className="mb-2 border ">
            <div className="flex items-center space-x-4 px-4 py-2 bg-gray-100 text-gray-600 cursor-pointer" onClick={()=>setAns(!ans)}>
                <span>{ans? "-" : "+"}</span>
                <h2>{question}</h2>
            </div>
            <p className={`text-gray-500 text-sm px-4 transition-all duration-700 ${ans? "h-max py-4 ": "h-0 overflow-hidden"} `}>
                {answer}
            </p>
        </div>
    )
}
