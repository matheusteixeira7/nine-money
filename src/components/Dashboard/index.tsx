import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';

export const Dashboard = (): JSX.Element => {
  return (
    <>
      <Summary />
      <TransactionsTable />
    </>
  );
};
