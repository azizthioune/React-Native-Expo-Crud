import { makeApolloClient } from "@src/Config/Apollo";
import { useEffect, useState } from "react";

const useAppNavigator = () => {
  const [client, setClient] = useState(null);

  const fetchSession = async () => {
    const client = makeApolloClient();
    setClient(client);
  };

  useEffect(() => {
    fetchSession();
  }, []);

  return {
    client,
  };
};

export default useAppNavigator;
