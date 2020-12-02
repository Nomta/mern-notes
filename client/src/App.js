import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes';
import {AuthContext} from './context/AuthContext';
import {useAuth} from './hooks/auth.hook'
import 'materialize-css';

function App() {
  const authContextData = useAuth()
  const isAuth = Boolean(authContextData.token)
  const routes = useRoutes(isAuth);

  return (
    <AuthContext.Provider value={{...authContextData, isAuth}} >
      <Router>
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
