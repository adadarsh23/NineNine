import React from "react";
import image12 from "../../assets/image/991.jpg";

const About= () => {
    return (
        <div className="container">
           <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Nine Nine Dashboard offers a powerful, easy-to-use platform to manage your website’s data, analytics, and performance in one place. With a clean, modern design, real-time updates, and customizable widgets, it helps users stay organized and make smarter decisions. Simplify your workflow and unlock your website’s full potential with Nine Nine.</p>
                </div>
                <div className="lg:mx-0 mx-auto h-full rounded-2xl object-cover">
                    <img className="w-full h-full rounded" src={image12} alt="A group of People" />
                </div>
            </div>
        </div> 
        </div>
        
    );
};

export default About;
