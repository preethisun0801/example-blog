import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import Create from './Create';
import BlogDetails from './BlogDetails';
import Error404 from './Error404';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blog/:id">
            <BlogDetails/>
          </Route>
          <Route path="*">
            <Error404/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
