import React from "react";
import { useSelector } from "react-redux";

const Letter = (props) => {
  const selectedEmpl = useSelector((state) => state.selectedEmployees);

  let list;

  if (props.employees) {
    list = props.employees.map((employee) => {
      return (
        <div key={employee.id}>
          {employee.lastName} {employee.firstName}{" "}
          <input
            type="checkbox"
            onChange={props.toggleChange}
            checked={selectedEmpl.includes(employee.id)}
            id={employee.id}
          />
        </div>
      );
    });
  } else {
    list = "-----";
  }

  return (
    <div className="Letter">
      <h3>{props.letter}</h3>
      {list}
    </div>
  );
};

export default Letter;
