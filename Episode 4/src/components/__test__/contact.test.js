import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us component",()=>{
    render(<Contact/>);
    
    //Querying
    const input=screen.getAllByRole("button");

    //Assertion
    expect(input[0]).toBeInTheDocument();
})
test("should load input boxes inside contact us component",()=>{
    render(<Contact/>);
    
    //Querying
    const input=screen.getAllByRole("textbox");

    //Assertion
    expect(input[0]).toBeInTheDocument();
})
test("should load text inside contact us component",()=>{
    render(<Contact/>);
    
    //Querying
    const input=screen.getByText("Submit");

    //Assertion
    expect(input).toBeInTheDocument();
})