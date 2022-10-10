// import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';


const Quiz = () => {
    const singleQuiz = useLoaderData();
    const questions = singleQuiz.data.questions
    // console.log(questions)
    return (
        <div className='flex justify-center'>
            <div className='mx-2 lg:w-2/4'>
                {singleQuiz.data.name}
                {
                    questions.map(question => <Question question={question}></Question>)
                }
            </div>
        </div>
    );
};

// export const correctAnswer = createContext();

function Question({question}){
    const options = question.options
    const rightAns = question.correctAnswer
    // console.log(rightAns);
    function setAns(x){
        if(x === rightAns){
            alert('right Ans')
        }else{
            alert('Wrong Ans')
        }
    }

    return(
    <div className='border my-4 lg:h-1/6 flex flex-col justify-between drop-shadow-md'>
            <div className='p-8 h-2/4 flex justify-center items-center lg:p-0' >
                <h1>{question.question}</h1>
            </div>
        <div className='lg:grid grid-cols-2 gap-2 items-center'>
            {
                options.map(option => <Options option={option} setAns={setAns}></Options>)
            }
        </div>
    </div>
    )
}

function Options({option,setAns}){
    // console.log(setAns)
    return(
    <div>   
        <div className='border p-2 hover:shadow-lg lg:p-5' onClick={()=>setAns(option)}>
            <p>{option}</p>
        </div>
    </div>
    )
}

export default Quiz;