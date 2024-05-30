import { useEffect } from "react";
import { redirect } from "react-router-dom";

import LoginForm from "../components/LoginForm/LoginForm";
import { useLoggedInStatus } from "../hooks/hooks";
import { token, expiry } from "../helpers/helpers";

const Home = () => {
  const { isLoggedIn } = useLoggedInStatus(token, expiry);

  return (
    <div className="container mx-auto py-10 sm:py-20">
      <LoginForm />
    </div>
  );
};

export default Home;
