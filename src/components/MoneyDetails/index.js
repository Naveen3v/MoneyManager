// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="mdcontainer">
      <div className="balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balanceimg"
        />
        <div className="balancetext">
          <p className="balancepara">Your Balance</p>
          <p className="balanceamount" id="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balanceimg"
        />
        <div className="balancetext">
          <p className="balancepara">Your Income</p>
          <p className="balanceamount" id="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balanceimg"
        />
        <div className="balancetext">
          <p className="balancepara">Your Expenses</p>
          <p className="balanceamount" id="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
