class TipoCliente{
    public id: number;
    public nombreTipoCliente: string;
    constructor(id:number, nombreTipoCliente:string){
        this.id = id;
        this.nombreTipoCliente = nombreTipoCliente;
    }
}

export { TipoCliente };