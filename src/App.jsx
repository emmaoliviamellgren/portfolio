import Header from './components/Header';
import Emma from './assets/Emma2024ver2small.jpg';

const App = () => {
    return (
        <div className='h-screen w-screen'>
            <Header></Header>

            <div className='flex flex-col mt-12'>
                <div className='w-[600px] mx-auto text-center'>

                    <img
                        src={Emma}
                        className='mx-auto h-[200px] w-[350px] object-cover rounded-full'
                        alt=''
                    />
                    <h1 className='text-3xl whitespace-pre-wrap my-12 leading-10'>
                        👋 Hi, I'm <span className='font-bold'>Emma</span> -
                        front end developer in the making!
                    </h1>

                    {/* Smaller box container */}
                    <div className='flex flex-col gap-6 text-xl leading-8'>
                        <p className='whitespace-pre-wrap'>
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
                    {/* Smaller box container end */}
                </div>

                <div className='flex justify-center items-center w-screen h-36 bg-stone-500 bg-opacity-15 mt-12 whitespace-pre-wrap text-2xl'>🚀 React | HTML, CSS, JS | Figma | TypeScript
                </div>

            </div>
        </div>
    );
};

export default App;
