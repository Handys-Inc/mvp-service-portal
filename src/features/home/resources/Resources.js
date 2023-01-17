import React from 'react'
import './resources.style.scss'

function Resources () {
  const data = [
    {
      image: '/images/resource_1.png',
      text: 'How to make your job profile standout'
    },
    {
      image: '/images/resource_2.png',
      text: 'How to make your job profile standout'
    },
    {
      image: '/images/resource_3.png',
      text: 'How to make your job profile standout'
    }
  ]
  return (
    <div id='resources'>
      <h4>Resources and tips</h4>

      <div className='resources'>
        {data.map((x, i) => (
          <div className='resource'>
            <img src={x.image} alt={x.text} />
            <div className='content-box'>
              <p>{x.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Resources
