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
  // get ids from localstorage
  const selectedEmployees = loadState();

  if (selectedEmployees.includes(id)) {
    // add id to array
    const updatedEmployees = selectedEmployees.concat(id);

    // set localstorage
    saveState(updatedEmployees);
  }

  return {
    type: actionTypes.SELECT_EMPLOYEE,
    id: id,
  };
};

export const unselectEmployee = (id) => {
  // get ids from localstorage
  const selectedEmployees = loadState();

  // check if employee id was already selected
  if (selectedEmployees.includes(id)) {
    // remove id from array
    selectedEmployees.splice(id, 1);

    // set localstorage
    saveState(selectedEmployees);
  }

  return {
    type: actionTypes.UNSELECT_EMPLOYEE,
    id: id,
  };
};
