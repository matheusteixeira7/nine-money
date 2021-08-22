import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
  height: 13.25rem;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  padding: 2rem;

  button {
    background: var(--blue-light);
    border-radius: 0.25rem;
    border: none;
    color: white;
    height: 3rem;
    padding: 0 2rem;
    transition: filter 200ms ease;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
