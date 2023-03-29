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

// describe("ViewChanger component", () => {
//   it("should dispatch setLayout action when a button is clicked", () => {
//     const { getByTestId } = render(
//       <Provider store={store}>
//         <ViewChanger />
//       </Provider>
//     );

//     fireEvent.click(getByTestId("blockbutton"));
//     expect(store.getState().layout).toBe("block");

//     fireEvent.click(getByTestId("list-utton"));
//     expect(store.getState().layout).toBe("list");
//   });
// });

// it("should dispatch setLayout action when ViewChanger button is clicked", () => {
//   const { getByTestId } = render(
//     <Provider store={store}>
//       <Header />
//     </Provider>
//   );

//   const blockButton = getByTestId("view-changer-block-button");
//   const listButton = getByTestId("view-changer-list-button");

//   // Check that clicking the block button dispatches setLayout with "block"
//   blockButton.click();
//   expect(store.getState().layout).toEqual("block");

//   // Check that clicking the list button dispatches setLayout with "list"
//   listButton.click();
//   expect(store.getState().layout).toEqual("list");
// });
