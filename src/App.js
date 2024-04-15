import "./App.css"
import About from "./Components/About/About";
import Header from "./Components/Common/Heading/Header"
import Home from "./Components/Home/Home"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App () {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
    </>
  )
}

export default App