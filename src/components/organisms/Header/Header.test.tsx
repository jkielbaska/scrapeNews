import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Header } from "./index";

describe("Header component", () => {
  it("should render the GnNews header", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const header = screen.getByText("GnNews");
    expect(header).toBeInTheDocument();
  });
});
