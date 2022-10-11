import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

const Body = (props) => {
    const quiz = props.quizs
    // console.log(quiz)
    return (
        <div className='my-10 flex justify-center'>
           <div className='lg:grid grid-cols-4 gap-4 w-4/5 '>
           {
                quiz.map(singleQuiz => <Contant key={singleQuiz.id} singleQuiz={singleQuiz}></Contant>)
            }
           </div>
        </div>
    );
};


function Contant(props){
    const {id,name,logo,total} = props.singleQuiz
    // console.log(props)
    return(
        <div className='border mb-4'>
            <div className='bg-blue-200 m-2 rounded-lg'>
                <img src={logo}  alt="Logo"/>
            </div>
            <div className='flex justify-between px-4'>
                <p className='text-base font-bold'>{name}</p>
                <p>{total}</p>
            </div>
            <div className='m-2 '>
            <Link to={`/card/${id}`}><button className='flex justify-between px-2 w-full font-bold bg-blue-200 rounded-md py-1 hover:bg-blue-400'>Start <ArrowLongRightIcon className="h-6 w-6 text-white-500"/></button> </Link>
            
            </div>
        </div>
    )
}

export default Body;