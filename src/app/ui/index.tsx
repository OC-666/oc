import { useState, FC } from 'react'
import { Core } from './core'

export
const UI: FC = () => {
  const [started, set_started] = useState(false)

  return <div>
    <button onClick={() => set_started(true)}>start</button>
    <Core
      started={started} 
    />
  </div>
}
