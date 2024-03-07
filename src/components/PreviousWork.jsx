import { useRef } from 'react';
import { useActiveOnScroll } from '../hooks/useActiveOnScroll';

// Img
import FigmaProject from '../assets/Figma Project.png';

const PreviousWork = () => {
    const projectsRef = useRef(null);
    useActiveOnScroll(null, projectsRef);

    return (
        <section
            id='previous-work'
            ref={projectsRef}>
            <div className='overflow-hidden py-12 lg:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
                        <div className='lg:pr-8 lg:pt-4'>
                            <div className='lg:max-w-lg mb-6'>
                                <h2 className='text-base font-semibold leading-7 text-sky-500'>
                                    Highlighted projects
                                </h2>
                                <p className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
                                    E-commerce
                                </p>
                                <p className='mt-6 text-base leading-8'>
                                    As part of a school assignment, I created an
                                    e-commerce template application built with
                                    React. Users can browse through items, add
                                    them to their shopping cart and proceed to
                                    checkout process. By creating an account,
                                    users can see their order history of
                                    previously "purchased" items.
                                </p>
                            </div>
                            <a
                            className='border border-stone-500 transition ease-in-out duration-50 hover:opacity-80 rounded-md px-4 py-2'
                            href='https://github.com/emmaoliviamellgren'>
                            View on Github
                        </a>
                        </div>
                        <img
                            src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
                            alt='E-commerce template'
                            className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 hover:grayscale'
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
            <div className='overflow-hidden py-24 sm:py-32'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
                        <div className='lg:pr-8 lg:pt-4'>
                            <div className='lg:max-w-lg mb-6'>
                                <h2 className='text-base font-semibold leading-7 text-sky-500'>
                                    Highlighted projects
                                </h2>
                                <p className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
                                    Weather application
                                </p>
                                <p className='mt-6 text-base leading-8'>
                                    I created a simple and user-friendly weather
                                    web application that provides real-time
                                    weather information for any location around
                                    the world. Users can easily check the
                                    current weather conditions, temperature,
                                    humidity and wind speed.
                                </p>
                            </div>
                            <a
                            className='border border-stone-500 transition ease-in-out duration-50 hover:opacity-80 rounded-md px-4 py-2'
                            href='https://github.com/emmaoliviamellgren'>
                            View on Github
                        </a>
                        </div>
                        <img
                            src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
                            alt='Weather application'
                            className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 hover:grayscale'
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
            <div className='overflow-hidden py-24 sm:py-32'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
                        <div className='lg:pr-8 lg:pt-4'>
                            <div className='lg:max-w-lg mb-6'>
                                <h2 className='text-base font-semibold leading-7 text-sky-500'>
                                    Highlighted projects
                                </h2>
                                <p className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
                                    Food Delivery Service
                                    <span className='pl-3 text-sm font-semibold leading-7 text-sky-500 align-super'>
                                        (PROTOTYPE)
                                    </span>
                                </p>
                                <p className='mt-6 text-base leading-8'>
                                    I created a simple and user-friendly weather
                                    web application that provides real-time
                                    weather information for any location around
                                    the world. Users can easily check the
                                    current weather conditions, temperature,
                                    humidity and wind speed.
                                </p>
                            </div>
                            <a
                            className='border border-stone-500 transition ease-in-out duration-50 hover:opacity-80 rounded-md px-4 py-2'
                            href='https://github.com/emmaoliviamellgren'>
                            View on Github
                        </a>
                        </div>
                        <img
                            src={FigmaProject}
                            alt='Food Delivery Service (Prototype)'
                            className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 hover:grayscale'
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PreviousWork;
