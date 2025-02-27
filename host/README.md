# Host

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Development server
para iniciar el host se ejecutan los siguientes comandos

```bash
cd host
```

```bash
npm start
```
## Consideraciones

este protecto es el encargado mediante configuracion del router cargar los diferentes microfrontend mediante lazy load

Un ejemplo de carga de microfrontend:

```typescript
export const routes: Routes = [
 {
        path: "mf1",
        loadComponent : () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            exposedModule: './Component'
        })
        .then(m => {
            return m.AppComponent
        })
    }
]
```
## Estilos
en este proyecto se centralisa los estilos y librerias CSS

## Configuracion Module Federation

```typescript
module.exports = {
  ...withModuleFederationPlugin({
    remotes: {
      mf2: "http://localhost:4200/remoteEntry.js",
      mf3: "http://localhost:4203/remoteEntry.js",
    },
    shared: {
      ...shareAll({
        singleton: true,
        strictVersion: true,
        requiredVersion: "auto",
      }),
    },
  }),
  output: {
    uniqueName: "host",
    publicPath: "auto",
  },
};
```
lo ideal es que cada microfrontend este desarrollado con la misma version para poder indicarle a webpack que comparta depencias y asi optimizar la carga de los modulos, esto se hace con shared,y remotes son los modulos expuestos por url para la carga de los microfrontends




