import Navbar from '../../global-components/navbar/Navbar'
import React from 'react'

export default function page() {
  return (
    <main>
      <Navbar></Navbar>
      <div className='flex gap-10 mt-6'>
{/* Filter section Top part*/}
        <div className=' flex items-center justify-self-center px-4 w-2/6 h-[40px] bg-gray-100 rounded-md text-[#2b3035] text-center aline-center shadow'>
          Filter Your Item
        </div>

{/* Tasker Section Top Part*/}
        <div className='flex items-center justify-between h-[40px] w-full bg-gray-100 rounded-md text-[#2b3035] px-4 shadow content-center'>
          <h>All Tasker</h>
          <div className='flex'>
            <h1>Ratings:</h1>
            <select className="mx-1 px-2 rounded-md border-none outline-none" name="" id="">
              <option className=' hover:rounded-md ' value="">All</option>
              <option className=' hover:rounded-md ' value="">3.5</option>
              <option className=' hover:rounded-md ' value="">4</option>
              <option className=' hover:rounded-md ' value="">4.5+</option>
            </select>
          </div>
        </div>
      </div>

{/* Filter section main part */}
      <div className='flex gap-10'>
        <section className='px-4 mt-1 w-2/6 h-[700px] bg-gray-100 rounded-md text-[#2b3035] shadow-lg'>
          Filter part
        </section>
        
{/* Tasker main part */}
        <section className='px-4 mt-4 w-full h-auto bg-gray-100 rounded-md text-[#2b3035] shadow-lg'>
          <div className='mt-2'>
          Tasker Card
          </div>
        </section>
      </div>
    </main>
  )
}
