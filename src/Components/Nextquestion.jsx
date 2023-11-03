import React from 'react'

const Nextquestion = ({ques,handleQuestions,visiblenextbtn}) => {
  return (
    <>
      {visiblenextbtn ? <button className='next'  onClick={handleQuestions}>Next Question</button> : <p></p>}
      
    </>
  )
}

export default Nextquestion