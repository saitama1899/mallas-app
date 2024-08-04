https://github.com/user-attachments/assets/e7705840-1090-46ba-9dfa-fc6da221b1ad

# 🎞️ Movies APP

Movies APP es una aplicación de prueba técnica desarrollado con NextJS, Styled Components y TS. La aplicación puede servir como watch list gracias a su caracteristica principal de añadir a favoritos.
🚀 Puedes probar esta aplicación en [mallas-app.vercel.app](https://mallas-app.vercel.app/)

## 💻 Instalación local

- Instalación de dependencias y ejecución local.

```bash
npm i
npm run dev
```

- Configurar las variables de entorno para poder utilizar la API de TMDB:
  - `NEXT_PUBLIC_TMDB_PRIVATE_KEY` : Key privada que [proporciona gratuitamente](https://developer.themoviedb.org/v4/reference/intro/getting-started) TMDB.
  - `NEXT_PUBLIC_TMDB_BASE_URL` : La url base de la API de TMDB.

- Configurar linter Biomejs
  - Instalar la extensión de Biomejs para VSCode y configurar su uso en el settings.json de tu entorno.

## 💾 Dependencias

#### Dependencias de desarrollo
- `@biomejs/biome`
Linter para asegurar la calidad del código y la consistencia del estilo de codificación, gracias al gran número de reglas Linter que comprueba y recomienda durante el desarrollo. También se utiliza para la ordenación automática de imports.

- `terser-webpack-plugin`
Para minimizar el código JavaScript con Webpack. Esto reduce el tamaño del bundle y mejora el rendimiento de la aplicación en producción y desarrollo, mejorando los tiempos de carga. Se integra en la [configuración](https://github.com/saitama1899/mallas-app/blob/main/next.config.mjs) de Nextjs para la minificación de assets.

- `webpack-bundle-analyzer`
Una utilidad para Webpack que proporciona un informe visual de lo que contiene cada bundle. Esto es útil para analizar el tamaño de los módulos y optimizar el bundle. Puedes verlo en local en el archivo [report.html](https://github.com/saitama1899/mallas-app/blob/main/bundles/report.html)

- `Dependencias de TypeScript`
Necesarias para el correcto tipado de los elementos de node, react, react-dom y styled-components, utilizados en el proyecto, asi como la dependencia base de typescript para la compilación del código.

#### Dependencias de producción
- `next`
Framework de React que permite la renderización del lado del servidor (SSR) como caracteristica principal, mejorando el SEO y los tiempos de carga inicial. En el proyecto se ha utilizado principalmente para:
  - `Renderización SSR`, se puede ver un [ejemplo de su uso](https://github.com/saitama1899/mallas-app/blob/main/src/pages/movies/%5Bid%5D.tsx) en la vista de detalle de película.
  - `Enrutamiento basado en archivos` para manejar las rutas de la app.
  - Uso de su `arquitectura base` utilizando los puntos de entrada personalizados:
      - [_app.tsx](https://github.com/saitama1899/mallas-app/blob/main/src/pages/_app.tsx) para definir el comportamiento global. Se ha utilizado para envolver con el contexto y estilos globales.
      - [_document.tsx](https://github.com/saitama1899/mallas-app/blob/main/src/pages/_document.tsx) para personalizar el documento HTML que se sirve al cliente.
  - Uso de `comnponentes de Next`, como el Image para la optimización de imagenes o el Link para generar anchor. Se puede ver su uso en el componente [Header.tsx](https://github.com/saitama1899/mallas-app/blob/main/src/components/layout/Header/Header.tsx)

- `styled-components`
Para estilizar componentes en React utilizando tagged template literals y reutilizando código. Se ha utilizado junto con variables CSS y no se han usado clases. Puedes [ver un ejemplo](https://github.com/saitama1899/mallas-app/blob/main/src/components/ui/Cards/Container/CardsContainer.style.tsx) de reutilización de CSS en el wrapper de contenido de las páginas home y favoritos.

- `Dependencias de React`
react y reactdom para desarrollar la interfaz de usuario y renderizarla en el navegador.

- `axios`
Para hacer solicitudes a la API y obtener datos necesarios. Estudié la posibilidad de usar el fetch nativo, pero axios te simplifica y facilita las peticiones además de ser una librería ligera.

## 🏗️ Arquitectura

Para la arquitectura de la aplicación se han seguido una serie de principios y buenas prácticas, integradas a la arquitectura que ofrece Next. Estas son las caracteristicas y beneficios principales que he implementado:

- Cada directorio y archivo tiene una única responsabilidad (SRP, Single Responsability Principle)
  - Los `componentes` están separados de los `hooks`, lo que facilita la gestión y la reutilización.
  - Los contextos de estado global están centralizados en el directorio `context`.
  - Los tipos de TypeScript están aislados en el directorio `types`, asegurando que el tipado se gestione de manera centralizada y organizada.
    
- La estructura facilita la extensión de funcionalidades sin modificar el código existente (OCP, Open/Close Principle)
   -  Nuevos componentes pueden ser añadidos al directorio components sin alterar los componentes existentes.
   -  Nuevos hooks o contextos pueden ser añadidos sin modificar los archivos existentes, promoviendo la extensibilidad.
     
- El uso de TypeScript asegura que los tipos y contratos entre componentes sean respetados, permitiendo que los componentes se reemplacen o se extiendan sin introducir errores (LSP, Principio de Sustitución de Liskov)
  
- Cada archivo y módulo expone únicamente las interfaces necesarias (ISP, Principio de Segregación de Interfaces)
   - Los hooks encapsulan lógica específica y exponen solo lo necesario a los componentes que los utilizan.
   - Los contextos exponen funciones y estados específicos para su propósito, sin sobrecargar a los consumidores con detalles innecesarios.

```js
public/
├── fonts/
├── images/
src/
├── components/                 // Componentes dividos en layout (contenedores y elementos core) y ui (elementos mas pequeños y reutilizables)
│   ├── layout/
│   ├── ui/
│   ├── pages/                  // Maneja el contenido de cada página
├── context/                    // Se crean los estados globales de la app, estados core que se usarán en distintos puntos
│   ├── AppContext.tsx
├── data/                       // Se almacenan todos los datos estaticos y reutilizables que se usaran en la aplicación. Por ejemplo información de la api, literales, diccionarios, etc.
│   ├── app.ts
│   ├── api.ts
│   └── (other data files)
├── hooks/                      // Se almacena toda la lógica que utilizarán los componentes y que puede ser reutilizable, en custom hooks
├── pages/                      // Definir la paginación de la app, solo se encarga de cargar componentes
│   ├── _app.tsx                // Definir el comportamiento global
│   ├── _document.tsx           // Personalizar el documento HTML que se sirve al cliente
│   ├── index.tsx
│   └── (other pages)
├── styles/                     // Estilos globales de la aplicación, se envuelven en el _app.tsx
│   ├── GlobalStyle.ts
├── theme/                      // Definición de variables css globles, valores que se repiten. Esta preparado para cambiar dinamicamente de theme
│   ├── MainTheme.ts            
├── types/                      // Todo el tipado de interfaces, props, etc. se almacena y se separa por archivos en types/
└── utils/                      // Para almacenar separando la temática por archivos, por ejemplo las funciones fetch, debounce o mapeo de datos que recibo de la API
    ├── api.ts
    └── (other utility files)
```

## 🗒️ Decisiones durante el desarrollo y notas del desarrollador

- Inicialmente trabajé con la API de Marvel, utilizando la librería crypto para generar el hash, pero tuve que buscar una alternativa debido a los problemas de latencia del servicio. Busqué una alternativa que cubriera los requisitos a nivel de funcionalidad y diseño, encontrando en la api de TMDB un sustituo perfecto y rápido.

- Las cards se han hecho mas altas para encajar mejor con la temática de los pósters. Se ha sustituido el logo por el mismo motivo.

- He manejado las imagenes tanto de portada como de compañias de las dos peticiones que se hacen a la api de tmdb de manera que se asigna un placeholder en caso de que no venga imagen.

- Se han optimizado las imagenes y se utilizan con el componente de Next Image.

- Apenas he tenido problemas durante el desarrollo mas allá de algún problema con la hidratación del ssr.

- El desarrollo me ha llevado unas 15h

- Cosas que podrían mejorar:
  - Añadir tests básicos o no haber hecho TDD
  - Manejo de errores que eviten que pueda caer la aplicación.
  - Mejorar las animaciones de la interfaz

- Algunos de los recursos consultados durante el desarrollo
- https://nextjs.org/docs
- https://www.dhiwise.com/post/step-by-step-guide-to-nextjs-styled-components
- https://developer.themoviedb.org/docs/getting-started
- https://stackoverflow.com/questions/71706064/react-18-hydration-failed-because-the-initial-ui-does-not-match-what-was-render
- https://vercel.com/
- https://screen-recorder.com/

## Más sobre mi
Tengo una demo de código de mi trabajo actual que puede servir como complemento a esta prueba, donde afronto otro tipo de desafios. Puedes verla en [este repositorio](https://gitfront.io/r/eselva92/GSVUBuEecD8H/ericselva/tree/demo/front-demo/): 







