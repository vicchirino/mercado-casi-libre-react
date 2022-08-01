import { useQuery } from "@tanstack/react-query"
import React from "react"
import { useParams } from "react-router-dom"
import { Item } from "../types"
import styled from "styled-components"

const QueryKeys = {
  Item: "/item",
}

const ItemPage: React.FC = () => {
  const { id } = useParams()
  console.log("ID,", id)

  const { data } = useQuery<Item, Error | undefined>(
    [QueryKeys.Item, id],
    () => {
      return fetch(`${process.env.REACT_APP_API_URL}/items/${id}`).then(res => {
        return res.json()
      })
    }
  )

  return (
    <Container>
      <Title>{data?.title}</Title>
      <Price>{data?.price}</Price>
    </Container>
  )
}

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  background-color: pink;
`

const Price = styled.h2`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  font-weight: 2;
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 25px;
  margin: 0;
`

export default ItemPage
