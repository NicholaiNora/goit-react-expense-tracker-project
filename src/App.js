import './App.css';
import BgImageWrapper from './components/BgImageWrapper/BgImageWrapper';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import DecorationTab from './components/DecorationTab/DecorationTab';
import UserBarBtn from './components/UserBarBtn/UserBarBtn';
import UserSetsModal from './components/UserSetsModal/UserSetsModal';

function App() {
  return (
    <div className="App">
      <BgImageWrapper />
      <DecorationTab />
      <UserBarBtn />
      <UserSetsModal />
      <BurgerMenu />
    </div>
  );
}

export default App;
