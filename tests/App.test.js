import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders learn react link", () => {
  render(<App />);
  const title = screen.getByRole("heading", /Login/);
  expect(title).toBeInTheDocument();
});
