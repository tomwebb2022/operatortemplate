import React, { useState, useEffect, useContext } from "react";

function Table({ input1, input2, input3 }) {
  // Week 1 of all workouts at 70% of 1RM
  const week1w1 = input1 * 0.7;
  const week1w2 = input2 * 0.7;
  const week1w3 = input3 * 0.7;
  //  Week 2 of all workouts at 80% of 1RM
  const week2w1 = input1 * 0.8;
  const week2w2 = input2 * 0.8;
  const week2w3 = input3 * 0.8;
  //  Week 3 of all workouts at 90% of 1RM
  const week3w1 = input1 * 0.9;
  const week3w2 = input2 * 0.9;
  const week3w3 = input3 * 0.9;
  //  Week 4 of all workouts at 75% of 1RM
  const week4w1 = input1 * 0.75;
  const week4w2 = input2 * 0.75;
  const week4w3 = input3 * 0.75;
  // Week 5 of all workouts at 85% of 1RM
  const week5w1 = input1 * 0.85;
  const week5w2 = input2 * 0.85;
  const week5w3 = input3 * 0.85;
  // Week 6 of all workouts at 95% of 1RM
  const week6w1 = input1 * 0.95;
  const week6w2 = input2 * 0.95;
  const week6w3 = input3 * 0.95;
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
          {/* TRAINING HERE */}
          <td>1</td>
          <td>
            3-5 x 5/ <br />
            {week1w1}, {week1w2},{week1w3}
          </td>
          <td>
            3-5 x 5/ <br />
            {week2w1}, {week2w2},{week2w3}
          </td>
          <td>
            3-5 x 5/ <br />
            {week3w1}, {week3w2},{week3w3}
          </td>
          <td>
            3-5 x 5/ <br />
            {week4w1}, {week4w2},{week4w3}
          </td>
          <td>
            3-5 x 5/ <br />
            {week5w1}, {week5w2},{week5w3}
          </td>
          <td>
            3-5 x 5/ <br />
            {week6w1}, {week6w2},{week6w3}
          </td>
        </tr>
        <tr>
          {/* BLANK DAY FOR CARDIO */}
          <td>2</td>
          {/* BLANK DAY FOR CARDIO */}
        </tr>
        <tr>
          {/* TRAINING HERE */}
          <td>3</td>
          <td>
            3-5 x 5/ <br />
            {week1w1}, {week1w2},{week1w3}
          </td>
          <td>
            3-5 x 5/ <br />
            {week2w1}, {week2w2},{week2w3}
          </td>
          <td>
            3-5 x 5/ <br />
            {week3w1}, {week3w2},{week3w3}
          </td>
          <td>
            3-5 x 5/ <br />
            {week4w1}, {week4w2},{week4w3}
          </td>
          <td>
            3-5 x 5/ <br />
            {week5w1}, {week5w2},{week5w3}
          </td>
          <td>
            3-5 x 5/ <br />
            {week6w1}, {week6w2},{week6w3}
          </td>
        </tr>
        <tr>
          {/* BLANK DAY FOR CARDIO */}
          <td>4</td>
          {/* BLANK DAY FOR CARDIO */}
        </tr>
        <tr>
          {/* TRAINING HERE */}
          <td>5</td>
          <td>
            3-5 x 5/ <br />
            {week1w1}, {week1w2},{week1w3}
          </td>
          <td>
            3-5 x 5/ <br />
            {week2w1}, {week2w2},{week2w3}
          </td>
          <td>
            3-5 x 5/ <br />
            {week3w1}, {week3w2},{week3w3}
          </td>
          <td>
            3-5 x 5/ <br />
            {week4w1}, {week4w2},{week4w3}
          </td>
          <td>
            3-5 x 5/ <br />
            {week5w1}, {week5w2},{week5w3}
          </td>
          <td>
            3-5 x 5/ <br />
            {week6w1}, {week6w2},{week6w3}
          </td>
        </tr>
        <tr>
          {/* BLANK DAY FOR CARDIO */}
          <td>6</td>
          {/* BLANK DAY FOR CARDIO */}
        </tr>
        <tr>
          {/* BLANK DAY FOR CARDIO */}
          <td>7</td>
          {/* BLANK DAY FOR CARDIO */}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
