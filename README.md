# PruebaUIWeb

Este proyecto hace uso de [AngularJS](http://angularjs.org/). El proyecto esta preconfigurado para instalar el framework de Angular y una serie de dependencias para desarrollo y pruebas. Se tomó como esqueleto el proyecto [Angular-seed]

### Prerequisitos

La aplicacion funciona a partir de una serie de herramientas de node.js, bower y git

Es necesario instalar tanto [git] como [node], y desde este último instalar [bower]

```
nmp install -g  bower
```

### Instalar Dependencias

`npm` automáticamente corre `bower`, de modo que basta con realizar:

```
npm install
```

### Correr la aplicación

Para comenzar el servidor es necesario realizar:

```
npm start
```

Navegar la aplicación desde `http://localhost:8000/index.html`.

### Corrida de Pruebas Unitarias

#Si alcanzo...

## Actualizando Angular

Actualización de dependencias al correr (versiones en `package.json` ):

```
npm update
```

Actualizacion de dependencias de Angular mediante (versiones en `bower.json`):

```
bower update
```

### Corrida durante Desarrollo

The angular-seed project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```
[Angular-seed]: https://github.com/angular/angular-seed
[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
