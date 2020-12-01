import './main.scss';
import  {Navbar} from './components/navbar';

const React= require('react');



function App() {
  return (
      <div>
          <Navbar/>
          <h1 className="title has-text-centered">Index Page</h1>
      </div>

  );
}


export default App;
