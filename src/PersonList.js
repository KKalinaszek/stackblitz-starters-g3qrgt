import React from 'react';

const Person = ({ id, name, age, city, email }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{city}</td>
      <td>{email}</td>
    </tr>
  );
};

const PersonList = ({ persons }) => {
  return (
    <div class="person">
      <h2>Person List</h2>
      <table></table>
      <th>Id</th>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
      <th>E-mail</th>
      {persons.map((person, id) => (
        <Person key={id} {...person} />
      ))}
    </div>
  );
};

export default PersonList;
