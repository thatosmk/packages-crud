import { useEffect, useState } from "react";

import { getPackage, signIn } from "../backend";
import { tokenStillValid } from "../helpers/helpers";

function useLoggedInStatus(initialToken, initialExpiry) {
  const [token, setToken] = useState(initialToken);
  const [expiry, setExpiry] = useState(initialExpiry);

  const isLoggedIn = token && tokenStillValid(new Date(expiry));

  useEffect(() => {
    if (token && expiry) {
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("expiry", expiry);
    }
  }, [token, expiry]);

  return [isLoggedIn, setToken, setExpiry];
}

function useFetchPackage({ packageId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await getPackage({ id: packageId });
        setLoading(true);
        setData(response.package);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
  }, [packageId]);

  return { data, loading, error };
}

function useSignIn({ email, password }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setToken, setExpiry] = useLoggedInStatus();

  useEffect(() => {
    const signInUser = async () => {
      try {
        const response = await signIn({ email, password });
        setLoading(true);
        setToken(response.token);
        setExpiry(response.expiry);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    signInUser();
  }, [email, password]);

  return { isLoggedIn, loading, error };
}

export { useLoggedInStatus, useFetchPackage, useSignIn };
