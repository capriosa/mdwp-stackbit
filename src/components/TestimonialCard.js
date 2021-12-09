import Fade from 'react-reveal/Fade';
import React from 'react';

const TestimonialCard = ({ annotationPrefix, title, body, testimonial }) => {
    return (
        <div className="w-full flex justify-center">
            <Fade top>
                <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                    <div className="flex justify-center md:justify-end -mt-16">
                        <img
                            alt="testimonial"
                            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
                        />
                    </div>
                    <div>
                        <h2 className="text-gray-800 text-3xl font-semibold" data-sb-field-path=".title">
                            {title}
                        </h2>
                        l
                    </div>
                    <div className="flex justify-end mt-4">
                        <a href="#" className="text-xl font-medium text-indigo-500" data-sb-field-path=".testimonial">
                            {testimonial}
                        </a>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default TestimonialCard;
