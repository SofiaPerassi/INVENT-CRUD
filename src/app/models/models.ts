export interface Envios {
    id : number;
    direccion : string;
    code : string;
    destinatario : string;
    remitente : string;
    peso: number;
    precio: number;
    empresa: string
}

export interface Usuario {
    id: number; 
    nombre: string; 
    mail: string; 
    contraseña: string
}

export interface UsuarioLogin {
    id: number; 
    usuario: string;
    contraseña: string
}

export interface Empresa {
    id : number;
    name : string;
    code : string;
    provincia : string;
    municipio : string;
    contacto: number
}