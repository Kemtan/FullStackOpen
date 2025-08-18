import { useState } from 'react'

const Display = ({text}) => <h1>{text}</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const DisplayBtn = (props) => {
  return (
    <div>
      <Button onClick={props.goodClick} text='good'/>
      <Button onClick={props.neutralClick} text='neutral'/>
      <Button onClick={props.badClick} text='bad'/>
    </div>
  )
}

const Statistics = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>
const DisplayStats = (props) => {
  if (props.total === 0){
    return (
      <div>no feedback given</div>
    )
  }

  return (
    <table>
      <tbody>
        <Statistics text='good' value={props.good}/>
        <Statistics text='neutral' value={props.neutral}/>
        <Statistics text='bad' value={props.bad}/>
        <Statistics text='total' value={props.total}/>
        <Statistics text='average' value={props.average}/>
        <Statistics text='positive' value={props.positive}/>
      </tbody>
    </table>
  )
}

const App = () => {
  const title = 'give feedback'

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const updatedTotal = updatedGood + neutral + bad
    setTotal(updatedTotal)
    setAverage((updatedGood + bad*(-1)) / updatedTotal)
    setPositive((updatedGood / updatedTotal) * 100)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const updatedTotal = good + updatedNeutral + bad
    setTotal(updatedTotal)
    setAverage((good + bad*(-1)) / updatedTotal)
    setPositive((good / updatedTotal) * 100)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedTotal = good + neutral + updatedBad
    setTotal(updatedTotal)
    setAverage((good + updatedBad*(-1)) / updatedTotal)
    setPositive((good / updatedTotal) * 100)
  }

  return (
    <div>
      <Display text={title}/>
      <DisplayBtn goodClick={handleGoodClick} neutralClick={handleNeutralClick} badClick={handleBadClick}/>
      <Display text='statistics'/>
      <DisplayStats good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>
    </div>
  )
}

export default App