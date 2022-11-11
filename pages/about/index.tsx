import { useEffect, useState } from 'react'

export default function About({ now } : any) {
  let [number, changerNumber] = useState(1)
  let [number1, changerNumber1] = useState(0)

  useEffect(() => {
    if (number % 3 === 0) {
      number1 += 1 
      changerNumber1(number1)
    }
  }, [number])
  return (
    <>
      <div>SSG: {number}</div>
      <p>{number1}</p>
      <span>{ now ?now:'不存在'}</span>
      <button
        onClick={() => {
          changerNumber((number += 1))
        }}
      >
        加1
      </button>
    </>
  )
}

// export async function getServerSideProps() { //ssg不能用 ssr可以用
//   const now = new Date().toLocaleTimeString()
//   const res = await fetch(`https://postman-echo.com/get?now=${now}`)
//   const obj = await res.json()
//   return {
//     props: {
//       now: obj.args.now,
//     },
//   }
// }
