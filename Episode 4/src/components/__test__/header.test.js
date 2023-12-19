import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../../utils/appStore"
import NavBar from "../NavBar";
import "@testing-library/jest-dom";
test("header component",()=>{
    //render
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <NavBar/>
        </Provider>
        </BrowserRouter>
    )
    const text=screen.getAllByText("-0 Items");
    //Assertion
    expect(text[0]).toBeInTheDocument();


})
test("login changes to logout on click",()=>{
    //render
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <NavBar/>
        </Provider>
        </BrowserRouter>
    )
    const btn=screen.getByText("Dark Mode");
    //Assertion
    expect(btn).toBeInTheDocument();


})