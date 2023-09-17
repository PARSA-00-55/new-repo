import React, { useState, useEffect } from "react";

const Calculate = ({ selected }) => {
  // Calculate total credit hours and total price
  let totalCreditHours = 0;
  let totalPrice = 0;

  const selectedCourses = selected.map((course, index) => {
    totalCreditHours += course.credit;
    totalPrice += course.price;

    return (
      <li key={index}>{course.title}</li>
    );
  });

  // Calculate remaining credit hours
  const remainingCreditHours = 20 - totalCreditHours;

  // State variable to control adding the course
  const [addToCourseList, setAddToCourseList] = useState(true);

  // Show an alert if remaining credit hours are negative
  useEffect(() => {
    if (remainingCreditHours <= 0) {
      setAddToCourseList(false); // Disable adding more courses
    }
  }, [remainingCreditHours]);

  return (
    <div>
      <h2>Selected Items:</h2>
      <ol>
        {addToCourseList ? selectedCourses : <p>No more courses can be added.</p>}
      </ol>
      <p>Credit Hour Remaining: {Math.max(remainingCreditHours, 0)} hr</p>
      <p>Total credit hour: {totalCreditHours}</p>
      <p>Total price: $ {totalPrice}</p>
    </div>
  );
};

export default Calculate;
