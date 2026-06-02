import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionTable}>
      <thead className={styles.transactionHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.transactionBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={styles.transactionType}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionHistory
