import { useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from './Question/Question';



const Quiz = () => {
    const singleQuiz = useLoaderData();
    const questions = singleQuiz.data.questions

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

export default Quiz;