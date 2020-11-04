
import { Container } from '@material-ui/core';
import './App.css';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import Widget from './components/widgets/Widget';
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">

      {!user ? <Login /> : (
        <>
        <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
          </>
  )}
  </div>
  );
}

export default App;
