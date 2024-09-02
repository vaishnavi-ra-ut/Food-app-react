import { render , screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("should load contact us information" , ()=>{
    render(<Contact/>)

    const heading = screen.getAllByRole("heading");

    expect(heading.length).toBeGreaterThan(1);
   

    /* describe ("description", ()=>{

        beforeAll("Applies before all test cases"()=>{});

        beforeEach("Applies before each test cases"()=>{});

        AfterAll("Applies after all test cases"()=>{});

        AfterEach("Applies after each test cases"()=>{});

            it(),
            it(),
            .
            .
            .
            it()
        })   
    
    */

})