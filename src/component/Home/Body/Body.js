import React from 'react';
import { Link } from 'react-router-dom';

const Body = (props) => {
    const quiz = props.quizs
    // console.log(quiz)
    return (
        <div className='my-10 lg:flex justify-center'>
           <div className='lg:grid grid-cols-4 gap-4 w-9/12 '>
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
        <div className='border'>
            <div className='bg-blue-200 m-2 rounded-lg'>
                <img src={logo}  alt="Logo"/>
            </div>
            <div>
                <p>Name :{name}</p>
                <p>{total}</p>
            </div>
            <div className='m-2 '>
                <button className='w-full bg-blue-200 rounded-md py-1' ><Link to={`card/${id}`}>Start</Link></button>
            </div>
        </div>
    )
}

export default Body;