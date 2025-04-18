import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (        
<table className={styles.transactionHistory}>
  <thead className={styles.theader}>
    <tr className={styles.row}>
      <th className={styles.type}>Type</th>
      <th className={styles.amount}>Amount</th>
      <th className={styles.currency}>Currency</th>
    </tr>
  </thead>

  <tbody className={styles.tbody}>
    {items.map(({ id, type, amount, currency }) => (
      <tr key={id} className={styles.row}>
        <td className={styles.type}>{type}</td>
        <td className={styles.amount}>{amount}</td>
        <td className={styles.currency}>{currency}</td>
      </tr>
    ))}
  </tbody>
</table>
 );
}
