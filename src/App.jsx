import Navbar from './components/Navbar';
import ProfileCard from './components/content/ProfileCard';
import PreviousWork from './components/content/Projects';
import About from './components/content/About';
import Footer from './components/Footer';
import Contact from './components/content/Contact';

const App = () => {
    return (
        <div className='w-screen selection:bg-pink-500 selection:text-[#eee]'>
            <Navbar />
            <ProfileCard />
            <About />
            <PreviousWork />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
