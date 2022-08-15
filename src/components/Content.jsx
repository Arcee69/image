import React from 'react';

const Content = ({ item }) => {
  return (
     <>     
        <div className='w-full rounded overflow-hidden shadow-lg mt-2'>
            <ul className='grid grid-cols-3 gap-2' >
                {item.map((items) => (
                <li key={items.id}>
                    <img src={items.webformatURL} alt='images' className='w-full h-4/6'/>
                    <div className='px-6 py-4'>
                        <div className='font-bold text-purple-500 text-xl-mb-2'>Photo by {items.user}</div>
                        <div>Views: {items.views}</div>
                        <div>Downloads: {items.downloads}</div>
                        <div>Likes: {items.likes}</div>
                        <div>
                        <span className='inline-block text-sm font-semibold text-gray-700'>
                            {items.tags}
                        </span>
                        </div>
                    </div>
                    
                </li>
                ))}
            </ul>
            {/* <img src='https://source.unsplash.com/random' alt='images' className='w-full' />
            <div className='px-6 py-4'>
            <div className='font-bold text-purple-500 text-xl-mb-2'>Photo by John Doe</div>
            <ul>
                <li>
                <strong>Views:</strong> 4000
                </li>
                <li>
                <strong>Downloads:</strong> 300
                </li>
                <li>
                <strong>Likes:</strong> 4000
                </li>
            </ul>
            </div>
            <div className='px-6 py-4'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                #tag1
            </span>
            </div> */}     
        </div>
    </> 
  )
}

export default Content
