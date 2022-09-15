//import {validations} from "../utils";
import {isValidEmail, isValidPassword} from "../utils/validations";


export {}

describe('Validaciones Email y Password para el Registro',() => {

    test('Pruebas de email',  ()=>{

        expect(isValidEmail("ruben.quispe")).toBe(false);
        expect(isValidEmail("kevin.mauricio@hotmail.com")).toBe(true);
        expect(isValidEmail("")).toBe(false);
    });

    test('Pruebas de password',  ()=>{

        expect(isValidPassword("contraseña")).toBe(false);
        expect(isValidPassword("123456")).toBe(true);
        expect(isValidPassword("")).toBe(false);
    });
})