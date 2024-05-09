import { useEffect, useState } from "react";
import { register } from "../../libs/auth";
import { useRouter } from "next/navigation";

import { useForm } from "../../hooks/form-hook";

export default function Register() {
  const emailProps = useForm("email", "email");
  const usernameProps = useForm("text", "username");
  const passwordProps = useForm("password", "password");
  const confirmPasswordProps = useForm("password", "confirmPassword");

  const [passwordError, setPasswordError] = useState();

  const router = useRouter();

  useEffect(() => {
    const min8CharsSpecialCharacterOneLetterOneNumber =
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

    if (!passwordProps.value?.match(min8CharsSpecialCharacterOneLetterOneNumber)) {
      setPasswordError(
        `The password must contain at least 8 characters, one special character, one letter and one number`
      );
      return;
    }

    if (passwordProps.value !== confirmPasswordProps.value) {
      setPasswordError(`Your passwords don't match`);

      return;
    }

    setPasswordError(null);
  }, [passwordProps.value, confirmPasswordProps.value]);

  function registerUser(event) {
    event.preventDefault();

    if (passwordError) {
      return;
    }

    const user = {
      email: emailProps.value,
      username: usernameProps.value,
      password: passwordProps.value,
    };

    register(user).then(() => router.push("/register"));
  }

  return (
    <form onSubmit={registerUser}>
      <fieldset>
        <label htmlFor="email">Email: </label>
        <input {...emailProps} required />
      </fieldset>

      <fieldset>
        <label htmlFor="username">Username: </label>
        <input {...usernameProps} required />
      </fieldset>

      <fieldset>
        <label htmlFor="password">Password: </label>
        <input {...passwordProps} required />
      </fieldset>

      <fieldset>
        <label htmlFor="confirmPassword">Confirm password: </label>
        <input {...confirmPasswordProps} required />
      </fieldset>

      <p className="red">{passwordError}</p>

      <button>Register</button>
    </form>
  );
}
