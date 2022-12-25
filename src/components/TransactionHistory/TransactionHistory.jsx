import PropTypes from 'prop-types';
import {Table, TableData, TableHeader, TableRow } from './TransactionHistory.styled'

export default function TransactionHistory({ items }) {
    return (
        <Table>
  <thead>
    <tr>
      <TableHeader>Type</TableHeader>
      <TableHeader>Amount</TableHeader>
      <TableHeader>Currency</TableHeader>
    </tr>
  </thead>

<tbody>
  {items.map(({ id, type, amount, currency }) => (
    <TableRow key={id}>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRow>
  ))}
  </tbody>
</Table>
    )
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};