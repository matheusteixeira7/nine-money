import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export const Header = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Company logo" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
};
