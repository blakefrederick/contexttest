'use client'

import React from 'react'
import { useReducer, createContext, useContext } from 'react'

const CounterContext = createContext(null)

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'random':
      return (
        state +
        (Math.random() < 0.95
          ? Math.floor(Math.random() * 100) + 1
          : Math.random() < 0.99
          ? Math.floor(Math.random() * 1000) + 1
          : Math.floor(Math.random() * 10000) + 1)
      )
    case 'set':
      return state + action.payload
    case 'reset':
      return 0
    default:
      throw state
  }
}

const CounterContextProvider = ({ children }) => (
  <CounterContext.Provider value={useReducer(reducer, 0)}>
    {children}
  </CounterContext.Provider>
)

const Container = () => (
  <>
    <Buttons />
  </>
)

function CounterContextState() {
  return (
    <CounterContextProvider>
      <div className="context-container">
        <Container />
        <Counter />
      </div>
    </CounterContextProvider>
  )
}

const Buttons = () => {
  const [, dispatch] = useContext(CounterContext)
  return (
    <>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'random' })}>+Random</button>
      <button onClick={() => dispatch({ type: 'set', payload: 100 })}>
        +100
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  )
}

const Counter = () => {
  const [counter] = useContext(CounterContext)

  return (
    <>
      <p>
        Count is <span className="counter counter-rainbow">{counter}</span>
      </p>
    </>
  )
}

export default function CounterContextStatePage() {
  return (
    <>
      <h1>Why not checkout all these counters</h1>
      <CounterContextState />
      <CounterContextState />
      <CounterContextState />
      <CounterContextState />
      <CounterContextState />
    </>
  )
}
