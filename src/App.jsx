import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./components/context/AuthContext";
import Home from "./components/Home";
import Login from "./components/login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path='/' exact component={Login} />
            <ProtectedRoute path='/home' component={Home} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
