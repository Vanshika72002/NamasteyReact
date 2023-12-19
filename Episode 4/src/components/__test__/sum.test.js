import { sum } from "../sum";

test("sum should be accurate",()=>{

    const result=sum(3,2);
    //Assertion
    expect(result).toBe(5);
});