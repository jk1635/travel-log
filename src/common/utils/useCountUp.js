import { useState, useEffect, useRef } from 'react'

function easeOut(x) {
  return 1 - Math.pow(1 - x, 100)
}

const useCountUp = (start, end, duration) => {
  const [count, setCount] = useState(start)
  const percentRef = useRef(0)
  const timeIdRef = useRef(null)

  useEffect(() => {
    timeIdRef.current = setInterval(() => {
      percentRef.current += 0.00075 / duration
      setCount((prevCount) => {
        if (prevCount >= end) {
          clearInterval(timeIdRef.current)
          return prevCount
        }
        return Math.round(end * easeOut(percentRef.current))
      })
    }, 10)
  }, [start, end, duration])

  return count
}

export default useCountUp