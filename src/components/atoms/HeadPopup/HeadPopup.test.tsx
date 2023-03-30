import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import "react-toastify/dist/ReactToastify.css";
import { HeadPopup } from "./index";

import { messages } from "@/i18n/messages";

describe("Renders HeadPopup component correctly", () => {
  it("should display a toast when the button is clicked", async () => {
    render(
      <IntlProvider
        messages={messages["en"]}
        locale={"en"}
        defaultLocale={"en"}
      >
        <HeadPopup />
      </IntlProvider>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    await waitFor(() => {
      const toastContainer = screen.getByRole("toastcontainer");
      expect(toastContainer).toBeInTheDocument();
    });
  });
});
