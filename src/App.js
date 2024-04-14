import "./App.css"
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
        </Switch>
      </Router>
    </>
  )
}

export default App