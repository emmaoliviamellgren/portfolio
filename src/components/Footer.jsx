import { IoIosMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

const Footer = () => {
    return (
        <>
            <footer className='h-32 w-[calc(100%-6rem)] lg:w-[calc(100%-24rem)] 2xl:w-[calc(100%-40rem)] max-w-7xl mx-auto backdrop-blur-sm bg-white/10 mb-12 rounded-xl shadow-xl shadow-indigo-500/15 ring-1 ring-gray-400/30 flex flex-col gap-3 justify-center items-center'>
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
                <p className='text-xs sm:text-sm text-slate-500'>
                    For my full CV, please check in my Linkedin.
                </p>
            </footer>
            <div className='flex justify-center items-center relative bottom-5 tracking-wide'>
                <p className='text-xs sm:text-sm uppercase flex py-2 gap-2 text-slate-200'>
                    Created and developed with{' '}
                    <span className='items-end'>💜</span>
                </p>
            </div>
        </>
    );
};

export default Footer;
