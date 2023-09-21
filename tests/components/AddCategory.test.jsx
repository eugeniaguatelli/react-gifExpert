import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Pruebas en AddCategory', () => {

    test('debe de cambiar el valor de la caja de texto', () => {
        // se crea el sujero de pruebas
        render( <AddCategory onNewCategory={() =>{}}/>)
        // extraigo input 
        const input = screen.getByRole('textbox');
        //disparo evento, con el targwt value
        fireEvent.input(input, {target: {value: 'Saitama'}})
        // verifico aserción
        expect(input.value).toBe('Saitama');
    })
    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Saitama';
        // mockeo una funcion para poder pasarla como prop y tengo 
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox');

        const form = screen.getByRole('form');
        // disparo el evento y establezco el valor 
        fireEvent.input(input, {target: {value: inputValue}})
        // disparo el evento submit
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);


})
test('no debe de llamar onNewCategory si el input esta vacio', () => {
    const onNewCategory = jest.fn();
    render( <AddCategory onNewCategory={onNewCategory} />)

    const form = screen.getByRole('form');
    //disparo el evento submit
    fireEvent.submit(form);
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();

})


})