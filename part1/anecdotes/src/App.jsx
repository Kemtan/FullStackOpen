import { useState } from 'react'

const Display = ({text}) => <h1>{text}</h1>
const DisplayText = ({text}) => <div>{text}</div>
const DisplayVote = ({vote}) => <div>has {vote} votes</div>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const maxVotes = Math.max(...vote)
  const maxIndex = vote.indexOf(maxVotes)


  const handleNextClick = () => {
    let random = Math.floor(Math.random() * anecdotes.length)
    console.log(random)
    setSelected(random)
  }

const handleVoteClick = () => {
  const copy = [...vote]
  copy[selected] += 1
  setVote(copy)
}


  return (
    <div>
      <Display text='Anecdote of the day'/>
      <DisplayText text={anecdotes[selected]}/>
      <DisplayVote vote={vote[selected]}/>
      <Button onClick={handleVoteClick} text='vote'/>
      <Button onClick={handleNextClick} text='next anecdote'/>
      <Display text='Anecdote with most votes'/>
      <DisplayText text={anecdotes[maxIndex]}/>
      <DisplayVote vote={vote[maxIndex]}/>
    </div>
  )
}

export default App