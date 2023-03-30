import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ViewChanger } from "./index";

describe("ViewChanger component", () => {
  it("should dispatch setLayout action when a button is clicked", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <ViewChanger />
      </Provider>
    );

    const blockbutton = getByRole("blockbutton");
    fireEvent.click(blockbutton);
    expect(store.getState().layout).toEqual({ layout: "block" });

    const listbutton = getByRole("listbutton");
    fireEvent.click(listbutton);
    expect(store.getState().layout).toEqual({ layout: "list" });
  });
});
