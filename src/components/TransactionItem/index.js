// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, idDeleted} = props
  const {id, title, amount, activeOptionId} = details

  const deleteId = () => {
    idDeleted(id)
  }

  return (
    <li className="tiitem">
      <p className="tipara">{title}</p>
      <p className="tipara">Rs {amount}</p>
      <p className="tipara">{activeOptionId}</p>
      <button type="button" className="tibtn" onClick={deleteId}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="tiimg"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
