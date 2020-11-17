import React from "react";
import styled from "styled-components";
import Link from "next/link";

type Props = {
  color: string;
  content: string;
  link: string;
};

export default function Button({ color, content, link }: Props) {
  return (
    <Link href={link}>
      <TheButton color={color}>
        {content}
        <Arrow width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M0 5h7"></path>
          <path d="M1 1l4 4-4 4"></path>
        </Arrow>
      </TheButton>
    </Link>
  );
}

//styles

const TheButton = styled.button<{ color: string }>`
  color: ${({ color }) => color};
  border: none;
  border-radius: 25px;
  padding: 8px 14px;
  font-size: 0.95rem;
  cursor: pointer;
  opacity: 1;
  text-align: center;
  background-color: white;
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    opacity: 0.6;
  }
`;

const Arrow = styled.svg`
  position: relative;
  top: 1px;
  margin-left: 8px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  path:first-child {
    opacity: 0;
  }
  path:nth-child(2) {
    transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  ${TheButton}:hover & {
    path:first-child {
      opacity: 1;
    }
    path:nth-child(2) {
      transform: translateX(3px);
    }
  }
`;
