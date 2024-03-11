import { IoIosMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

const Footer = () => {
    return (
        <footer className='h-24 w-[calc(100%-6rem)] lg:w-[calc(100%-24rem)] 2xl:w-[calc(100%-40rem)] max-w-7xl mx-auto backdrop-blur-sm bg-white/10 mb-12 rounded-xl shadow-xl shadow-indigo-500/15 ring-1 ring-gray-400/30 flex justify-center items-center'>
            <ul className='text-white flex gap-8 text-3xl'>
                <li>
                    <a href='mailto:mellgrenemma0@gmail.com'>
                        <IoIosMail className='transition ease-in hover:-translate-y-1' />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/emmaoliviamellgren'>
                        <IoLogoGithub className='transition ease-in hover:-translate-y-1' />
                    </a>
                </li>
                <li>
                    <a href='https://linkedin.com/in/emma-m-945954192'>
                        <IoLogoLinkedin className='transition ease-in hover:-translate-y-1' />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
