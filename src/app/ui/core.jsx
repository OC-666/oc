import { useEffect, useRef } from 'react'
import { Nostalgist } from 'nostalgist'
import { useState } from 'react'

export
const Core = ({ started }) => {
  const ref = useRef()
  const [game, set_game] = useState()

  useEffect(() => {
    if (!started) return
    if (!ref.current) throw Error('no canvas ref?')

    console.log('launching nes')
    start(ref.current, set_game)

    return () => {
      if (!game) throw Error('no game instance?')

      console.log('game exiting')
      game.exit()
    }
  }, [started])
  return <canvas
    ref={ref}
    width={200}
    height={150}
  />
}

async function start(el) {
  try {
    await Nostalgist.launch({
      core: 'fceumm',
      rom: 'http://localhost:5173/roms/nes/demo.nes',
      element: el,
    })
  } catch(err) {
    console.error('error on launching nes', err)
  }
}