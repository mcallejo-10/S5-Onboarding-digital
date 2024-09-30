

# Onboarding Digital en Angular

Este proyecto es una aplicación de Onboarding Digital construida utilizando **Angular**, diseñada para mostrar frases y imágenes de manera interactiva. Esta aplicación permite navegar entre diferentes los pasos utilizando botones, proporcionando una interfaz simple y atractiva.

## Tecnologías Utilizadas

- **Angular 18.2.4**
- **HTML5**
- **SASS** (para estilos avanzados)
- **Bootstrap 5** (para estilos y diseño responsivo)

## Características

- **Creación de Componentes**: La aplicación se divide en componentes reutilizables, facilitando su mantenimiento y evolución.
- **Creación de Interfaces**: Se han creado interfaces para definir los datos de los pasos del onboarding.
- **Servicios**: Uso de servicios para gestionar los datos de los pasos, separando la lógica de negocio del componente.
- **Comunicación entre Componentes**: Se utilizan entradas (Input) y salidas (Output) para pasar datos entre componentes padre e hijo.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/mcallejo-10/S5-Onboarding-digital.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd S5-Onboarding-digital
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

1. Para iniciar la aplicación, ejecuta:
   ```bash
   ng serve
   ```
2. Abre tu navegador y navega a `http://localhost:4200/`.

## Estructura del Proyecto

- **src/app/components**: Contiene los componentes de la aplicación.
- **src/app/services**: Contiene los servicios utilizados para manejar los datos del onboarding.
- **src/assets**: Contiene las imágenes que se muestran en los pasos del onboarding.
  
## Funcionalidades Principales

- La aplicación tiene varios pasos (`steps`) que muestran una frase y una imagen asociada.
- Puedes navegar entre los diferentes pasos usando los botones de **Avanzar** y **Retroceder**.
- Cada paso tiene un propósito único y está claramente definido, siguiendo la filosofía de Angular de dividir la aplicación en componentes pequeños y reutilizables.



