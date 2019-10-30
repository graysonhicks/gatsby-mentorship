import React, { Component, useState, useEffect } from "react"

//es6
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

const PersonSpan = ({ firstName, lastName }) => {
  return (
    <span>
      {lastName} {firstName}
    </span>
  )
}

const FunctionalComponent = () => {
  // order tuple, array destructuring
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 1,
  })
  // object destructuring is by name

  return (
    <>
      <button onClick={() => setPerson({ ...person, lastName: "Diff" })}>
        Change!
      </button>
      <PersonSpan
        firstName={person.firstName}
        lastName={person.lastName}
      ></PersonSpan>
    </>
  )
}

export default FunctionalComponent

// export default Clock
