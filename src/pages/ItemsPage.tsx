import { useQuery } from "@tanstack/react-query"
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Search } from "../types"

const QueryKeys = {
  seachItems: "searchItems",
}

const ItemsPage: React.FC = () => {
  const { data } = useQuery<Search, Error | undefined>(
    [QueryKeys.seachItems],
    () =>
      fetch(
        `${process.env.REACT_APP_API_URL}/sites/MLA/search?q=Myth Cloth`
      ).then(res => res.json())
  )

  return (
    <List>
      {data?.results.map(item => (
        <ListItem key={item.id}>
          <ListItemLink to={`/item/${item.id}`}>
            <ListItemText>{item.title}</ListItemText>
          </ListItemLink>
        </ListItem>
      ))}
    </List>
  )
}

export default ItemsPage

const List = styled.ul`
  width: 100%;
`

const ListItem = styled.li`
  border-bottom: solid 1px blue;
`

const ListItemLink = styled(Link)`
  cursor: pointer;
  display: flex;
  font-size: 20px;
  padding: 10px;
`
const ListItemText = styled.span`
  display: inline-block;
  padding-right: 2em;
  margin-right: 25px;
  font-family: monospace;
`
