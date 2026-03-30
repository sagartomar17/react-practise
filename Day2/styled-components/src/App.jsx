import React from 'react'
import styled from 'styled-components'

const App = () => {

  // 1st method use

  // const Heading = styled.h1`
  // color:red;
  // border:1px solid green;
  // margin:20px;
  // padding: 20px;
  // width:100px
  
  // `
  // 2nd Method use
   const Heading = styled.h1({
    color: "red",
    borderRadius: "1px solid green",
    margin: "20px",
    padding: "20px",
    width: "100px"
   })

  const ParaBtn = styled.button`
  color:red;
  width:100px;

  
  
  `
  return (
    <div>
      <Heading>Hello </Heading>
      <Heading>Hello </Heading>
      <Heading>Hello </Heading>
      <Heading>Hello </Heading>
      <ParaBtn>Click Me</ParaBtn>
      <ParaBtn>Click Me</ParaBtn>
      <ParaBtn>Click Me</ParaBtn>
    </div>
  );
}

export default App
