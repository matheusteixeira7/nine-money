import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
`;

export const Content = styled.div`
  display: grid;
  margin-top: -6.5rem;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem;

  div {
    background: var(--shape);
    border-radius: 0.25rem;
    padding: 1rem 2rem;

    :last-child {
      background: var(--green);
      color: white;

      strong {
        color: white;
      }
    }

    strong {
      color: var(--text-title);
      display: inline-block;
      font-size: 2rem;
      font-weight: 500;
      margin-top: 2rem;
    }
  }

  header {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;
