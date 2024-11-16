# MDZ Tech

MDZ-Tech es una aplicación de e-commerce desarrollada con React Native y Expo. La aplicación permite a los usuarios registrarse, iniciar sesión, navegar por productos, agregar productos al carrito, y realizar compras. Además, la aplicación utiliza SQLite para la persistencia de datos y Firebase para la autenticación y la base de datos en tiempo real.

## Características Principales

- **Autenticación de Usuarios**: Registro y inicio de sesión utilizando Firebase Authentication.
- **Navegación de Productos**: Navega por una lista de productos organizados por categorías.
- **Carrito de Compras**: Agrega productos al carrito y realiza compras.
- **Persistencia de Datos**: Usa SQLite para almacenar y recuperar datos entre sesiones.
- **Uso de la Cámara y Ubicación**: Implementación de funcionalidades de cámara y ubicación.

## Instalación

### Requisitos Previos

- Node.js
- npm 
- Expo (SDK 51)
- Adroid Studio

### Pasos de Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/mdz-tech.git
    cd mdz-tech
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Inicia el proyecto con Expo:

    ```bash
    npx expo start
    ```

## Uso

1. **Registro y Autenticación**:
    - Abre la aplicación y navega a la pantalla de registro.
    - Ingresa tu email y contraseña, y completa el registro.
    - Inicia sesión con las credenciales registradas.

2. **Navegación de Productos**:
    - Navega por la lista de productos y categorías.
    - Selecciona un producto para ver más detalles.

3. **Carrito de Compras**:
    - Agrega productos al carrito.
    - Navega al carrito para ver los productos agregados.
    - Realiza la compra.

4. **Persistencia de Datos**:
    - La aplicación utiliza SQLite para almacenar y recuperar datos entre sesiones.

5. **Perfil de Usuario**

   - Utiliza la cámara para tomar una foto y agregarla como imagen de perfil.

6. **Lugares Favoritos**

   - Utiliza la ubicación del dispositivo para agregar lugares favoritos.
   - Visualiza tus lugares favoritos en un mapa.


## Tecnologías Utilizadas

- **React Native**: Para el desarrollo de la aplicación móvil.
- **Redux Toolkit**: Para la gestión del estado global.
- **Firebase**: Para la autenticación y la base de datos en tiempo real.
- **SQLite**: Para la persistencia de datos local.
- **Expo**: Para el desarrollo y la ejecución de la aplicación.
- **react-native-toast-message**: Para mostrar mensajes de toast.
- **react-native-vector-icons**: Para usar íconos vectoriales.
- **react-native-maps**: Para mostrar mapas y marcadores.
- **expo-image-picker**: Para seleccionar y tomar fotos con la cámara.
- **expo-location**: Para obtener la ubicación del dispositivo.

## Dependencias

- `@react-navigation/bottom-tabs`: ^6.6.1
- `@react-navigation/native`: ^6.1.18
- `@react-navigation/native-stack`: ^6.11.0
- `@reduxjs/toolkit`: ^2.3.0
- `expo`: ~51.0.28
- `expo-font`: ~12.0.10
- `expo-image-picker`: ~15.0.7
- `expo-linear-gradient`: ~13.0.2
- `expo-location`: ~17.0.1
- `expo-splash-screen`: ~0.27.7
- `expo-sqlite`: ~14.0.6
- `expo-status-bar`: ~1.12.1
- `react`: 18.2.0
- `react-native`: ^0.74.5
- `react-native-map`: ^0.0.1
- `react-native-maps`: 1.14.0
- `react-native-safe-area-context`: 4.10.5
- `react-native-screens`: 3.31.1
- `react-native-toast-message`: ^2.2.1
- `react-native-vector-icons`: ^10.2.0
- `react-redux`: ^9.1.2
- `yup`: ^1.4.0
- `expo-dev-client`: ~4.0.29
