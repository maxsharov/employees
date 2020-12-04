import axios from "axios";

import { loadState, saveState } from "./localStorage";
import * as actionTypes from "./actionTypes";

export const getEmployees = (employees) => {
  return {
    type: actionTypes.GET_EMPLOYEES,
    employees: employees,
  };
};

export const fetchEmployees = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(
        "https://yalantis-react-school-api.yalantis.com/api/task0/users"
      );

      const employees = result.data.sort(function (a, b) {
        if (a.lastName < b.lastName) return -1;
        else return 1;
      });

      dispatch(getEmployees(employees));
    } catch (error) {
      console.error(error);
    }
  };
};

export const selectEmployee = (id) => {
  const selectedEmployees = loadState();
  let updatedEmployees;

  if (!selectedEmployees.includes(id)) {
    updatedEmployees = selectedEmployees.concat(id);
    saveState(updatedEmployees);
  } else {
    updatedEmployees = selectedEmployees;
  }

  return {
    type: actionTypes.SELECT_EMPLOYEE,
    updatedEmployees: updatedEmployees,
  };
};

export const unselectEmployee = (id) => {
  const selectedEmployees = loadState();
  let updatedEmployees;

  if (selectedEmployees.includes(id)) {
    const index = selectedEmployees.indexOf(id);
    selectedEmployees.splice(index, 1);

    updatedEmployees = selectedEmployees;
    saveState(updatedEmployees);
  } else {
    updatedEmployees = selectedEmployees;
  }

  return {
    type: actionTypes.UNSELECT_EMPLOYEE,
    updatedEmployees: updatedEmployees,
  };
};
