import { render, fireEvent } from "@testing-library/react";
import { SideMenu } from "./index";
import { useCountriesName } from "../../../hooks/useCountriesName";
import { messages } from "@/i18n/messages";
import { IntlProvider } from "react-intl";

jest.mock("../../../hooks/useCountriesName", () => {
  return {
    useCountriesName: jest.fn().mockReturnValue({
      countriesData: [
        { id: 1, country: "Canada" },
        { id: 2, country: "United States" },
        { id: 3, country: "Mexico" },
      ],
    }),
  };
});

describe("SideMenu", () => {
  it("should render the component", () => {
    const { getByRole } = render(
      <IntlProvider
        messages={messages["en"]}
        locale={"en"}
        defaultLocale={"en"}
      >
        <SideMenu />
      </IntlProvider>
    );

    const menuButton = getByRole("menubutton");
    expect(menuButton).toBeInTheDocument();
    fireEvent.click(menuButton);

    expect(useCountriesName).toHaveBeenCalled;
    const countriesList = getByRole("countrieslist");
    expect(countriesList).toBeInTheDocument();

    const sidemenulinks = getByRole("sidemenulinks");
    expect(sidemenulinks).toBeInTheDocument();
  });
});
