export const loadState = () => {
  try {
    const selectedEmployees = localStorage.getItem("selectedEmployees");
    if (selectedEmployees === null) {
      return [];
    }
    return JSON.parse(selectedEmployees);
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export const saveState = (selectedEmployees) => {
  try {
    const serializedState = JSON.stringify(selectedEmployees);
    localStorage.setItem("selectedEmployees", serializedState);
  } catch (err) {
    console.error(err);
  }
};
