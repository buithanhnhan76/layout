import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const introTitle = screen.getByText(/Lorem ipsum dolor sit asmet?/i);
  expect(introTitle).toBeInTheDocument();
});
