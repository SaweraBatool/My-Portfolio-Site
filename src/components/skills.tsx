import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center font-semibold'>
            {/* Left Side: Description */}
            <div data-aos="zoom-in-up">
                <h2 className='text-5xl font-bold text-center mb-8'>"My Tech Stack"</h2>
                <p className='pt-2 text-[#283432]'>
                    Possesses strong skills in HTML, CSS, TypeScript, Tailwind CSS, and React,
                    which allow me to create modern, responsive web applications with clean and
                    organized code. With HTML, I can structure content effectively, ensuring it
                    is accessible and semantically meaningful. My CSS skills, combined with Tailwind CSS, 
                    enable me to style web applications quickly and consistently while maintaining
                    a professional and polished look. Additionally, my knowledge of TypeScript enhances 
                    code reliability and readability by adding type safety to JavaScript. With React, 
                    I can build dynamic, component-based interfaces that deliver
                    a smooth user experience and efficient data handling. Together, these technologies 
                    empower me to develop high-quality front-end solutions tailored to various project requirements.
                </p>
            </div>

            {/* Right Side: Tech Stack */}
            <div className='flex justify-center'>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 text-lg sm:text-xl text-[#283432]'>
                    <div className='space-y-2 text-center'>
                        <h2 className='font-semibold'>Node.js</h2>
                        <h2 className='font-semibold'>CSS</h2>
                    </div>
                    <div className='space-y-2 text-center'>
                        <h2 className='font-semibold'>Tailwind CSS</h2>
                        <h2 className='font-semibold'>HTML</h2>
                    </div>
                    <div className='space-y-2 text-center'>
                        <h2 className='font-semibold'>Next.js</h2>
                        <h2 className='font-semibold'>TypeScript</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
