import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes(props) {
  const { component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    // if not auhtenticated return to RegistrationPage
    let auth = localStorage.getItem("token");
    if (!auth) {
      navigate("/reg");
    }
  }, []);

  //   else return Home component
  return component;
}
export default ProtectedRoutes;
