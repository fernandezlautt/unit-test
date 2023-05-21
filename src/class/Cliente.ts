import { TipoCliente } from "./TipoCliente";
class Cliente {
    public nome: string;
    public age: number;
    public tipoCliente: TipoCliente;
    constructor(nome:string, age:number, tipoCliente:TipoCliente) {
        this.nome = nome;
        this.age = age;
        this.tipoCliente = tipoCliente;
    }
}
export { Cliente };