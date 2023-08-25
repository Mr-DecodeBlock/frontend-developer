import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Http from '../helpers/http';
import { setSesionInfo } from '../store/slices/sesionSlice';

function Protected({ children }) {
  const token = useSelector((state) => state.sesion.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      const storedToken = localStorage.getItem('token');
      if (!storedToken) {
        redirectToSignIn();
        return;
      }

      const fetchData = async () => {
        try {
          let getUserData = await new Http().get('users', storedToken);

          if (getUserData?.error) {
            redirectToSignIn();
            return;
          }

          getUserData['token'] = storedToken;
          dispatch(setSesionInfo(getUserData));
        } catch (error) {
          console.log(error);
          redirectToHome();
        }
      };

      fetchData();
    }
  }, [token, dispatch]);

  const redirectToSignIn = () => {
    window.location.href = '/sign-in';
  };

  const redirectToHome = () => {
    window.location.href = '/';
  };

  if (!token) {
    return <div>Cargando...</div>;
  }

  return children;
}

export default Protected;