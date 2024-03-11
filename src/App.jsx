import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import PreviousWork from './components/content/PreviousWork';
import About from './components/content/About';
import Footer from './components/Footer';

const App = () => {

    return (
        <div className='w-screen'>
            <Navbar />
            <ProfileCard />
            <About />
            <PreviousWork />
            <Footer />
        </div>
    );
};

export default App;
