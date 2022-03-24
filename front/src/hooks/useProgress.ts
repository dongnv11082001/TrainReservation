import { useEffect, useState } from 'react'

export const useProgress = (stages: number) => {
  const [buttonProgress, setButtonProgress] = useState('')

  useEffect(() => {
    if (stages >= 0) {
      setButtonProgress('Shipping')
    }

    if (stages === 1) {
      setButtonProgress('Payment')
    }

    if (stages === 2) {
      setButtonProgress('Submit')
    }

    if (stages === 3) {
      setButtonProgress('')
    }
  }, [stages])

  return { buttonProgress }
}
