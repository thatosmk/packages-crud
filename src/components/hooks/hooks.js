import { useEffect, useState } from "react";

import { getPackage } from "../../backend";
import { differenceBetweenTimes } from "../helpers/helpers";

function useLoggedInStatus(initialToken, initialExpiry) {
  const [token, setToken] = useState(
    () => window.localStorage.getItem("token") || initialToken,
  );
  const [expiry, setExpiry] = useState(
    () => window.localStorage.getItem("expiry") || initialExpiry,
  );

  const isLoggedIn =
    token && differenceBetweenTimes(new Date(expiry), new Date()) < 8;

  useEffect(() => {
    window.localStorage.setItem("token", token);
    window.localStorage.setItem("expiry", expiry);
  }, [token, expiry]);

  return isLoggedIn;
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

export { useLoggedInStatus, useFetchPackage };
