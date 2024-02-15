import React from "react";
import Logo from "../Logo/Logo";
import "./Auth.css";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";

interface AuthProps {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
const Auth: React.FC<AuthProps> = ({ setShowPopup }) => {
  const [showSignup, setShowSignup] = React.useState<boolean>(true);
  const handleSignup = () => {};
  const handleLogin = () => {};
  return (
    <div className="login-container">
      <Button
        onClick={() => setShowPopup(false)}
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          backgroundColor: "green",
        }}
      >
        <AiOutlineClose />
      </Button>
      <div className="login-background">
        <Logo />
        {showSignup ? (
          <div>
            <form className="auth-form">
              <Input
                color="success"
                placeholder="Email"
                size="lg"
                variant="outlined"
              />
              <Input
                color="success"
                placeholder="Password"
                size="lg"
                variant="outlined"
                type="password"
              />
              <Input
                color="success"
                placeholder="Confirm Password"
                size="lg"
                variant="outlined"
                type="password"
              />
              <Input
                color="success"
                placeholder="Age"
                size="lg"
                variant="outlined"
              />
              <Input
                color="success"
                placeholder="Weight"
                size="lg"
                variant="outlined"
              />
              <Select color="success" placeholder="Select Gender" size="lg">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
              <span id="height-selector">
                <Input
                  color="success"
                  placeholder="Height"
                  size="lg"
                  variant="outlined"
                  type="number"
                />
                <Select
                  color="success"
                  placeholder="select your gender"
                  size="lg"
                >
                  <Option value="ft">Ft</Option>
                  <Option value="inch">Inches</Option>
                </Select>
              </span>

              <Button
                color="success"
                onClick={function () {}}
                size="lg"
                variant="solid"
                style={{ width: "45%" }}
              >
                SIGN UP
              </Button>
              <p>
                Already signup, go to login page
                <Button
                  color="success"
                  onClick={function () {
                    setShowSignup(false);
                  }}
                  size="md"
                  variant="outlined"
                  style={{ width: "40%" }}
                >
                  LOGIN
                </Button>
              </p>
            </form>
          </div>
        ) : (
          <div>
            <form className="auth-form">
              <Input
                color="success"
                placeholder="Enter your email"
                size="lg"
                variant="outlined"
              />
              <Input
                color="success"
                placeholder="Enter your password"
                size="lg"
                variant="outlined"
                type="password"
              />
              <Button
                color="success"
                onClick={function () {}}
                size="lg"
                variant="solid"
                style={{ width: "50px" }}
              >
                Login
              </Button>
              <p>
                Don't have an account?{" "}
                <Button
                  color="success"
                  onClick={function () {
                    setShowSignup(true);
                  }}
                  size="md"
                  variant="outlined"
                >
                  Sign Up
                </Button>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
