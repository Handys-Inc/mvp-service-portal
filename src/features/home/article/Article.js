import React from 'react'
import './article.style.scss'
import LeftIcon from '../../../icons/interacemail/Left.icon'
import RightIcon from '../../../icons/interacemail/Right.icon'
import { ARTICLES } from '../../../pages/home/data'
import { useHomeContext } from '../../../pages/home/home.context'

function Article () {
  const { articleId, setArticleId } = useHomeContext()
  return articleId !== null ? (
    <div id='article'>
      <h1>{ARTICLES[articleId].title}</h1>
      {ARTICLES[articleId].image}
      <div className='body'>{ARTICLES[articleId].paragraph}</div>

      <div className='buttons'>
        {articleId !== 0 && (
          <div
            className='btn-outline-pink'
            onClick={() => {
              setArticleId(articleId - 1)
            }}
          >
            <LeftIcon />
            <span>Prev</span>
          </div>
        )}
        {articleId !== ARTICLES.length - 1 && (
          <div
            className='btn-pink'
            onClick={() => {
              setArticleId(articleId + 1)
            }}
          >
            <span>Next</span>
            <RightIcon />
          </div>
        )}
      </div>
    </div>
  ) : null
}

export default Article
