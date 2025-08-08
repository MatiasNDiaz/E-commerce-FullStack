# 🛒 IFor Importados - E-Commerce de Tecnología

> Proyecto full stack de un **E-Commerce de productos tecnológicos**.  
> Incluye registro y login de usuarios, landing page, catálogo con filtros por categorías, dashboard de usuario, carrito con total dinámico, detalle de productos, página de error 404 y protección de rutas.

---

## 🎯 Descripción

**IFor Importados** es una tienda online desarrollada con un stack moderno, pensada para ofrecer una experiencia de compra clara, rápida y segura.

Cuenta con:

- 🔐 **Registro y Login** con validaciones completas.
- 🏠 **Landing Page** atractiva.
- 🛍️ **Catálogo de productos** con filtros por categorías.
- 📊 **Dashboard** con información del usuario y sus compras.
- 🛒 **Carrito de compras** con cálculo automático del total.
- 📄 **Vista de detalle** de cada producto.
- 🚫 **Página de error 404** y **protección de rutas** para mayor seguridad.

---

## 🛠️ Tecnologías usadas

<table>
  <thead>
    <tr>
      <th>Frontend</th>
      <th>Backend</th>
      <th>Base de Datos</th>
      <th>Estilos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40"/><br/>React<br/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="40"/><br/>Next.js<br/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40"/><br/>JavaScript<br/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40"/><br/>TypeScript
      </td>
      <td align="center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40"/><br/>Node.js<br/>
        <img src="https://typeorm.io/images/logo.svg" width="40"/><br/>TypeORM
      </td>
      <td align="center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="40"/><br/>PostgreSQL
      </td>
      <td align="center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40"/><br/>HTML5<br/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40"/><br/>CSS3<br/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="40"/><br/>Tailwind CSS
      </td>
    </tr>
  </tbody>
</table>

---

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/MatiasNDiaz/E-commerce-FullStack.git
cd E-commerce-FullStack
code .
```

---

### 2. Configuración de variables de entorno

Para que el backend funcione correctamente, es necesario configurar un archivo `.env` en la carpeta raíz del **backend** con las variables necesarias para la conexión a la base de datos, el puerto del servidor y el secreto JWT.

### 📄 Ejemplo de archivo `.env`

```env
# Puerto en el que correrá el servidor
PORT=3000

# Configuración de la Base de Datos PostgreSQL
DB_NAME=nombre_de_tu_base_de_datos
DB_USER=usuario_de_postgres
DB_PASSWORD=contraseña_de_postgres
DB_HOST=localhost
DB_PORT=5432

# Clave secreta para JWT
JWT_SECRET=clave_secreta_segura

## ⚙️ Configuración de variables de entorno


```
---

```ts
El archivo `envs.ts` carga las variables de entorno usando la librería `dotenv` y exporta las constantes para usarlas en el proyecto.

// src/config/envs.ts
import dotenv from "dotenv";
dotenv.config();

export const PORT: number = Number(process.env.PORT) || 3000;
export const DB_NAME: string = process.env.DB_NAME || "";
export const DB_USER: string = process.env.DB_USER || "";
export const DB_PASSWORD: string = process.env.DB_PASSWORD || "";
export const DB_HOST: string = process.env.DB_HOST || "";
export const DB_PORT: number = Number(process.env.DB_PORT) || 5432;
export const JWT_SECRET: string = process.env.JWT_SECRET || "";
```

## 🗄️ Configuración de la conexión a la base de datos

En este proyecto usamos **TypeORM** para manejar la conexión con PostgreSQL.
El archivo `data-source.ts` define la configuración principal del DataSource, 
utilizando las variables de entorno que definimos en `envs.ts`.

```ts
import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Order } from "../entities/Order";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";

export const AppDataSource = new DataSource({
  type: "postgres",         // Tipo de base de datos
  host: DB_HOST,            // Host de la base de datos
  port: DB_PORT,            // Puerto de conexión
  username: DB_USER,        // Usuario de la base de datos
  password: DB_PASSWORD,    // Contraseña del usuario
  database: DB_NAME,        // Nombre de la base de datos
  synchronize: true,        // Sincroniza automáticamente el esquema (NO usar en producción)
  logging: false,           // Desactiva logs en consola
  entities: [               // Entidades usadas en el proyecto (tablas)
    User, Credential, Order, Product, Category
  ],
  subscribers: [],          // Suscriptores (listeners)
  migrations: [],           // Migraciones pendientes
});
```

### 3. Instalar dependencias

en la carpeta back: npm install

en la carpeta front: npm install

---

### 4. Ejecutar la aplicación

Para iniciar el back: npm start 
<img width="1006" height="431" alt="image" src="https://github.com/user-attachments/assets/186b4a52-33fe-4be6-8f8e-cd6b0de5d2da" />



Para iniciar el front: npm run dev 
<img width="1013" height="436" alt="image" src="https://github.com/user-attachments/assets/2799858f-f0a0-4ac6-bf59-296262f576f0" />


---


### 5.📋 Funcionalidades principales

- 🔐 **Sistema de registro y autenticación**  con validaciones robustas para garantizar la seguridad y correcta gestión de usuarios.
- 🏠 **Landing Page**  moderna, optimizada para brindar una experiencia de usuario atractiva e intuitiva.
- 🛍️ **Catálogo de productos**  dinámico con filtrado avanzado por categorías para facilitar la búsqueda y selección.
- 📊 **Dashboard personalizado**  que muestra el historial detallado de compras y la información relevante del usuario.
- 🛒 **Carrito de compras persistente**, eliminar productos del carrito, el mismo utiliza `localStorage` para mantener los productos agregados incluso después de cerrar o recargar la página, mostrando el total actualizado en tiempo real.
- 📄 **Vista detallada de cada producto**,  con descripciones, imágenes y especificaciones completas.
- 🚫 **Página 404 personalizada** y **protección de rutas privadas**  para asegurar una navegación segura y controlada.

---

### Imagenes de cortecia de la Aplicación:

vistas sin estar logueado:

<img width="1901" height="967" alt="image" src="https://github.com/user-attachments/assets/ecac5725-62ba-470b-bda2-a783b4a0e8e8" />

<img width="1899" height="965" alt="image" src="https://github.com/user-attachments/assets/01377b82-9d0c-431d-a77e-00a6e6f6c075" />

<img width="1899" height="965" alt="image" src="https://github.com/user-attachments/assets/0a688069-95d6-40a0-bcb0-f5df27fea3c0" />

<img width="1900" height="967" alt="image" src="https://github.com/user-attachments/assets/70310c02-c7ce-446c-be94-1ac75624187b" />

<img width="1897" height="968" alt="image" src="https://github.com/user-attachments/assets/537c2468-5cd0-4103-bdf5-71aae8677176" />

<img width="1919" height="970" alt="image" src="https://github.com/user-attachments/assets/53126fdf-f0ec-4ad6-8843-608ec7a17b35" />



vistas estando logueado:

<img width="1902" height="964" alt="image" src="https://github.com/user-attachments/assets/48be3a09-e206-4cde-9d75-11f961f9f5d5" />

<img width="1919" height="969" alt="image" src="https://github.com/user-attachments/assets/0349bb48-56a5-421a-ac08-f42a9a5f9bf6" />

<img width="1919" height="970" alt="image" src="https://github.com/user-attachments/assets/db28e478-a928-470f-83c3-f58fcf93a9f4" />


---


## 🎓 Sobre este proyecto

Este e-commerce fue desarrollado como parte de mi formación full stack, aplicando un stack moderno y buenas prácticas de desarrollo.
Es una solución escalable y adaptable a otros tipos de productos.

---

## 🙌 ¡Gracias por visitar el repositorio!

Si te gustó el proyecto o querés aportar, no dudes en dejar un ⭐ o abrir un *issue* o *pull request*. ¡Toda colaboración suma!

---

*Desarrollado con ❤️ y muchas ganas de seguir aprendiendo.*



### 🧑‍💻 Autor
Matías Nahuel Diaz
[GitHub](https://github.com/MatiasNDiaz) | [LinkedIn](https://www.linkedin.com/in/matias--diaz/)


