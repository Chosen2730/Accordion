import React from 'react';
import Question from './Question';
import questions from './data';

const App = ()=>{
  return<>
    <section className="main_section">
      <div className='question_flex'>
        <div className='question_cont cont_1'>
          <h3>Questions and Answers about Login</h3>
        </div>
        <div className='question_cont cont_2'>
            {questions.map((question)=>{
              const {id, title, info} = question;
                    return< Question key={question.id} {...question}/>
            })}
        </div>
      </div>
    </section>
  </>
}
export default App;