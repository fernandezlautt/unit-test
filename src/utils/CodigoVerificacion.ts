class CodigoVerificacion{


    public static generarCodigo():number{
        return Math.floor(Math.random() * 1000000);
    }
}

export { CodigoVerificacion };