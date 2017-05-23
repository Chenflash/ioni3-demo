
#Instrucciones para el uso del proyecto


##Instalación de NPM y nodejs

Node js es un ambiente de ejecución para JavaScript construido sobre el motor JavaScript V8 de Chrome. Lo anterior significa que el uso de JavaScript ya no queda restringido solamente al navegador web, sino que tambien es posible usar este popular lenguage de programación para desarrollar aplicaciones de todo tipo, desde servidores web hasta aplicaciones de escritorio.

En el caso de windows:

1. Ir a la página de [NodeJs](https://nodejs.org/en/download/)
2. Descargar el software y la plataforma mas conveniente (Windows, Linux, Mac)
    - Para usuarios con experiencia en mac o linux conviene instalar Node Version Manager [NVM](https://github.com/creationix/nvm)
3. Comprobar con la linea de comando
```
$   curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
$   nvm install node
$   nvm  use node
```

##Instalación de paquetes necesarios
Primero hay que instalar la última version de cordova y de ionic
```
    $ npm install -g ionic cordova
```

###crear un proyecto
En el caso de que sea necesario crear un proyecto desde cero es necesario ejecutar el comando a continuación.

En este caso el proyecto ya esta creado por lo que no será necesario ejecutar el comando.
```
   $ ionic start <proyecto-ionic> sidemenu --v2
```


##Ejecución del proyecto


Abrir el proyecto en web server
```
  $   ionic serve
```

Ejecutar el proyecto en dispositivo:

```
  ionic run ios[android,browser]
```

##Añadir plataformas

```
  $ ionic platform add android
  $ ionic platform add ios

```
 

##Ver la documentación
 

``` 
   $ ionic docs

```

##Cambio de name space.

en el config.xml  en el widget se cambia la configuración del widget.


```
<widget id="com.nombre.proyecto" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
```


