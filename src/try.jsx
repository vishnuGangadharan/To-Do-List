// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [toDos, setToDos] = useState([]);
//   const [toDo, setToDo] = useState('');

//   const currentDate = new Date();
//   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   const currentDayIndex = currentDate.getDay();
//   const currentDay = daysOfWeek[currentDayIndex]; 
  
  
//   const deleteToDo=(id)=>{
//     const deleteUpdateOnToDo = toDos.filter((item)=>
//     item.id !== id )
//  setToDos(deleteUpdateOnToDo)
//  }


//   const handleCheckboxChange = (id) => {
//     const updatedToDos = toDos.map((item) =>
//       item.id === id ? { ...item, status: !item.status } : item
//     );
//     setToDos(updatedToDos);

//     console.log(updatedToDos);
//   };

//   const handleAddToDo = () => {
//     console.log("Value of toDo:", toDo);
//     if (toDo.trim() !== '') { // Check if input is not empty or whitespace
//       setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
//       setToDo(''); // Clear the input space
//     }
//   };

//   return (
//     <div className="app">
//       <div className="mainHeading">
//         <h1>ToDo List</h1>
//       </div>
//       <div className="subHeading">
//         <br />
//         <h2>Whoop, it's {currentDay} 📝✒️ </h2>
//       </div>
//       <div className="input">
//         <input value={toDo} 
//           onChange={(evnt) => setToDo(evnt.target.value)}
//           type="text"
//           placeholder="🖊️ Add item..."
//         />
//         <i
//           onClick={handleAddToDo}
//           className="fas fa-plus"
//         ></i>
//       </div>
//       <div className="todos">
//         {toDos.map((obj) => (
//           <div key={obj.id} className="todo">
//             <div className="left">
//               <input
//                 onChange={() => handleCheckboxChange(obj.id)}
//                 type="checkbox"
//                 checked={obj.status}
//               />
//               <p className={obj.status ?'completed':''}>{obj.text}</p>
//             </div>
//             <div className="right">
//               <i onClick={()=> deleteToDo(obj.id)
//                 } className="fas fa-times"></i>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
