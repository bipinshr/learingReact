import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("Selecting checkbox should change value true", () => {
  const { getByLabelText } = render(<Checkbox />);
  //i so that it regex doesnot matter all caps or not check fot not checked
  const checkbox = getByLabelText(/not checked/i);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
