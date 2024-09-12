My To-Do List App

🛠 Estado: En desarrollo

My To-Do List App es una aplicación web creada con React para la gestión de tareas pendientes. En su versión actual, permite agregar, marcar como completadas y eliminar tareas, así como filtrar las tareas según su estado (todas, completadas, incompletas). Se planean múltiples mejoras y nuevas características en futuras versiones.

Características actuales
Agregar tareas a la lista.
Marcar tareas como completadas.
Eliminar tareas de la lista.
Filtrar tareas según su estado (todas, completadas, incompletas).
Persistencia del filtro a través de LocalStorage, de modo que las preferencias del usuario no se pierden al recargar la página.
Instalación

Clona este repositorio:

bash
Copiar código
git clone https://github.com/tuusuario/my-todo-app.git
cd my-todo-app

Instala las dependencias:

bash
Copiar código
npm install

Inicia la aplicación localmente:

bash
Copiar código
npm start
La aplicación estará disponible en http://localhost:3000/.

Tecnologías utilizadas
React: Librería de JavaScript para la construcción de interfaces de usuario.
LocalStorage: Para guardar la configuración del filtro de tareas.
CSS: Para los estilos básicos de la aplicación.
Características futuras
La aplicación está en sus primeras etapas de desarrollo. En futuras versiones, se implementarán nuevas características, como:

Backend: Se añadirá un backend con autenticación para permitir que los usuarios guarden sus tareas de manera permanente en la nube.
Gestión de tareas tipo Kanban: Se añadirá una funcionalidad de tipo Kanban para organizar las tareas en diferentes estados (pendiente, en progreso, completada).
Fechas de vencimiento y recordatorios: Los usuarios podrán asignar fechas límite a las tareas, con notificaciones o recordatorios.
Soporte multiusuario: Cada usuario tendrá acceso a su propio tablero de tareas, gestionadas con autenticación.
Diseño responsive: Se mejorará la interfaz para ofrecer una experiencia más fluida en dispositivos móviles.
Contribuciones
¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue los pasos a continuación:

Haz un fork del proyecto.
Crea una rama para tu nueva funcionalidad (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz un commit (git commit -m 'Añadir nueva funcionalidad').
Haz push a tu rama (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.
Contacto
Si tienes preguntas o sugerencias, no dudes en contactar a través de manureina87@gmail.com.