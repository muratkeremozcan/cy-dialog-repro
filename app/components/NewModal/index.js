"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledDialog = styled.dialog`
  border: 1px solid #e0e2e2;
  border-radius: 2px;
  padding: 0;

  width: 100vw;
  @media (min-width: 25rem) {
    width: 75vw;
    max-width: 839px;
    min-width: 25rem;
  }

  &::backdrop {
    backdrop-filter: blur(2px);
    background-color: #f7f8f899;
  }

  footer {
    border-top: 1px solid #e0e2e2;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    padding: 1rem;
  }

  header {
    border-bottom: 1px solid #e0e2e2;
    display: flex;
    flex-direction: row;
    padding: 1rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .vert-label {
    display: flex;
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const NewModal = ({ children, footer, header, onClose }) => {
  const dlgRef = useRef(null);

  useEffect(() => {
    dlgRef.current.showModal?.();
  }, [dlgRef]);

  return (
    <StyledDialog ref={dlgRef}>
      <header>{header}</header>
      <div className="content">{children}</div>
      <footer>{footer}</footer>
    </StyledDialog>
  );
};

export default NewModal;
