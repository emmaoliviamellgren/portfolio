import { useEffect } from 'react';
import { useIntersectionObserver } from '@uidotdev/usehooks';

/* Hook for displaying which section is active, and its corresponding link */

export const useActiveOnScroll = (aboutRef, projectsRef) => {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute('id');
                    const navbarLink = document.querySelector(
                        `a[href="#${id}"]`
                    );
                    if (entry.isIntersecting) {
                        if (id === 'about') {
                            navbarLink.style.color = '#0ea5e9';
                        } else if (id === 'previous-work') {
                            navbarLink.style.color = '#ec4899';
                        }
                    } else {
                        navbarLink.style.color = '#fff';
                    }
                });
            },
            { threshold: 0.7 }
        );

        if (aboutRef && aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        if (projectsRef && projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [aboutRef, projectsRef]);
};
