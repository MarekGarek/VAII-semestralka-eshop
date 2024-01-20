import Router from './components/Router';
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import AuthContext from './AuthProvider'

function App() {
  const {auth, setAuth} = useContext(AuthContext);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    console.log('useEffect is running');
    axios.get('/isLogged')
    .then(res => {
        if (res.data.valid) {
            console.log(res);
            setAuth(prevState => ({
                ...prevState,
                login: res.data.user.login,
                isLoged: true,
                isAdmin: res.data.user.isAdmin
            }));
            console.log(auth);
        }
     })
     .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Router/>
    </div>
  );
}

export default App;
