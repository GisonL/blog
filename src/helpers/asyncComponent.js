// import React, { useEffect, useState } from 'react'
import React, { useEffect, useState } from 'react'
const asyncComponent = importComponent => {
  const AsyncComponent = () => {
    const [Component, setComponent] = useState(null)

    // const importFunc = async () => await importComponent()

    useEffect(async () => {
      const { default: Component } = await importComponent()
      setComponent(Component)
    }, [])

    return Component ? Component : 'loading'
  }

  return AsyncComponent
}

export default asyncComponent
