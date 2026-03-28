import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListItemLink = styled(Link)<{ isDone: boolean }>`
  text-decoration: none;
  padding: 10px;

  color: ${(props) => (props.isDone ? "green" : "red")};
`;