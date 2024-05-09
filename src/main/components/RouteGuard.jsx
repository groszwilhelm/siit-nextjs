import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function RouteGuard({ neededRole, children }) {
  const { user: { roles } } = useContext(UserContext);
  // Role that can access the route

  if (roles?.includes(neededRole)) {
    return (
      <>
        { children }
      </>
    )
  } else {
    return <h3>You dont have the needed role to access this part of the application! </h3>
  }
}
