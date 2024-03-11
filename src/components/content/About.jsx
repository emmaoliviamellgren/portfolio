import { useRef } from 'react';
import { useActiveOnScroll } from '../../hooks/useActiveOnScroll';

const About = () => {
    const aboutRef = useRef(null);
    useActiveOnScroll(null, aboutRef);

    return (
        <section
            id='about'
            ref={aboutRef}>
            <div className='overflow-hidden py-16 lg:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto max-w-2xl gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none'>
                        <div className='lg:pr-8 lg:pt-4'>
                                <h2 className='text-base font-semibold leading-7 text-sky-500'>
                                    Who am I?
                                </h2>
                                <p className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
                                    A little about me
                                </p>
                                <div className="flex flex-col lg:flex-row lg:gap-32">
                                <p className='mt-6 text-base leading-8 lg:max-w-lg'>
                                    Hi, I'm Emma, currently studying front-end
                                    developer @{' '}
                                    <a
                                        href='https://kyh.se/'
                                        className='font-semibold'>
                                        KYH
                                    </a>
                                    . I'm passionate about learning all things
                                    tech, an interest that started super young.
                                    It apparently has continued, as I often find
                                    myself coding late into the nights. 😅
                                </p>
                                <p className='mt-6 text-base leading-8 lg:max-w-lg'>
                                    While I strive to learn as much as I
                                    possibly can, I've found that my passion
                                    lies in crafting{' '}
                                    <span className='underline underline-offset-4 decoration-2 decoration-sky-500 transition-all ease-in-out duration-50 hover:decoration-[#313638]'>
                                        responsive and accessible interfaces
                                    </span>{' '}
                                    that are{' '}
                                    <span className='underline underline-offset-4 decoration-2 decoration-pink-500 transition-all ease-in-out duration-50 hover:decoration-[#313638]'>
                                        beautiful to experience
                                    </span>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
