import React from 'react';
import './App.css';

const Person = (props) => {

  const {img, name, job} = props.person;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
      </div>
    </div>)
}

const PersonList = () => {

  const people = [
    { img: 22, name: "ashu", job: "Dev" },
    { img: 34, name: "abhi", job: "Student" },
    { img: 56, name: "saurabh", job: "Dev" }
  ]

  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]} />
      <Person person={people[2]} />
    </section>
  )
}

const App = () => (<PersonList />)

export default App;