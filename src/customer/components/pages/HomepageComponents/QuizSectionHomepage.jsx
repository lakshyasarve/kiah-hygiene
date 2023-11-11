import React from 'react'
import './QuizSectionHomepage.css'


const QuizSectionHomepage = () => {
  return (
    <div className='flex container'>
      <div className="quiz-container-1">
        <img src="/images/homepage-quiz-image.png" alt="" />
      </div>
      <div className="quiz-container-2">
        <p className='quiz-homepage-heading'>Still not sure?</p>
        <p className='quiz-homepage-subheading'>Start the quiz now and unlock a world of personalized solutions!</p>
        <button className='quiz-button'>Take a Quiz</button>
      </div>
    </div>
  )
}

export default QuizSectionHomepage
