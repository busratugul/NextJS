import React from 'react'

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
async function Hakkimizda() {
    await delay(3000)
  return <div>Hakkimizda geldi</div>
}

export default Hakkimizda