import React, { useState, useEffect, useContext } from "react";

function Table({ input }) {
  const parsedInput = parseFloat(input);

  if (isNaN(parsedInput)) {
    return <div> </div>;
  }

  const week1 = input * 0.7;
  const week2 = input * 0.8;
  const week3 = input * 0.9;
  const week4 = input * 0.75;
  const week5 = input * 0.85;
  const week6 = input * 0.95;

  return (
    <table className="Table">
      <thead>
        <tr>
          <th>Day</th>
          <th>Week 1</th>
          <th>Week 2</th>
          <th>Week 3</th>
          <th>Week 4</th>
          <th>Week 5</th>
          <th>Week 6</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{week1}</td>
          <td>{week1}</td>
          <td>{week1}</td>
          <td>{week1}</td>
          <td>{week1}</td>
          <td>{week1}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>{week2}</td>
          <td>{week2}</td>
          <td>{week2}</td>
          <td>{week2}</td>
          <td>{week2}</td>
          <td>{week2}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;

// function Table() {
//   return (
//     <div className="Table">
//       <table>
//         <tr>
//           <th scope="col">Day</th>
//           <th scope="col">Week 1</th>
//           <th scope="col">Week 2</th>
//           <th scope="col">Week 3</th>
//           <th scope="col">Week 4</th>
//           <th scope="col">Week 5</th>
//           <th scope="col">Week 6</th>
//         </tr>
//         <tr>
//           <td>Day 1</td>
//           <td>3-5 x5/ 70% </td>
//           <td>3-5 x5/ 80%</td>
//           <td>3-5 x3/ 90%</td>
//           <td>3-5 x5/ 75%</td>
//           <td>3-5 x3/ 85%</td>
//           <td>3-5 x1-2/ 95%</td>
//         </tr>
//         <tr>
//           <td>Day 2</td>
//         </tr>
//         <tr>
//           <td>Day 3</td>
//         </tr>
//         <tr>
//           <td>Day 4</td>
//         </tr>
//         <tr>
//           <td>Day 5</td>
//         </tr>
//         <tr>
//           <td>Day 6</td>
//         </tr>
//         <tr>
//           <td>Day 7</td>
//         </tr>
//       </table>
//     </div>
//   );
// }

//write a function which takes in an input and returns 75% of that number
// function seventyFivePercent(input) {
//   return input * 0.75;
// }
// seventyFivePercent(100); // 75
// seventyFivePercent(200); // 150
// seventyFivePercent(300); // 225
