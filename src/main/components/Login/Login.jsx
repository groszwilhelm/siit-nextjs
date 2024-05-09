import { login } from '../../libs/auth';
import { useContext, useState } from 'react';
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState();

  const { setAuth } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);

  function loginUser(event) {
    event.preventDefault();
    const formElement = event.target;

    const { emailElement, passwordElement } = formElement;
    const credentials = {
      email: emailElement.value,
      password: passwordElement.value,
    }

    login(credentials)
      .then((response) => {
        const { accessToken, user } = response.data;

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem("user", JSON.stringify(user));
        setAuth(accessToken);
        setUser(user);
       router.push("/");
      })
      .catch(({ response }) => {
        if (response.status === 400) {
          setError('Email or password are incorrect');
        }

        if (String(response.status).includes(5)) {
          setError('Service unavailable, please try again later');
        }
      });
  }

  return (
    <form onSubmit={loginUser}>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="emailElement" />
      </fieldset>

      <fieldset>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="passwordElement" />
      </fieldset>

      <button>Login</button>

      <p className="red">{error}</p>
    </form>
  );
}
