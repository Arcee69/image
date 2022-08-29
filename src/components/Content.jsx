import React from 'react';

const Content = ({ item }) => {
  return (
    <>     
        <div className='w-full rounded sx:overflow-x-hidden shadow-lg mt-2'>
            <ul className='grid xs:grid-cols-1 xs:mx-1 sm:grid-cols-2  md:grid-cols-3 xs:gap-4 sm:gap-2' >
                {item.map((items) => (
                <li key={items.id} className=' mb-2'>
                    <img src={items.webformatURL} alt='images' className='w-full h-4/6'/>
                    <div className='px-6 py-4'>
                        <div className='font-bold text-purple-500 text-xl-mb-2'>Photo by {items.user}</div>
                        <div>Views: {items.views}</div>
                        <div>Downloads: {items.downloads}</div>
                        <div>Likes: {items.likes}</div>
                        <div> 
                        <span className='inline-block text-sm font-semibold text-gray-700'>
                            {`Tags: ${items.tags}`}
                        </span>
                        </div>
                    </div>
                    
                </li>
                ))}
            </ul>    
        </div>
    </> 
  )
}

export default Content
