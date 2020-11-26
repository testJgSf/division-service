
# Division Service  
  
## Configuración inicial del proyecto  
  
### Sin Docker  
- Se require tener instalado nodeJs v12.13.0  
- Instalar dependencias con `npm i`  
- Ejecutar el comando `npm start`  
  
### Con Docker 

- Construir imagen con el comando `docker build -t joseg/division-service-1.0.0 .`  
- Asignar el tag que se desee utilizar, para este ejemplo es "joseg/division-service-1.0.0"  
- Verificar que la imagen se haya construido con el comando `docker images`  
- De aparecer la imagen creada ejecutar `docker run -p 3004:3004 -d joseg/division-service-1.0.0`  
  
  **NOTA**:**Por defecto la cantidad máxima de decimales para la salida es de 5 decimales, si se desea mas es necesario agregar una variable de ambiente de nombre DECIMALS con valor entero explicando la cantidad de decimales que se quiere manejar**
  
## Contratos  
  
Los contratos de entrada y salida se encuentran documentados en el siguiente link   ***************  
  
  
## Documentación adicional  
  
El resto de la documentación puede ser encontrada en el siguiente enlace [Documentación](https://github.com/testJgSf/calculator-documentation)

  
### Más información  
Cualquier información extra contacte a José Gabriel Ortiz.