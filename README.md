# Ejecutar los Microfrontends

Para ejecutar los microfrontends, sigue estos pasos:

1. Navega al directorio del microfrontend correspondiente:
    ```bash
    cd mf1angular
    # o
    cd mf2
    # o
    cd mf3
    ```
2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Inicia la aplicación:
    ```bash
    npm run start
    ```

# Ejecutar el Host

Para ejecutar el host, sigue estos pasos:

1. Navega al directorio del host:
    ```bash
    cd host
    ```
2. Instala las dependencias:
    ```bash
    npm install
    ```

2. Inicia la aplicación:
    ```bash
    npm run start
    ```

# Consideraciones 

- Asegúrate de tener Node.js instalado en tu máquina.
- Verifica que las dependencias estén correctamente instaladas ejecutando `npm install`.
- Si encuentras algún problema, revisa los logs de la consola para obtener más información.
- Consulta la documentación oficial para más detalles sobre la configuración y uso.

# Manejo de Microfrontends en Angular

Los microfrontends en Angular se realizan mediante el plugin oficial de Module Federation para Angular. Este módulo permite aislar módulos o componentes de otro proyecto, pero un host debe cargar esos módulos remotos. La compatibilidad es única entre proyectos de Angular ya que ellos exponen componentes de Angular y solo un proyecto de Angular los puede compilar (a menos que los componentes de otros frameworks como React y Vue se conviertan en Web Components).

# Observaciones 

- este poryecto esta basado en la ultima version de Angular (19) el cual los microfrontend
- Se puede implementar el plugin tanto en JavaScript como en TypeScript.
- Soporta el enrutamiento de aplicaciones Angular.
- en este proyecto se compartio un servicio llamado `UserService` entre el mf2 y mf3 
- en el Host se creo el layout que envuelve los Microfrontend
- Tambien los estilos estan Centralizados en el Host
- Proveder modulos transversales como HttpClient debe estar tanto como microfrontend o Host 
-
es Ideal para Aplicaciones Web Robustas 

# Documentación

[Documentación oficial de Module Federation para Angular](https://module-federation.io/practice/frameworks/angular/angular-cli.html)
