// src/hoc/withAuth.js

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);

    const isVerified = useSelector((state) => state.auth?.isVerified);


    useEffect(() => {
      if (!isAuthenticated || !isVerified) {
        Router.replace('/404');
      }
    }, [isAuthenticated, isVerified, Router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
