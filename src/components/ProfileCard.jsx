import Emma from '../assets/Emma2024ver2small.jpg';

const ProfileCard = () => {
    return (
        <div className='flex flex-wrap mt-24 w-screen'>
            {/* Intro container */}
            <div className='flex flex-col xl:flex-row justify-center items-center text-center px-12 lg:px-40 min-[1920px]:px-[550px]'>
                <img
                    src={Emma}
                    className='h-[300px] w-[310px] object-cover rounded-full'
                    alt='Emma Mellgren'
                />
                <div className='px-2 xl:px-32'>
                    <h1 className='text-3xl my-12 xl:mt-0 leading-[3rem]'>
                        👋 Hi, I'm <span className='font-bold'>Emma</span> -
                        front end developer in the making!
                    </h1>
                    <p className='gap-6 text-xl leading-[2.8rem]'>
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
                </div>
                {/* Paragraph container */}
            </div>

            {/* Languages container */}
            <div className='mx-auto text-center flex flex-col my-12'>
                <div className='flex justify-center items-center w-screen h-36 backdrop-blur-md bg-white/5 mt-12 text-2xl px-20 lg:px-40'>
                    🚀 React | HTML, CSS, JS | Figma | TypeScript | MERN stack
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
