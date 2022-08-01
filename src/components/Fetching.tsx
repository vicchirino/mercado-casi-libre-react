import React from "react"
import styled from "styled-components"

const Fetching: React.FC = () => {
  return <Text>Fetching results...</Text>
}

const Text = styled.h2`
  text-align: center;
  position: relative;
  font-size: 2em;
  margin: 30px auto;
  color: #444;
  font-weight: inherit;
`

export default Fetching
