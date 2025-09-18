import AuthContainer from "../../components/AuthContainer/AuthContainer";
import RegisterBox from "./RegisterBox/RegisterBox";

function Register() {
  return (
    <>
      <AuthContainer text="Log in" child={<RegisterBox />} />
    </>
  );
}

export default Register;
