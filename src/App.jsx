import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import PreviousWork from './components/PreviousWork';

const App = () => {
    return (
        <div className='h-screen w-screen'>
            <Header/>
            <ProfileCard/>
            <PreviousWork/>
        </div>
    );
};

export default App;
