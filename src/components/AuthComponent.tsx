import { useRouter } from "next/router";
import React from "react";

const AuthComponent = (Component: React.FC) => {
  const ProtectedPage = (props: any) => {
    const route = useRouter();
    const [token, setToken] = React.useState("");

    React.useEffect(() => {
      const access = localStorage.getItem("AUTH_TOKEN");
      if (!access) {
        route.push("/login");
      }
      setToken(access as string);
    }, []);
    return <Component {...props} token={token} />;
  };
  return ProtectedPage;
};

export default AuthComponent;
