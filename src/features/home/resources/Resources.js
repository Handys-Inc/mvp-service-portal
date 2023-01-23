import React from 'react'
import { useHomeContext } from '../../../pages/home/home.context'
import './resources.style.scss'

function Resources () {
  const { setArticleId, setArticleShow } = useHomeContext()
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
          <div
            className='resource'
            onClick={() => {
              setArticleId(i)
              setArticleShow(true)
            }}
          >
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
