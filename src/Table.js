import React, { useState, useEffect, useContext } from "react";

const roundTo2Point5 = (weight) => {
  return Math.round(weight / 5) * 5;
};

function formatNumber(num) {
  // Always limit to 2 decimal places
  let formatted = num.toFixed(2);

  if (formatted.endsWith("0")) {
    formatted = formatted.slice(0, -1); // Remove the last character (the trailing zero)
    if (formatted.endsWith("0")) {
      formatted = formatted.slice(0, -1); // Remove the second decimal if it's a zero
    }
  }
  return formatted;
}
function Table({ input1, input2, input3 }) {
  // Parse inputs once
  const input1Num = parseFloat(input1);
  const input2Num = parseFloat(input2);
  const input3Num = parseFloat(input3);

  const adjustedInput1 = input1 * 0.9; // Subtracting 10%
  const adjustedInput2 = input2 * 0.9; // Subtracting 10%
  const adjustedInput3 = input3 * 0.9; // Subtracting 10%

  // Week 1 of all workouts at 70% of 1RM
  const week1w1 = roundTo2Point5(adjustedInput1 * 0.7);
  const week1w2 = roundTo2Point5(adjustedInput2 * 0.7);
  const week1w3 = roundTo2Point5(adjustedInput3 * 0.7);
  // Formatting to remove the 0
  const week1w1Formatted = formatNumber(week1w1);
  const week1w2Formatted = formatNumber(week1w2);
  const week1w3Formatted = formatNumber(week1w3);

  //  Week 2 of all workouts at 80% of 1RM
  const week2w1 = roundTo2Point5(input1 * 0.8);
  const week2w2 = roundTo2Point5(adjustedInput2 * 0.8);
  const week2w3 = roundTo2Point5(adjustedInput3 * 0.8);
  // Formatting to remove the 0
  const week2w1Formatted = formatNumber(week2w1);
  const week2w2Formatted = formatNumber(week2w2);
  const week2w3Formatted = formatNumber(week2w3);

  //  Week 3 of all workouts at 90% of 1RM
  const week3w1 = roundTo2Point5(input1 * 0.9);
  const week3w2 = roundTo2Point5(adjustedInput2 * 0.9);
  const week3w3 = roundTo2Point5(adjustedInput3 * 0.9);
  // Formatting to remove the 0
  const week3w1Formatted = formatNumber(week3w1);
  const week3w2Formatted = formatNumber(week3w2);
  const week3w3Formatted = formatNumber(week3w3);

  //  Week 4 of all workouts at 75% of 1RM
  const week4w1 = roundTo2Point5(input1 * 0.75);
  const week4w2 = roundTo2Point5(adjustedInput2 * 0.75);
  const week4w3 = roundTo2Point5(adjustedInput3 * 0.75);
  // Formatting to remove the 0
  const week4w1Formatted = formatNumber(week4w1);
  const week4w2Formatted = formatNumber(week4w2);
  const week4w3Formatted = formatNumber(week4w3);

  // Week 5 of all workouts at 85% of 1RM
  const week5w1 = roundTo2Point5(input1 * 0.85);
  const week5w2 = roundTo2Point5(adjustedInput2 * 0.85);
  const week5w3 = roundTo2Point5(adjustedInput3 * 0.85);
  // Formatting to remove the 0
  const week5w1Formatted = formatNumber(week5w1);
  const week5w2Formatted = formatNumber(week5w2);
  const week5w3Formatted = formatNumber(week5w3);

  // Week 6 of all workouts at 95% of 1RM
  const week6w1 = roundTo2Point5(input1 * 0.95);
  const week6w2 = roundTo2Point5(adjustedInput2 * 0.95);
  const week6w3 = roundTo2Point5(adjustedInput3 * 0.95);
  // Formatting to remove the 0
  const week6w1Formatted = formatNumber(week6w1);
  const week6w2Formatted = formatNumber(week6w2);
  const week6w3Formatted = formatNumber(week6w3);
  // checking everything is working
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
          {/* DAY 1 */}
          <td>1</td>
          <td>
            3-5 x 5/ 70%
            <br />
            <br />
            {week1w1Formatted}&nbsp;&nbsp;
            {week1w2Formatted}&nbsp;&nbsp;
            {week1w3Formatted}&nbsp;&nbsp;
          </td>
          <td>
            3-5 x 5/ 80%
            <br /> <br />
            {week2w1Formatted} &nbsp;&nbsp;
            {week2w2Formatted} &nbsp;&nbsp;
            {week2w3Formatted} &nbsp;&nbsp;
          </td>
          <td>
            3-4 x 3/ 90%
            <br /> <br />
            {week3w1Formatted} &nbsp;&nbsp;
            {week3w2Formatted} &nbsp;&nbsp;
            {week3w3Formatted} &nbsp;&nbsp;
          </td>
          <td>
            3-5 x 5/ 75%
            <br /> <br />
            {week4w1Formatted} &nbsp;&nbsp;
            {week4w2Formatted} &nbsp;&nbsp;
            {week4w3Formatted} &nbsp;&nbsp;
          </td>
          <td>
            3-5 x 3/ 85%
            <br /> <br />
            {week5w1Formatted} &nbsp;&nbsp;
            {week5w2Formatted} &nbsp;&nbsp;
            {week5w3Formatted} &nbsp;&nbsp;
          </td>
          <td>
            3-4 x 1-2/ 95%
            <br /> <br />
            {week6w1Formatted} &nbsp;&nbsp;
            {week6w2Formatted} &nbsp;&nbsp;
            {week6w3Formatted} &nbsp;&nbsp;
          </td>
        </tr>
        <tr>
          <td>2</td>

          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          {/* DAY 3 */}
          <td>
            3-5 x 5/ 70%
            <br /> <br />
            {week1w1Formatted} &nbsp;&nbsp;
            {week1w2Formatted} &nbsp;&nbsp;
            {week1w3Formatted} &nbsp;&nbsp;
          </td>
          <td>
            3-5 x 5/ 80%
            <br /> <br />
            {week2w1Formatted} &nbsp;&nbsp;
            {week2w2Formatted} &nbsp;&nbsp;
            {week2w3Formatted} &nbsp;&nbsp;
          </td>
          <td>
            3-4 x 3/ 90%
            <br /> <br />
            {week3w1Formatted} &nbsp;&nbsp;
            {week3w2Formatted} &nbsp;&nbsp;
            {week3w3Formatted} &nbsp;&nbsp;
          </td>
          <td>
            3-5 x 5/ 75%
            <br /> <br />
            {week4w1Formatted} &nbsp;&nbsp;
            {week4w2Formatted} &nbsp;&nbsp;
            {week4w3Formatted} &nbsp;&nbsp;
          </td>
          <td>
            3-5 x 3/ 85%
            <br /> <br />
            {week5w1Formatted} &nbsp;&nbsp;
            {week5w2Formatted} &nbsp;&nbsp;
            {week5w3Formatted} &nbsp;&nbsp;
          </td>
          <td>
            3-4 x 1-2/ 95%
            <br /> <br />
            {week6w1Formatted} &nbsp;&nbsp;
            {week6w2Formatted} &nbsp;&nbsp;
            {week6w3Formatted} &nbsp;&nbsp;
          </td>
        </tr>
        <tr>
          {/* BLANK DAY FOR CARDIO */}
          <td>4</td>
          {/* BLANK DAY FOR CARDIO */}
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          {/* DAY 5 */}
          <td>5</td>
          <td>
            3-5 x 5/ 70%
            <br /> <br />
            {week1w1Formatted} &nbsp;&nbsp;
            {week1w2Formatted} &nbsp;&nbsp;
            {week1w3Formatted} &nbsp;&nbsp;
          </td>
          <td>
            3-5 x 5/ 80%
            <br /> <br />
            {week2w1Formatted} &nbsp;&nbsp;
            {week2w2Formatted} &nbsp;&nbsp;
            {week2w3Formatted} &nbsp;&nbsp;
          </td>
          <td>
            3-4 x 3/ 90% <br /> <br />
            {week3w1Formatted} &nbsp;&nbsp;
            {week3w2Formatted} &nbsp;&nbsp;
            {week3w3Formatted} &nbsp;&nbsp;
          </td>
          <td>
            3-5 x 5/ 75% <br /> <br />
            {week4w1Formatted} &nbsp;&nbsp;
            {week4w2Formatted} &nbsp;&nbsp;
            {week4w3Formatted} &nbsp;&nbsp;
          </td>
          <td>
            3-5 x 3/ 85%
            <br /> <br />
            {week5w1Formatted} &nbsp;&nbsp;
            {week5w2Formatted} &nbsp;&nbsp;
            {week5w3Formatted} &nbsp;&nbsp;
          </td>
          <td>
            3-4 x 1-2/ 95%
            <br /> <br />
            {week6w1Formatted} &nbsp;&nbsp;
            {week6w2Formatted} &nbsp;&nbsp;
            {week6w3Formatted} &nbsp;&nbsp;
          </td>
        </tr>
        <tr>
          {/* BLANK DAY FOR CARDIO */}
          <td>6</td>
          {/* BLANK DAY FOR CARDIO */}
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          {/* BLANK DAY FOR CARDIO */}
          <td>7</td>
          {/* BLANK DAY FOR CARDIO */}
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
