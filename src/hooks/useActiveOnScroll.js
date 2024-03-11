import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { useCollapseOnScroll } from './useCollapseOnScroll';

/* Hook for displaying which section is active, and its corresponding link */

export const useActiveOnScroll = (aboutRef, projectsRef) => {
    const scrolled = useCollapseOnScroll();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute('id');
                    const activeLink = document.querySelector(
                        `a[href="#${id}"]`
                    );

                    if (entry.isIntersecting || !scrolled) {
                        activeLink.style.opacity = '100%';
                    } else {
                        activeLink.style.opacity = '30%';
                    }
                });
            },
            { threshold: 0.2 }
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
    }, [aboutRef, projectsRef, scrolled]);
};
