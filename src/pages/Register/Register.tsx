import AuthContainer from "../../components/AuthContainer/AuthContainer";
import RegisterBox from "./RegisterBox/RegisterBox";

function Register() {
  return (
    <>
      <AuthContainer url="/login" text="Log in" child={<RegisterBox />} />
    </>
  );
}

export default Register;
