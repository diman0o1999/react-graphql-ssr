import React, { useState } from 'react';
import { withApollo } from 'libs/apollo';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';

import { SignInClientType, SignInClientVariables } from 'src/types/api';

import Cookies from 'js-cookie';

const cookies = Cookies;

import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import Link from 'next/link';

import Auth, { Group } from 'src/components/Auth';
import Layout from 'src/Layouts';
import { SignIn } from 'gql/authSchema';
import { isCurrentUserVar, isLoggedInVar } from 'libs/cache';

const LoginPage = () => {
  const router = useRouter();
  // const currentUser = isCurrentUserVar();
  // const isLoggedIn = isLoggedInVar();

  const [auth, setAuth] = useState({ email: '', password: null });
  const [signInClient] = useMutation<SignInClientType, SignInClientVariables>(
    SignIn,
    {
      onCompleted(data) {
        console.log(data);
        // @ts-ignore
        const {
          signIn: { user, token },
        } = data;
        isCurrentUserVar({ ...user, token });
        isLoggedInVar(true);
        cookies.set('token', token);

        cookies.set('user', JSON.stringify(user));
        // cookies.set('fullName', user.fullName);
        router.push('/');
      },
      onError(e) {
        console.log('<<<<', e);
      },
    }
  );

  const onCheckbox = () => {
    // v will be true or false
  };
  // @ts-ignore
  return (
    <Layout title="Login">
      <Auth title="Авторизация" subTitle="Введите ваш email">
        <form>
          <InputGroup fullWidth>
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => {
                const email = event.target.value;
                // @ts-ignore
                setAuth({ ...auth, email });
              }}
            />
          </InputGroup>
          <InputGroup fullWidth>
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => {
                const password = event.target.value;
                // @ts-ignore
                setAuth({ ...auth, password });
              }}
            />
          </InputGroup>
          <Group>
            <Checkbox checked onChange={onCheckbox}>
              Запомнить пароль
            </Checkbox>
            {/*<Link href="/auth/request-password">*/}
            <Link href="/#">
              <a>Забыл пароль?</a>
            </Link>
          </Group>
          <Button
            status="Success"
            type="button"
            shape="SemiRound"
            fullWidth
            onClick={() =>
              signInClient({
                variables: {
                  email: auth.email,
                  // password: auth.password
                },
              })
            }
          >
            Login
          </Button>
        </form>
        {/*<Socials/>*/}
        <p>
          Нет аккаунта? {/*<Link href="/auth/register">*/}
          <Link href="/#">
            <a>Регистрация</a>
          </Link>
        </p>
      </Auth>
    </Layout>
  );
};
export default withApollo({ ssr: false })(LoginPage);
