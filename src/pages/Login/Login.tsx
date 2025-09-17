import AuthContainer from "../../components/AuthContainer/AuthContainer";
import LoginBox from "./LoginBox/LoginBox";

export default function Login() {
  return (
    <>
      <AuthContainer child={<LoginBox />} text={"Register"} />
    </>
  );
}
