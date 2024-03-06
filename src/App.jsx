import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import PreviousWork from './components/PreviousWork';
import About from './components/About';

const App = () => {

    return (
        <div className='w-screen'>
            <Navbar />
            <ProfileCard />
            <About />
            <PreviousWork />
        </div>
    );
};

export default App;
