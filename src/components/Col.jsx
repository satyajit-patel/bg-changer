import React from 'react'
import { useState } from 'react'

const Col = () => {
    let [color, setColor] = useState('olive');
  return (
    // the in-line css gets written in camel case
    <div className='w-screen h-screen flex flex-wrap items-end justify-center' style={{backgroundColor: color}}>
        <div className='h-m w-max flex flex-wrap justify-center gap-4 bg-white rounded-lg p-1'>
          <button className='bg-red-700 text-white rounded-lg' onClick={() => setColor('red')}>Red</button>
            <button 
              className='bg-green-700 text-white rounded-lg hover:bg-green-300' 
              onClick={() => setColor('green')}
            >
            Green
            </button>
            <button 
              className='bg-yellow-500 text-white rounded-lg hover:bg-yellow-100' 
              onClick={() => setColor('yellow')}
            >
            Yellow
            </button>
            <button className='bg-white-700 text-black rounded-lg' onClick={() => setColor('white')}>White</button>
            <button className='bg-pink-700 text-white rounded-lg' onClick={() => setColor('pink')}>Pink</button>
            <button className='bg-gray-700 text-white rounded-lg' onClick={() => setColor('gray')}>Gray</button>
            <button className='bg-blue-700 text-white rounded-lg' onClick={() => setColor('blue')}>Blue</button>
            <button className='bg-black text-white rounded-lg' onClick={() => setColor('black')}>Black</button>
        </div>
    </div>
  )
}

export default Col
