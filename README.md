# Service Manager Project

## Nombre del proyecto
Service Manager Project

## Descripción
Este proyecto es una pequeña API/servicio en Node.js para gestionar un catálogo de servicios. La lógica principal está encapsulada en la clase `ServiceManager`, que permite crear, consultar, actualizar y eliminar servicios en memoria.

Está pensado como una base simple para sistemas que necesiten administrar recursos de tipo `services` sin depender de una base de datos externa.

## Requisitos
- Node.js 18 o superior
- npm

## Cómo instalar
1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd service-manager-project
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` a partir del ejemplo:
   ```bash
   cp .env.example .env
   ```
   En Windows:
   ```powershell
   copy .env.example .env
   ```

## Cómo ejecutar
Ejecuta la aplicación con:
```bash
npm run dev
```

Esto levanta el servidor en `src/app.js` usando Node.js en modo de desarrollo.

## Variables de entorno necesarias
El proyecto exige las siguientes variables definidas en el archivo `.env`:

```env
NODE_ENV=development
PORT=3000
```

### Descripción
- `NODE_ENV`: entorno de ejecución (`development`, `production`, etc.).
- `PORT`: puerto donde se ejecutará el servidor.

La validación de estas variables se realiza en `config/env.config.js` y la aplicación no arrancará si faltan.

## Recurso `services`
El recurso `services` representa la colección de servicios disponibles en la aplicación. Cada servicio tiene la siguiente estructura:

```js
{
  id: "uuid",
  name: "Nombre del servicio",
  description: "Descripción detallada",
  duration:"Duración del servicio",
  price: 2500,
  category: "Categoría del servicio",
  available: true
}
```

### Propiedades
- `id`: identificador único generado con `crypto.randomUUID()`.
- `name`: nombre del servicio.
- `description`: detalle del servicio.
- `duration`: duración del servicio.
- `price`: valor del servicio.
- `category`: categoría del servicio.
- `available`: indica si el servicio está disponible o no.

La colección se guarda en memoria dentro de la instancia de `ServiceManager`.

## Métodos disponibles
La clase `ServiceManager` en `managers/ServiceManager.js` incluye estos métodos:

- `getServices()`
- `getServiceById(id)`
- `createService(name, description, price, available)`
- `updateService(id, updatedData)`
- `deleteService(id)`

## Ejemplos de uso
### Importar el gestor
```js
import ServiceManager from "./managers/ServiceManager.js";

const serviceManager = new ServiceManager();
```

### Obtener todos los servicios
```js
const services = serviceManager.getServices();
console.log(services);
```

### Crear un servicio
```js
const newService = serviceManager.createService(
  "Limpieza de hogar",
  "Servicio de limpieza general para viviendas",
  3500,
  true
);

console.log(newService);
```

### Buscar un servicio por ID
```js
const service = serviceManager.getServiceById(newService.id);
console.log(service);
```

### Actualizar un servicio
```js
const updatedService = serviceManager.updateService(newService.id, {
  price: 4200,
  available: false,
});

console.log(updatedService);
```

### Eliminar un servicio
```js
const deletedService = serviceManager.deleteService(newService.id);
console.log(deletedService);
```

## Estructura del proyecto
```text
service-manager-project/
├── .env.example
├── config/
│   └── env.config.js
├── managers/
│   └── ServiceManager.js
├── src/
│   └── app.js
├── package.json
├── README.md
└── .gitignore
```

## Nota
Este proyecto usa almacenamiento en memoria, por lo que los datos se reinician cada vez que se reinicia la aplicación. Si deseas persistencia, puede ampliarse con una base de datos o almacenamiento local.
