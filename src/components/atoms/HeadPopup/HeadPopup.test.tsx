import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "react-toastify/dist/ReactToastify.css";
import { HeaderPopup } from "./index";

describe("Renders HeaderPopup component correctly", () => {
  it("should display a toast when the button is clicked", async () => {
    render(<HeaderPopup />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    await waitFor(() => {
      const toastContainer = screen.getByRole("toastcontainer");
      expect(toastContainer).toBeInTheDocument();
    });
  });
});
