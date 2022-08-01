import React from "react"
import styled from "styled-components"

const Error: React.FC = () => {
  return <Text>{`An error has occurred`}</Text>
}

const Text = styled.h2`
  text-align: center;
  font-size: 2rem;
  background-color: red;
`

export default Error
