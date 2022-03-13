import React, {useState} from 'react';
import {AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Question =({ title, info})=>{
  const [showInfo, setShowInfo] = useState(false);
  return<>
          <div className='question_data'>
              <div className='heading_cont'>
              <h4>{title}</h4>
                <button className='icon_btn' onClick={()=> setShowInfo(!showInfo)}>
                {showInfo? <AiOutlineMinus /> : <AiOutlinePlus />}  </button> 
              </div>
           {showInfo && <p> {info}</p>}
          </div>
          </>
}
export default Question;