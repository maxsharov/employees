import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Letter from "../Letter/Letter";
import * as actions from "../../store/actions";

function Employees() {
  const alphabet = useSelector((state) => state.alphabet);
  const employees = useSelector((state) => state.employeesFetched);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchEmployees());
  }, [dispatch]);

  function onToggleChange(event) {
    if (event.target.checked) {
      dispatch(actions.selectEmployee(event.target.id));
    } else {
      dispatch(actions.unselectEmployee(event.target.id));
    }
  }

  if (!employees) {
    return <div></div>;
  }

  let letters = [];

  if (employees) {
    const employeesByLetter = employees.reduce(function (acc, obj) {
      let key = obj["lastName"][0];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});

    letters = alphabet.map((letter) => {
      return (
        <Letter
          key={letter}
          letter={letter}
          toggleChange={onToggleChange}
          employees={
            employeesByLetter[letter] ? employeesByLetter[letter] : null
          }
        ></Letter>
      );
    });
  }

  return (
    <div className="employees-list">
      <h1>Employees </h1>
      <hr />
      <div className="Letters container">{letters}</div>
    </div>
  );
}

export default Employees;
