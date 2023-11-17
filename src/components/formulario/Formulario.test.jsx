import {render,screen,fireEvent} from "@testing-library/react"
import { Formulario } from "./formulario"

describe("<Formulario/>",()=>{
    test('Renders de formulario', () => {   
    render(<Formulario/>);
    const inputElemnt = screen.getByTestId("exampleInput")
    expect(inputElemnt).toBeInTheDocument();
 })
  
})