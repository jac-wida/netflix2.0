import { Route, BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Signup, Signin, Browse } from "./pages";
function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
        <Route exact path='/signin'>
          <Signin />
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          <Signup />
        </Route>
        <Route exact path={ROUTES.BROWSE}>
          <Browse />
        </Route>
      </Route>
    </Router>
  );
}

export default App;
