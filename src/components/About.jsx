
import { useRef } from 'react';
import { useActiveOnScroll } from '../hooks/useActiveOnScroll';

const About = () => {

    const aboutRef = useRef(null);
    useActiveOnScroll(null, aboutRef);

    return (
            <section
                id='about'
                ref={aboutRef}>
                <div className='overflow-hidden py-24 sm:py-32'>
                    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                        hejsan
                    </div>
                </div>
            </section>
    );
};

export default About;
