import App from "../App";
import { shallow, render, mount } from "enzyme";

describe("App Test Component", () => {
  it("should render react link", () => {
    const wrapper = shallow(<App />);
    const link = wrapper.find(".App-link");
    expect(link).toHaveLength(1);
    expect(wrapper.text()).toMatch(/learn react/i);
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
