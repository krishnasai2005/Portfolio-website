import React from "react"
import Typewriter from "typewriter-effect"

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Programmer", "Oracle developer", "problem solver"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
