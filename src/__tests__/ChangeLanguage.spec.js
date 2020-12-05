import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ChangeLanguage } from "../components/ChangeLanguage";

beforeEach(cleanup);

describe("<ChangeLanguage/>", () => {
  it("renders the <ChangeLanguage/> component", () => {
    const { queryByTestId } = render(<ChangeLanguage />);
    expect(queryByTestId("lang-changer")).toBeTruthy();
  });

  it("opens language changer using onClick", () => {
    const { queryByTestId } = render(<ChangeLanguage />);
    fireEvent.click(queryByTestId("lang-changer-open"));
    expect(queryByTestId("lang-changer__options")).toBeTruthy();
    expect(
      queryByTestId("lang-changer").classList.contains("open")
    ).toBeTruthy();
  });

  it("opens language changer using onKeyDown", () => {
    const { queryByTestId } = render(<ChangeLanguage />);
    fireEvent.keyDown(queryByTestId("lang-changer-open"));
    expect(queryByTestId("lang-changer__options")).toBeTruthy();
    expect(
      queryByTestId("lang-changer").classList.contains("open")
    ).toBeTruthy();
  });
});
