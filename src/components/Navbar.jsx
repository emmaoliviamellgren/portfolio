import { useActiveOnScroll } from '../hooks/useActiveOnScroll';
import { useCollapseOnScroll } from '../hooks/useCollapseOnScroll';

const Navbar = () => {
    const collapseOnScroll = useCollapseOnScroll();

    // console.log(activeSection)

    return (
        <nav
            className={`z-10 flex fixed transition-all duration-400 h-16 ease-in-out overflow-hidden w-screen justify-center items-center text-white backdrop-blur-md bg-white/10 ${
                collapseOnScroll && 'h-8 backdrop-blur-xl'
            }`}>
            <ul className='flex gap-6 text-base items-center tracking-tight'>
                <li>
                    <a
                        className={`transition ease-in-out duration-50 hover:opacity-80`}
                        href='#about'>
                        About
                    </a>
                </li>
                <li>
                    <a
                        className={`transition ease-in-out duration-50 hover:opacity-80`}
                        href='#previous-work'>
                        Projects
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
