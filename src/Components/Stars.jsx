import React from 'react'
import {AiOutlineStar,AiFillStar} from 'react-icons/ai'
const Stars = (props) => {
    const stars = [];
    let star;
    if(props.difficulty==="hard") star=3;
    else if(props.difficulty==="medium") star=2;
    else if(props.difficulty==="easy") star=1;
    for (let index = 0; index < 5; index++) {
        if(star>0){
            stars.push(<AiFillStar key={index}/>);
            star--;
        }else{
            stars.push(<AiOutlineStar key={index}/>);
        }
    }
  return (
    <div>

      {stars}
    </div>
  )
}

export default Stars