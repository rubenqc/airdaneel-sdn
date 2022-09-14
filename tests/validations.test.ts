import {validations} from "../utils";

export {}

describe('Validaciones Email y Password para el Registro',() => {

    test('Pruebas de email',  ()=>{

        expect(validations.isValidEmail("ruben.quispe")).toBe(false);
        expect(validations.isValidEmail("kevin.mauricio@hotmail.com")).toBe(true);
        expect(validations.isValidEmail("")).toBe(false);
    });

    test('Pruebas de password',  ()=>{

        expect(validations.isValidPassword("contraseña")).toBe(false);
        expect(validations.isValidPassword("123456")).toBe(true);
        expect(validations.isValidPassword("")).toBe(false);
    });
})