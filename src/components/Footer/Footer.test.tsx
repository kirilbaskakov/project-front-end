import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";
import navLinks from "@/constants/navLinks";

test("renders footer with navigation links", () => {
  const { getByAltText } = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );

  navLinks.forEach(({ path }) => {
    const linkElement = getByAltText(`link to ${path}`);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest("a")).toHaveAttribute("href", path);
  });
});
