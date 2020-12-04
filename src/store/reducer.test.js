import reducer from "./reducer";
import * as actionTypes from "./actionTypes";

describe("reducer", () => {
  it("should increment selected employees number", () => {
    const sampleObject = { selectedEmployees: [] };
    const idsCount = sampleObject.selectedEmployees.length + 1;

    const result = reducer(sampleObject, {
      type: actionTypes.SELECT_EMPLOYEE,
      id: "sample-id",
    });

    expect(result["selectedEmployees"].length).toEqual(idsCount);
  });

  it("should decrement selected employees number", () => {
    const sampleObject = { selectedEmployees: ["sample-id"] };
    const idsCount = sampleObject.selectedEmployees.length - 1;

    const result = reducer(sampleObject, {
      type: actionTypes.UNSELECT_EMPLOYEE,
      id: "sample-id",
    });

    expect(result["selectedEmployees"].length).toEqual(idsCount);
  });
});
