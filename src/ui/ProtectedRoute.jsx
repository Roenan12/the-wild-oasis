import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Fullpage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. Load the authenticated user
  const { isPending, isAuthenticated } = useUser();

  // 2. if there is No authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate("/login");
    },
    [isAuthenticated, isPending, navigate]
  );

  // 3. While loading, show a spinner
  if (isPending)
    return (
      <Fullpage>
        <Spinner />
      </Fullpage>
    );

  //4. IF there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
