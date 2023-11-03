import React from 'react'
const Questions = (props) => {

  // const [ques,setQues]=useState(0);
  
  return (
    <>
        <div className='questions'>
            <p>{decodeURIComponent(props.questions_data[props.ques].question)}</p>
        </div>
    </>
  )
}

export default Questions