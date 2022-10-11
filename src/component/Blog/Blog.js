import React from 'react';

const Blog = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'> 
            <div className='border lg:w-3/4'>
                <h1 className='m-4 text-5xl'>- What is the purpose of react router ?</h1>
                <p className='p-4'>In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.
Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.
This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.</p>
            </div>
            <div className='border lg:w-3/4'>
                <h1 className='m-4 text-5xl'>- How dose context API work ?</h1>
                <p className='p-4'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='border lg:w-3/4'>
                <h1 className='m-4 text-5xl'>- What is the purpose of react router ?</h1>
                <p className='p-4'>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>
            </div>
        </div>
    );
};

export default Blog;