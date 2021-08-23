import { Container } from './styles';

export const TransactionsTable = (): JSX.Element => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Salário</td>
            <td>R$ 15.000,00</td>
            <td>Trabalho</td>
            <td>05/10/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td>-R$ 5.000,00</td>
            <td>Casa</td>
            <td>15/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
