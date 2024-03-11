import { useRef } from 'react';
import { useActiveOnScroll } from '../../hooks/useActiveOnScroll';

// Img
import FigmaProject from '../assets/FigmaProject-1.png';
import FigmaProject2 from '../assets/FigmaProject-2.png';
import WeatherApp from '../assets/WeatherApp-1.png';
import WeatherApp2 from '../assets/WeatherApp-2.png';
import ECommerce from '../assets/E-Commerce-1.png';
import ECommerce2 from '../assets/E-Commerce-2.png';

const PreviousWork = () => {
    const projectsRef = useRef(null);
    useActiveOnScroll(null, projectsRef);

    return (
        <section
            id='previous-work'
            ref={projectsRef}>
            <div className='overflow-hidden py-24 lg:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
                        <div className='lg:pr-8 lg:pt-4'>
                            <div className='lg:max-w-lg mb-6'>
                                <h2
                                    className='relative z-10 text-base font-semibold leading-7 text-sky-500 bg-slate-800 py-0.5 px-2 w-fit bg-opacity-80
                                md:bg-transparent md:py-0 md:px-0'>
                                    Highlighted projects
                                </h2>
                                <p className='relative z-10 mt-2 text-3xl font-bold tracking-tight sm:text-4xl bg-slate-800 bg-opacity-80  py-2 px-2 w-fit md:bg-transparent md:py-0 md:px-0'>
                                    E-commerce
                                </p>

                                {/* Small screens block element */}
                                <div className='-z-1 opacity-50 block md:hidden absolute -mt-[10rem] sm:-mt-36 right-[1rem] sm:right-6 w-[19rem] sm:w-[24rem] aspect-video h-auto max-h-60 rounded-xl shadow-xl ring-1 ring-gray-400/10 overflow-hidden'>
                                    <img
                                        src={ECommerce}
                                        alt='E-Commerce'
                                        className='rounded-xl h-full w-full object-cover'
                                        onMouseEnter={(event) => {
                                            event.target.src = ECommerce2;
                                        }}
                                        onMouseLeave={(event) => {
                                            event.target.src = ECommerce;
                                        }}
                                    />
                                </div>
                                {/* Element ends */}

                                <p className='w-fit relative z-10 mt-6 text-base leading-8'>
                                    As part of a school assignment, I created an
                                    e-commerce template application built with
                                    React. Users can browse through items, add
                                    them to their shopping cart and proceed to
                                    checkout process. By creating an account,
                                    users can see their order history of
                                    previously "purchased" items.
                                </p>
                                <p className='font-semibold mt-4'>
                                    <span className='mr-2'>🖥</span>
                                    Currently working on a full stack version of
                                    this app!
                                </p>
                            </div>
                            <a
                                className='border border-stone-500 transition ease-in-out duration-50 hover:opacity-80 rounded-md px-4 py-2'
                                href='https://github.com/emmaoliviamellgren'>
                                View on Github
                            </a>
                        </div>

                        {/* Mid+ screens block element */}
                        <div className='hidden md:block w-[48rem] h-[440px] md:h-[540px] max-w-none shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 overflow-hidden'>
                            <img
                                src={ECommerce}
                                alt='E-Commerce'
                                className='rounded-xl object-cover h-full w-full hover:object-center-bottom hover:w-max'
                                onMouseEnter={(event) => {
                                    event.target.src = ECommerce2;
                                }}
                                onMouseLeave={(event) => {
                                    event.target.src = ECommerce;
                                }}
                            />
                        </div>
                        {/* Element ends */}
                    </div>
                </div>
            </div>
            <div className='overflow-hidden py-24 sm:py-32'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
                        <div className='lg:pr-8 lg:pt-4'>
                            <div className='lg:max-w-lg mb-6'>
                                <h2
                                    className='relative z-10 text-base font-semibold leading-7 text-sky-500 bg-slate-800 py-0.5 px-2 w-fit bg-opacity-80
                                md:bg-transparent md:py-0 md:px-0'>
                                    Highlighted projects
                                </h2>
                                <p className='relative z-10 mt-2 text-3xl font-bold tracking-tight sm:text-4xl bg-slate-800 bg-opacity-80  py-2 px-2 w-fit md:bg-transparent md:py-0 md:px-0'>
                                    Weather application
                                </p>
                                {/* Small screens block element */}
                                <div className='-z-1 opacity-50 block md:hidden absolute -mt-[10rem] sm:-mt-36 right-[1rem] sm:right-6 w-[19rem] sm:w-[24rem] aspect-video h-auto max-h-60 rounded-xl shadow-xl ring-1 ring-gray-400/10 overflow-hidden'>
                                    <img
                                        src={WeatherApp}
                                        alt='Weather Application'
                                        className='rounded-xl h-full w-full object-cover'
                                        onMouseEnter={(event) => {
                                            event.target.src = WeatherApp2;
                                        }}
                                        onMouseLeave={(event) => {
                                            event.target.src = WeatherApp;
                                        }}
                                    />
                                </div>
                                {/* Element ends */}

                                <p className='w-fit relative z-10 mt-6 text-base leading-8'>
                                    I created a simple and user-friendly weather
                                    web application that provides real-time
                                    weather information for any location around
                                    the world, using{' '}
                                    <a
                                        href='https://www.weatherapi.com'
                                        className='font-semibold'>
                                        WeatherAPI
                                    </a>{' '}
                                    for weather forecast and data. In the
                                    application, users can easily check the
                                    current weather conditions, temperature,
                                    humidity and wind speed.
                                </p>
                                <p className='block font-semibold mt-2'>
                                    Deployed with Netlify.
                                </p>
                            </div>
                            <div className='flex flex-col gap-4 w-fit'>
                                <a
                                    className='border border-stone-500 transition ease-in-out duration-50 hover:opacity-80 rounded-md px-4 py-2'
                                    href='https://github.com/emmaoliviamellgren'>
                                    View on Github
                                </a>
                                <a
                                    className='border border-stone-500 transition ease-in-out duration-50 hover:opacity-80 rounded-md px-4 py-2'
                                    href='https://weather-of-the-day-project.netlify.app'>
                                    View in browser
                                </a>
                            </div>
                        </div>

                        {/* Mid+ screens block element */}
                        <div className='hidden md:block w-[48rem] h-[440px] md:h-[540px] max-w-none shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0'>
                            <img
                                src={WeatherApp}
                                alt='Weather application'
                                className='rounded-xl object-cover h-full w-full'
                                onMouseEnter={(event) => {
                                    event.target.src = WeatherApp2;
                                }}
                                onMouseLeave={(event) => {
                                    event.target.src = WeatherApp;
                                }}
                            />
                        </div>
                        {/* Element ends */}
                    </div>
                </div>
            </div>
            <div className='overflow-hidden py-24 sm:py-32'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
                        <div className='lg:pr-8 lg:pt-4'>
                            <div className='lg:max-w-lg mb-6'>
                                <h2
                                    className='relative z-10 text-base font-semibold leading-7 text-sky-500 bg-slate-800 py-0.5 px-2 w-fit bg-opacity-80
                                md:bg-transparent md:py-0 md:px-0'>
                                    Highlighted projects
                                </h2>
                                <div className='relative z-10 mt-2 bg-slate-800 bg-opacity-80 py-2 px-2 w-fit md:bg-transparent md:py-0 md:px-0'>
                                    <p className='sm:block text-sm font-semibold leading-7 text-sky-500 align-super'>
                                        (PROTOTYPE)
                                    </p>
                                    <p className='text-3xl font-bold tracking-tight sm:text-4xl'>
                                        Food Delivery Service
                                    </p>
                                </div>

                                {/* Small screens block element */}
                                <div className='-z-1 opacity-50 block md:hidden absolute -mt-[10rem] sm:-mt-36 right-[1rem] sm:right-6 w-[19rem] sm:w-[24rem] aspect-video h-auto max-h-60 rounded-xl shadow-xl ring-1 ring-gray-400/10 overflow-hidden'>
                                    <img
                                        src={FigmaProject}
                                        alt='Food Delivery Service (Prototype)'
                                        className='rounded-xl h-full w-full object-cover'
                                        onMouseEnter={(event) => {
                                            event.target.src = FigmaProject2;
                                        }}
                                        onMouseLeave={(event) => {
                                            event.target.src = FigmaProject;
                                        }}
                                    />
                                </div>
                                {/* Element ends */}

                                <p className='w-fit relative z-10 mt-6 text-base leading-8'>
                                    As a school project in our UX-design course,
                                    I prototyped a Soup Delivery service that
                                    offers a user-friendly experience when
                                    ordering your favorite comfort food. With an
                                    intuitive interface, users can explore a
                                    variety of soups, access information about
                                    allergens and ingredients, as well as
                                    intuitively navigate from selection to
                                    checkout.
                                </p>
                            </div>
                            <a
                                className='border border-stone-500 transition ease-in-out duration-50 hover:opacity-80 rounded-md px-4 py-2'
                                href='https://www.figma.com/file/m3UG4v4RsBQYl6ut31HrIe/Soup-y-Needs?type=design&node-id=0%3A1&mode=design&t=4tXyp1TWCz06uZdN-1 
                                '>
                                View in Figma
                            </a>
                        </div>

                        {/* Mid+ screens block element */}
                        <div className='hidden md:block w-[48rem] h-[440px] md:h-[540px] max-w-none shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0'>
                            <img
                                src={FigmaProject}
                                alt='Food Delivery Service (Prototype)'
                                className='rounded-xl object-cover h-full w-full'
                                width={2432}
                                height={1442}
                                onMouseEnter={(event) => {
                                    event.target.src = FigmaProject2;
                                }}
                                onMouseLeave={(event) => {
                                    event.target.src = FigmaProject;
                                }}
                            />
                        </div>
                        {/* Element ends */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PreviousWork;
