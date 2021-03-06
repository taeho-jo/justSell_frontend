import React from "react";
import styled from "styled-components";
import LoginInputs from "../components/LoginInput/LoginInputs";
import Link from "next/link";
import Language from "../components/Language";
import { connect } from "react-redux";

const Login = ({ name }) => {
  return (
    <Div>
      <Language />
      <LoginBox>
        <ImageWrapperDiv>
          <Link href="/">
            <LogoImage />
          </Link>
          <LoginTitle>{name.title}</LoginTitle>
        </ImageWrapperDiv>
        <LoginInputs />
      </LoginBox>
    </Div>
  );
};

const mapStateToProps = state => {
  return { name: state.ChangeLanguage };
};

export default connect(mapStateToProps)(Login);

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-radius: 10px;
  background-color: #f2f7f7;
`;

const LoginBox = styled.div`
  width: 500px;
  height: 700px;
  background-color: #ffff;
  border-radius: 10px;
  box-shadow: 0px 15.13px 15.13px rgba(0, 63, 154, 0.1);
`;

const ImageWrapperDiv = styled.div`
  height: 172px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;
const LogoImage = styled.div`
  height: 60px;
  width: 150px;
  background-image: url("/assets/images/ui/color_logo.png");
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 150px 46px;
`;
const LoginTitle = styled.h1`
  font-size: 12px;
  text-align: center;
  color: #007add;
  font-weight: 900;
  margin-top: 5px;
`;
