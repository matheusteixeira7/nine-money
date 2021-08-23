import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container, Content } from './styles';

export const Summary = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <div>
          <header>
            <span>Entradas</span>
            <img src={incomeImg} alt="Entradas" />
          </header>
          <strong>R$ 15.000,00</strong>
        </div>
        <div>
          <header>
            <span>Saídas</span>
            <img src={outcomeImg} alt="Saídas" />
          </header>
          <strong>- R$ 5.000,00</strong>
        </div>
        <div>
          <header>
            <span>Total</span>
            <img src={totalImg} alt="Total" />
          </header>
          <strong>R$ 10.000,00</strong>
        </div>
      </Content>
    </Container>
  );
};
