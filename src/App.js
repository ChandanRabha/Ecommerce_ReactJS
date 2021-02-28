import './App.css';
import Homepage from './pages/homepage/homepage.component'
import {Hats} from './pages/hats/hats.component'
import { Route, Switch, Link } from 'react-router-dom'
function Test(props){
  console.log(props)
  return(<div><h1>TESTING 123</h1></div>)
}
function App() {
  return (
    <div>
      {/* Link component is used to dynamically add paths to the url of the webpage without refreshing the webpage. Anchor tags reload the page whereas link tag just loads based on the route component written for that path*/}
               {/* <Link to='/test'>LINK ME</Link> */}
      {/*switch renders the component which matches the path first. Its used so that no unwanted components are*/}
      <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/test' component={Test}/>
          <Route path='/hats' component={Hats}/>
      </Switch>
      {/* <Homepage/> */}
    </div>
  );
}


export default App;
