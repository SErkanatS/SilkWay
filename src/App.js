import './App.css';
import Navbar from './Navbar';
import FirstScreen from './FirstScreen';
import Add from './Addproduct';
import Footer from './Footer';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SortingBar from "./SortingBar";
import SecondScreen from "./SecondScreen";
import User from "./User";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <div className="App">
                    <Navbar/>
                    <SortingBar />
                    <Route exact path='/' component={FirstScreen}/>
                    <Route exact path='/goods' component={SecondScreen} />
                    <Route exact path='/user' component={User} />
                    <Route exact path='/addproduct' component={Add} />
                    <Footer/>
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default App;


