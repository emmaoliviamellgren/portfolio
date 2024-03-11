import Navbar from './components/Navbar';
import ProfileCard from './components/content/ProfileCard';
import PreviousWork from './components/content/Projects';
import About from './components/content/About';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className='w-screen selection:bg-pink-500 selection:text-[#eee] overflow-x-hidden'>
            <Navbar />
            <ProfileCard />
            <About />
            <PreviousWork />
            <Footer />
        </div>
    );
};

export default App;
