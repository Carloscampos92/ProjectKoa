# ProjectKoa
Ejercicio de prueba

¿Qué es koa?

Koa proporciona una interfaz mínima para crear aplicaciones. Es un marco muy pequeño que proporciona las herramientas necesarias para crear aplicaciones y es bastante flexible. Hay numerosos módulos disponibles en npm para Koa, que se pueden conectarse directamente con él. Se puedepensar en Koa como el núcleo de express.js.

Procedimiento:

El primer paso para crear nuestra aplicacion en koa, es necesario crear nuestro archivo manejador de paquetes json; este lo iniciaremos con el comando:

    - npm init

Nota:Los Campos que llene para este ejercicio fueron el nombre del paquete y el autor.  

El segundo paso para poder usar la extención de Koa es instalarla para tenerla disponible en el ambiente de node; usando el comando:

    - npm install --save koa

Confirmamos que el koa se encuentre disponible para nuestro ejercicio; mediante el comando:
    
    - ls node_modules(linux) o dir node_modules(windows)

Extra: Instale el paquete nodemon, el cual reinicia nuestro servidor tan pronto como realicemos un cambio en cualquiera de nuestros archivos.

    - npm install --save nodemon
  
El tercer paso para nuestro ejecicio es instalar un verificador de rutas extension de koa; con el siguiente comando:

    - npm install --save koa-router
  
  Con esto terminaremos la adaptacion del ambiente que necesitamos para la aplicacion.
  
Para empezar con la prueba lo que hacemos es:

  1- Ejecutar el programa ejercicioGetPost.js con el comando
  
    - nodemon ejercicioGetPost.js
    
  2- Abrir el navegador y en la URL ingresar la dirección:
  
    - http://localhost:3000/
   
    Nota: En este momento se activara la peticion get con la ruta "/" y mostrara el mensaje "¡Hola mundo!" 
   
   3- Para probar el metodo post existen dos formas de hacerlo; uno es mediante un formulario y el segundo es mediante el comando curl;
   para fines practicos use el comando curl para hacer la prueba del metodo post, usando la siguiente linea de codigo
   
    - curl -X POST "https://localhost:3000/"
    
Por ultimo, damos por concluido el ejercicio.
