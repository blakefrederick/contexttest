'use client'

import React from 'react'
import { useState, createContext, useContext } from 'react'

const CounterContext = createContext(null)

const CounterContextProvider = ({ children }) => (
  <CounterContext.Provider value={useState(0)}>
    {children}
  </CounterContext.Provider>
)

const Container = () => (
  <div>
    <AddOneButton />
  </div>
)

function CounterContextState() {
  return (
    <CounterContextProvider>
      <Container />
      <Counter />
    </CounterContextProvider>
  )
}

const AddOneButton = () => {
  const [, setCounter] = useContext(CounterContext)
  return (
    <div>
      <button onClick={() => setCounter((c) => c + 1)}>Add One</button>
    </div>
  )
}

const Counter = () => {
  const [counter] = useContext(CounterContext)

  return (
    <div>
      <p>
        Count is <span className="counter counter-rainbow">{counter}</span>
      </p>
    </div>
  )
}

export default function CounterContextStatePage() {
  return (
    <>
      <h1>Many Contexts</h1>
      <CounterContextState />
      <CounterContextState />
      <CounterContextState />
      <CounterContextState />
      <CounterContextState />
    </>
  )
}
