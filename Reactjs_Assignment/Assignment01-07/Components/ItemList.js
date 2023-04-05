//ItemList p1
// import React from 'react';

// function List(props) {
//   return (
//     <ul>
//       {props.items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// }

// export default List;




// ItemList P2
// import React, { useState } from 'react';

// function ItemList({ items }) {
//   const [newItem, setNewItem] = useState('');

//   const handleInputChange = (event) => {
//     setNewItem(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     if (newItem.trim() !== '') {
//       items.push(newItem);
//       setNewItem('');
//     }
//   };

//   return (
//     <div>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <form onSubmit={handleFormSubmit}>
//         <label htmlFor="new-item-input">New Item:</label>
//         <input
//           type="text"
//           id="new-item-input"
//           value={newItem}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Add Item</button>
//       </form>
//     </div>
//   );
// }

// export default ItemList;
