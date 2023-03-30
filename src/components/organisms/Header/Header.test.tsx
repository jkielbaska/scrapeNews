import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Header } from "./index";
import { IntlProvider } from "react-intl";
import { messages } from "@/i18n/messages";

describe("Header component", () => {
  it("should render the GnNews header", () => {
    render(
      <Provider store={store}>
        <IntlProvider
          messages={messages["en"]}
          locale={"en"}
          defaultLocale={"en"}
        >
          <Header />
        </IntlProvider>
      </Provider>
    );
    const header = screen.getByText("GnNews");
    expect(header).toBeInTheDocument();
  });
});
