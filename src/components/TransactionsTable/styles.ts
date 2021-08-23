import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  padding: 0 1rem;

  table {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    border-spacing: 0 0.5rem;
    padding: 0 2rem;

    th,
    td {
      padding: 1rem;
      border-radius: 0.25rem;
    }

    th {
      text-align: left;
    }

    td {
      background: var(--shape);
    }
  }
`;
