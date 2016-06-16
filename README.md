# PruebaUIWeb

Este proyecto hace uso de [AngularJS](http://angularjs.org/). El proyecto esta preconfigurado para instalar el framework de Angular y una serie de dependencias para desarrollo y pruebas. Se tomó como esqueleto el proyecto [Angular-seed].

### Prerequisitos

La aplicacion funciona a partir de una serie de herramientas de node.js, bower y git.

Es necesario instalar tanto [git] como [node], y desde este último instalar [bower]:

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

Navegar la aplicación desde `http://localhost:8000`.

## Actualizando Angular

Actualización de dependencias al correr (versiones en `package.json` ):

```
npm update
```

Actualizacion de dependencias de Angular mediante (versiones en `bower.json`):

```
bower update
```
##Cambio de `.json` en memoria por API sobre http

El proyecto hace uso del servicio `$http`, de modo que un cambio en las lineas 20-21 del archivo `view1.js` permitiria el uso de una dirección http desde la cual obtener la información en formato `.json`, siempre y cuando la dirección efectivamente apunte a un archivo de este tipo:

De este modo, la linea 20
```
$http.get('view1/news_mock.json')
```
Se cambiaria por la linea 21 con la respectiva URL que corresponda al API
```
$http.get('<dirección http desde la que se quiera cargar el .json>')
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
[$http]:https://docs.angularjs.org/api/ng/service/$http#get
