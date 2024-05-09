import { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navigation() {
  // const navigate = useNavigate();
  const router = useRouter();
  const { auth, setAuth } = useContext(AuthContext);

  function logout() {
    localStorage.removeItem('accessToken');
    setAuth(null);
    router.push("/login");
  }

  return ''

  if (!auth) {
    return (
      <ul>
        <li>
          <Link href="/login"> Login </Link>
        </li>
        <li>
          <Link href="/register"> Register </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul>
      <li>
        <Link href="/"> Home </Link>
      </li>
      <li>
        <Link href="/create-movie"> Create Movie </Link>
      </li>
      <li>
        <span onClick={logout}>Logout</span>
      </li>
    </ul>
  );
}
