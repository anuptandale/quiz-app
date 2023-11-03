import React from 'react'

const Questionresult = (props) => {
  return (
    <>
      {props.iscorrect ?<p className='result'>Correct!</p> : <p className='result'>Incorrect!</p>}
    
    </>
  )
}

export default Questionresult