import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  margin: -6.5rem auto;
  max-width: 1120px;
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
