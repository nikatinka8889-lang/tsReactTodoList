import styled from "styled-components";

export const TodoContainer = styled.div`
  width: 100%;
  padding: 15px;
`;

export const TodoList = styled.ul<{ variant: "active" | "completed" }>`
  width: 100%;
  margin: 20px 0;
  padding-left: 0;
  list-style: none;

  position: relative;

  ${(props) =>
    props.variant === "completed" &&
    `
      padding-top: 60px;

      &::before {
        content: '';
        width: 150px;
        height: 1px;
        background: #d8e5e0;

        position: absolute;
        top: 25px;
        left: calc(50% - 75px);
      }
    `}

  &:empty::after {
    content: '${(props) =>
      props.variant === "active"
        ? "Нет задач на выполнение"
        : "Нет выполненных задач"}';
    
    width: 100%;
    display: block;
    text-align: center;
    font-size: 12px;
    color: #aaa;
  }
`;