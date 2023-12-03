import React from 'react'
import Image from 'next/image'
import JoinButton from '../../../global-components/button/JoinButton';
import contact from './Contact.png'
import Link from 'next/link';

// async function GetJobs()
//   {

//     const res = await fetch('http://localhost:4000/Gitposts',{
//       next:{
//         revalidate: 0
//     }
//   })

//     return res.json()
//   }



export default async function card({job}) 
  {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        </head>
        {
            <div key={job} >
              <Link  href="/">
                <div className='p-4 flex rounded-md shadow-md border hover:bg-gray-200'>
                  <div className='w-full'>
                    <p className='text-[#061257] font-bold'>{job.name}</p>
                    <div className='pl-1 flex items-center justify-items-center mt-1 text-[#6a719a]'>
                      <i class="pr-2 fa-solid fa-location-dot"></i>
                      <p>{job.location}</p>
                    </div>

                    <div className='pl-1 flex items-center justify-items-center mt-1 text-[#6a719a]'>
                      <i class="pr-2 fa-solid fa-calendar-days"></i>
                      <p className='text-[#6a719a]'>{job.date}</p>
                    </div>

                    <div className='pl-1 flex items-center justify-items-center mt-1 text-[#6a719a]'>
                      <i class="pr-2 fa-solid fa-clock"></i>
                      <p className='text-[#6a719a]'>{job.time}</p>
                    </div>

                    <div className='mt-3 mb-2'>
                      <JoinButton Buttonlink='#' ButtonName='Open'></JoinButton>
                    </div>
                  </div>

                  <div className='w-1/4 flex flex-col justify-between'>
                    <h1 className='text-end font-bold'>{job.price}</h1>
                    <div className='w-[100%] overflow-hidden rounded-full hover:bg-[#001c5e] ease-in duration-500'>
                      <Image className='w-[100%]'
                        src={contact}
                        alt='img'
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
        }


      </div>
    )

  }
