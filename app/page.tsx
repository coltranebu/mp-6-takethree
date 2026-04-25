"use client";

import styled from "styled-components";
import { handleSignIn, handleSignOut } from "@/components/SignIn";
import { useSession } from 'next-auth/react';

const StyledMain = styled.main`
  background-color: #eeeeee;
  text-align: center;
`

const StyledButton = styled.button`
  background-color: #5555ff;
  color: white;
  font-size: 3vh;
  padding: 1vh;
  cursor: pointer;
  border: 2px solid white;
  border-radius: 1vh;
`

const CenterDiv = styled.div`
  margin: 20vh 0
`

const StyledH2 = styled.div`
  font-family: sans-serif;
  font-size: 5vh;
`

const StyledH3 = styled.div`
  font-family: sans-serif;
  font-size: 3vh;
`

const StyledImg = styled.img`
  height: 20vh;
`

export default function Home() {
  const {data} = useSession();
 
  return (
    <StyledMain>
      
      {data && data.user ? (
        <CenterDiv>
          <StyledImg src="https://cdn.thegreatprojects.com/thegreatprojects/images/f/3/6/9/7/f369758da04e040151acc19bf7a552cb.png?width=364&height=364&format=png" referrerPolicy="no-referrer" alt="Profile Picture" />
          {/* "referrerPolicy" solved an issue with the image not rendering.
              I found out about it via https://stackoverflow.com/questions/73052741/google-profile-picture-not-rendering. */}
          <StyledH2>{data.user.name}</StyledH2>
          <StyledH3>{data.user.email}</StyledH3>
        </CenterDiv>
      ) : (
        <CenterDiv>
          <StyledButton onClick={handleSignIn}>Sign in with Google</StyledButton>
        </CenterDiv>
      )}
      
          
    </StyledMain>
  );
}
