// import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { EyeIcon} from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Quiz = () => {
    const singleQuiz = useLoaderData();
    const questions = singleQuiz.data.questions
    // console.log(questions)
    return (
        <div>
            <ToastContainer />
            <div className='flex justify-center my-8 '>
            <div className='mx-2 lg:w-2/4 '>
                <p className='text-2xl font-bold text-blue-800 my-4'>Quiz of {singleQuiz.data.name}</p>
                <hr/>
                {
                    questions.map(question => <Question question={question}></Question>)
                }
            </div>
        </div>
        </div>
    );
};

// export const correctAnswer = createContext();

function Question({question}){
    const options = question.options
    const rightAns = question.correctAnswer
    const faq = question.question;
    const newFaq = faq.split('<p>')
    const afterchange = newFaq[1].split('</p>')
    
    function setAns(x){
        if(x === rightAns){
            toast.success('Right Ans!', {
                position: toast.POSITION.TOP_CENTER
            });
        }else{
            toast.error('Wrong Ans !', {
                position: toast.POSITION.TOP_CENTER
            });
        }
    };
    function eyeIcon(){
        toast.info(`Right ans is-  ${rightAns}!`, {
            position: toast.POSITION.TOP_CENTER
        });
    }
    return(
    <div className=' my-4 lg:h-1/6 flex flex-col justify-between shadow-lg rounded-lg p-4'>
        <div className='flex justify-end'>
                <EyeIcon onClick={eyeIcon} className="h-6 w-6 text-blue-800"/>
        </div>
        <div className='p-8 h-2/4 flex justify-center items-center lg:p-0'>
                <h1 className='text-base font-bold'>{afterchange[0]}</h1>
        </div>
        <div className='lg:grid grid-cols-2 gap-2 items-center  '>
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
        <div className='border-blue-700 border p-2 hover:shadow-lg lg:p-5' onClick={()=>setAns(option)}>
            <p>{option}</p>
        </div>
    </div>
    )
}

export default Quiz;