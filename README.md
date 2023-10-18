# INVENTCrud

INVENT es una aplicación web que permite a quien lo utiliza administrar y visualizar tanto envíos como empresas de transporte. Una vez que se loguea, puede acceder al home screen, donde se encuentran las distintas tablas, estas incluyen: tabla los pesos y tipos de paquete, tabla de trabajadores/administradores, tabla de envios realizados y tabla de empresas de transporte. Para estas ultimas dos tablas, se pueden crear tanto envíos como empresas y tambien eliminarlos de ser necesarios. Las empresas transportistas, a su vez, también pueden ser editadas. Una vez que el usuario terminó de realizar y visualizar lo deseado, puede cerrar sesión sin inconvenientes. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Dependencias y deployado

Para poder levantar la aplicación de manera local se requiere realizar los siguientes pasos:

Descargar las dependencias corriendo en la carpeta raíz:

npm install

Adicionalmente, si no se posee angular previamente instalado, se debe realizar: 

npm i -g @angular/cli

## Json server

Para inicializar la base de datos local, se debe buscar la carpeta src/assets/data y correr `npx json-server --watch db.json`. 

## Development server

Dentro de la carpeta principal INVENT-crud, se debe correr ng serve -o para que automaticamente abra la pagina web en una nueva pestaña. Adicionalmente, se puede correr solo ng-serve y abrir manualmente la web en http://localhost:4200/

## Usuario autorizado para ingresar

El usuario autorizado para logearse es UsuarioInvent con contraseña INVENT. Este se puede ver en el archivo db.json en el array usuarios.
