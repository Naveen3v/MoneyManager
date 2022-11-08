import './index.css'
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    activeOptionId: transactionTypeOptions[0].optionId,
    moneyList: [],
    balance: 0,
    income: 0,
    expenses: 0,
  }

  idDeleted = id => {
    const {moneyList} = this.state
    const filterList = moneyList.filter(each => each.id !== id)
    this.setState({moneyList: filterList})
  }

  addList = event => {
    event.preventDefault()
    const {title, amount, activeOptionId, moneyList} = this.state
    const newItem = {id: uuidv4(), title, amount, activeOptionId}
    this.setState(prevState => ({
      moneyList: [...prevState.moneyList, newItem],
      title: '',
      amount: '',
      balance: prevState.balance + parseInt(amount),
      income: prevState.income + parseInt(amount),
      expenses: prevState.expenses + prevState.balance - prevState.income,
    }))
  }

  changeSort = event => {
    this.setState({activeOptionId: event.target.value})
  }

  changeTitle = event => {
    this.setState({title: event.target.value})
  }

  changeAmount = event => {
    this.setState({amount: event.target.value})
  }

  render() {
    const {
      title,
      amount,
      activeOptionId,
      moneyList,
      balance,
      income,
      expenses,
    } = this.state
    return (
      <div className="container">
        <div className="cardcontainer">
          <h1 className="cardheading">Hi, Naveen</h1>
          <p className="cardpara">
            Welcome back to your <span className="cardspan">Money Manager</span>
          </p>
        </div>
        <MoneyDetails balance={balance} income={income} expenses={expenses} />
        <div className="thirdcont">
          <form className="formcont" onSubmit={this.addList}>
            <h1 className="formheading">Add Transaction</h1>
            <label htmlFor="title" className="title">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              placeholder="TITLE"
              value={title}
              className="input"
              onChange={this.changeTitle}
            />
            <label htmlFor="amount" className="title">
              AMOUNT
            </label>
            <input
              className="input"
              type="text"
              id="amount"
              placeholder="AMOUNT"
              value={amount}
              onChange={this.changeAmount}
            />
            <label htmlFor="select" className="title">
              TYPE
            </label>
            <select
              value={activeOptionId}
              id="select"
              className="input"
              onChange={this.changeSort}
            >
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="formbtn">
              Add
            </button>
          </form>
          <div className="historycont">
            <h1 className="hisheading">History</h1>
            <div className="inner">
              <div className="itemcontainer">
                <p className="histitle">Title</p>
                <p className="histitle">Amount</p>
                <p className="histitle">Type</p>
              </div>
              <ul className="hislistcont">
                {moneyList.map(each => (
                  <TransactionItem
                    details={each}
                    key={each.id}
                    idDeleted={this.idDeleted}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
