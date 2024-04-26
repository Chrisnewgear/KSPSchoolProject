import "./App.css"
import About from "./Components/About/About";
import CourseHome from "./Components/Allcourses/CourseHome";
import Header from "./Components/Common/Heading/Header"
import Home from "./Components/Home/Home"
import Team from "./Components/Team/Team";
import Price from "./Components/Pricing/Price";
import Blog from "./Components/Blog/Blog"; 
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Common/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App () {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/courses' exact component={CourseHome} />
          <Route path='/team' exact component={Team} />
          <Route path='/payment' exact component={Price} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App