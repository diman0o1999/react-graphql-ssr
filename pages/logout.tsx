import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { withApollo } from 'libs/apollo';

import Cookies from 'js-cookie';
const cookies = Cookies;

import { isCurrentUserVar, isLoggedInVar } from '../libs/cache';

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    isCurrentUserVar(null);

    isLoggedInVar(false);
    cookies.remove('token');
    router.push('/');
  }),
    [];
  return <div />;
};

export default withApollo({ ssr: false })(LogoutPage);
