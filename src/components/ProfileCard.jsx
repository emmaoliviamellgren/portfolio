import Emma from '../assets/Emma.jpg';

const ProfileCard = () => {
    return (
        <div className='flex flex-wrap w-screen'>
            {/* Heading */}
            <div className='flex flex-col xl:flex-row justify-center items-center text-center mx-auto max-w-screen-xl px-6 py-12 mt-12 font-sans md:px-12 md:py-32 lg:px-24'>
                <img
                    src={Emma}
                    className='h-[300px] w-[310px] object-cover object-top rounded-full'
                    alt='Emma Mellgren'
                />
                <div className='pl-2 xl:pl-32'>
                    <h1 className='text-3xl my-12 xl:mt-0 leading-[3rem]'>
                        👋 Hi, I'm <span className='font-bold'>Emma</span> -
                        front end developer in the making!
                    </h1>
                    {/* Subheading */}
                    <p className='gap-6 text-xl leading-[2.2rem]'>
                        Currently studying{' '}
                        <span className='underline underline-offset-4 decoration-2 decoration-sky-500 transition-all ease-in-out duration-50 hover:decoration-[#313638]'>
                            frontend development
                        </span>{' '}
                        at KYH, while mastering the art of crafting{' '}
                        <span className='underline underline-offset-4 decoration-2 decoration-pink-500 transition-all ease-in-out duration-50 hover:decoration-[#313638]'>
                            engaging user interfaces
                        </span>
                        . I'm eager to learn and grow in tech!
                    </p>
                    {/* Links */}
                    <div className='mt-12 flex justify-center gap-4'>
                        <a
                            className='border border-stone-500 transition ease-in-out duration-50 hover:opacity-80 rounded-md px-4 py-2'
                            href='https://github.com/emmaoliviamellgren'>
                            GitHub
                        </a>
                        <a
                            className='border border-stone-500 transition ease-in-out duration-50 hover:opacity-80 rounded-md px-4 py-2'
                            href='https://linkedin.com/in/emma-m-945954192'>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            {/* Languages container */}
            <div className='mx-auto text-center flex flex-col'>
                <div className='flex justify-center items-center w-screen h-36 backdrop-blur-md bg-white/5 mt-12 text-2xl px-20 lg:px-40'>
                    🚀 React | HTML, CSS, JS | Figma | TypeScript | MERN stack
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
