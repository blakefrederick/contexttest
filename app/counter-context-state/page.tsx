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

export default function CounterContextState() {
  return (
    <CounterContextProvider>
      <h1>Context & State</h1>
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
      <p>Count is {counter}</p>
    </div>
  )
}
