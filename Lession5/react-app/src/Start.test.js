import { Start } from "./Start";
import { render } from "@testing-library/react";
test("render an h1", () => {
  //query of selecting element using there property
  const { getByText } = render(<Start />);
  const h1 = getByText(/Cool Start/);
  expect(h1).toHaveTextContent("Cool Start");
});
