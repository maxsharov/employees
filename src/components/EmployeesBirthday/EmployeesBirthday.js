import React from "react";
import { useSelector } from "react-redux";

const EmployeesBirthday = () => {
  const months = useSelector((state) => state.months);
  const selectedEmployees = useSelector((state) => state.selectedEmployees);
  const employeesFetched = useSelector((state) => state.employeesFetched);

  let employeesByMonth = [];

  if (selectedEmployees.length && employeesFetched) {
    const emplyeesObjects = employeesFetched
      .filter((employee) => selectedEmployees.includes(employee.id))
      .map((employee) => {
        const date = new Date(employee.dob);

        const birthday =
          date.getDate() +
          " " +
          months[date.getMonth()] +
          ", " +
          date.getFullYear();

        return { ...employee, month: date.getMonth(), birthday: birthday };
      })
      .sort(function (a, b) {
        if (a.dob < b.dob) return -1;
        else return 1;
      });

    const newEmplObj = emplyeesObjects.reduce(function (acc, obj) {
      let key = obj.month;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});

    employeesByMonth = months.map((month, index) => {
      return newEmplObj[index] ? (
        <div key={month} className="month">
          <h3>{months[index]}</h3>

          <ul>
            {newEmplObj[index].map((employee) => (
              <li key={employee.id}>
                {employee.lastName} {employee.firstName} - {employee.birthday}{" "}
                year
              </li>
            ))}
          </ul>
        </div>
      ) : null;
    });
  }

  return (
    <div className="employees-birthdays">
      <h2>Employees birthday </h2>
      <hr />
      {employeesByMonth.length ? (
        <div className="months">{employeesByMonth}</div>
      ) : (
        <p>No selected employees</p>
      )}
    </div>
  );
};

export default EmployeesBirthday;
