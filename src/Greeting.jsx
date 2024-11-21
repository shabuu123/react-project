// function Greeting(){
//     return( 
//         <div>
//      <h1>clouds</h1>
//      <img src="src/images/Untitled.jpeg" alt="" />
//      </div>

// )
// }

// export default Greeting

// export default function Avatar() {
//     const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
//     const description = 'Gregorio Y. Zara';
//     return (
//       <img
//         className="avatar"
//         src={avatar}
//         alt={description}
//       />
//     );
//   }

//   export default function TodoList() {
//     const name = 'Gregorio Y. Zara';
//     return (
//       <h1>{name}'s To Do List</h1>
//     );
//   }
  
const person = {
    name: 'Gregorio Y. Zara',
    theme: {
    //   backgroundColor: 'black',
      color: 'black'
    }
  };
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
  

  