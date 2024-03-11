import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import PreviousWork from './components/PreviousWork';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {

    return (
        <div className='w-screen select-none'>
            <Navbar />
            <ProfileCard />
            <About />
            <PreviousWork />
            <Footer />
        </div>
    );
};

export default App;
