import * as actionTypes from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SELECT_EMPLOYEE:
      console.log("state - ", state);

      if (!state.selectedEmployees.includes(action.id)) {
        console.log("state.selectedEmployees", state.selectedEmployees);

        const updatedEmployees = state.selectedEmployees.concat(action.id);

        console.log("action.id", action.id);
        console.log("updatedEmployees", updatedEmployees);

        return {
          ...state,
          selectedEmployees: updatedEmployees,
        };
      } else {
        return state;
      }

    case actionTypes.UNSELECT_EMPLOYEE:
      if (state.selectedEmployees.includes(action.id)) {
        const index = state.selectedEmployees.indexOf(action.id);

        const updatedEmployees = [...state.selectedEmployees];
        updatedEmployees.splice(index, 1);

        return {
          ...state,
          selectedEmployees: updatedEmployees,
        };
      } else {
        return state;
      }

    case actionTypes.GET_EMPLOYEES:
      return {
        ...state,
        employeesFetched: action.employees,
      };

    default:
      return state;
  }
};

export default reducer;
