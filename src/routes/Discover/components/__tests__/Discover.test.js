import { render, screen } from "@testing-library/react";
import Discover from "../Discover";

test("renders static content properly", () => {
  render(<Discover />);
  expect(screen.getByText(/RELEASED THIS WEEK/i)).toBeInTheDocument();
  expect(screen.getByText(/FEATURED PLAYLISTS/i)).toBeInTheDocument();
  expect(screen.getByText(/BROWSE/i)).toBeInTheDocument();
  screen.debug();
});
