import React from 'react';
import { EyeIcon} from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';

function Question({question}){
    const options = question.options
    const rightAns = question.correctAnswer
    const faq = question.question;
    const newFaq = faq.split('<p>')
    const afterchange = newFaq[1].split('</p>')
    
    // choose Right Ans
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

    // For EyeICon Function

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
    return(
    <div>   
        <div className='border-blue-700 border p-2 hover:shadow-lg lg:p-5' onClick={()=>setAns(option)}>
            <p>{option}</p>
        </div>
    </div>
    )
}

export default Question;