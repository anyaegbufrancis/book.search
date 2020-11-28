import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from "./components/navbar/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom";
import BodyComponent from "./components/body/body";
import BookList from "./components/booklist/BookList"
import Saved from "./components/saved/Saved"


function App() {
  return (
    <Router>
    <NavComponent />
    <Route exact path="/" component={BodyComponent} />
    <Route exact path="/searched" component={BookList} />   
    <Route exact path="/saved" component={Saved} />
    </Router>
  );
}

export default App;
