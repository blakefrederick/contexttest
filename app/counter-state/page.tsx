'use client'

import React from 'react'
import { useState } from 'react'

export default function CounterStateContainer() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h1>Using useState</h1>
      <Counter counter={counter} />
      <AddOneButton setCounter={setCounter} />
    </div>
  )
}

const AddOneButton = ({ setCounter }) => {
  return (
    <div>
      <button onClick={() => setCounter((c) => c + 1)}>Add One</button>
    </div>
  )
}

const Counter = ({ counter }) => {
  return (
    <div>
      <p>Count is {counter}</p>
    </div>
  )
}
