# Pseudocódigo y sketch
<!-- ![1ª parte](images/ux-ui/1.png) subir imagenes-->

## Nuestra Red Social *Suggestions (SUGG)*

- Proveniente de la palabra en inglés “suggestions” que significa “sugerencias”, ya que al ser una red de recomendaciones, aplicamos el sinónimo sugerencias para definir el nombre de la RS.

### Colores:
- Amarillo ya que transmite alegría, felicidad y energía. Un buen color para el mundo del ocio y perfecto para el mundo de la comunicación y el entretenimiento.

- Azul porque se relaciona con la tecnología, y además al ser un azul oscuro, implica autenticidad, confianza, seguridad y fidelidad. Definiciones que en conjunto queremos transmitir en esta red social.

- Tipografía del logotipo: Grand Hotel, es una fuente regular, que denota ser casual e incluso retro.


- En nuestra red social podrás encontrar recomendaciones de tus amigos sobre lugares para salir; sobre películas y productos en general, también podrás compartir tus propias recomendaciones.

*Nota: Las opciones sobre películas y productos en general son un segundo alcance, por el momento nos enfocaremos en el primero, que es de lugares.*


## Inicio
- Entramos a la web-app, y la primera vista es para iniciar sesión, con dos posibles opciones, ya sea iniciando en la que ya estás registrado, o creando una.

- Una vez iniciada la sesión, encontramos la navegación suplementaria como transparencia para ayudar al usuario a usar la web app, con su correspondiente botón de cerrar.


### Al cerrar la navegación suplementaria nos encontramos la vista principal (newsfeed):
- Logo de red y foto de “mi perfil”
- Icono: Recomendaciones de tus amigos
- Icono: Amigos cercanos
- Menú hamburguesa desplegable: con opciones para el usuario
- Publicaciones del usuario en body: Foto, Texto, botón de guardar, calificación.
- Select con la opción de elegir el tipo de recomendaciones (lugares, películas, productos).


## Elementos header
#### Click en foto de usuario en header: Mi Perfil
- Nos lleva a otra vista, que es el perfil del usuario
- Foto y nombre de usuario
- Botones-iconos de notificaciones(amigos cercanos y recomendaciones de amigos)
- Menú hamburguesa (mismo caso que en el newsfeed)
- Podemos ver las publicaciones de lo que hemos recomendado: Foto, Texto, icono para editar y calificación del lugar.


#### Click botón notificación: Recomendaciones recientes de tus amigos:
- Nos muestra una lista de las recomendaciones que hizo alguno o varios de los amigos del usuario
- Al darle click a alguna de las notificaciones, nos abre un modal.
- En modal se muestra el nombre del usuario que envió ese post, la foto del lugar, comentario y calificación.
- Tendremos la opción de guardar o borrar con sus respectivos iconos, si se elige la opción de guardar, se agregaría a la parte de elementos guardados.


#### Click botón notificación: Tus amigos cerca:
- Nos muestra una lista con las notificaciones de los amigos que se encuentran cerca, al darle click a alguna nos abre un modal en el que se muestra un mapa con la ubicación de donde se encuentra ese amigo.


### Click menú hamburguesa:
#### Desplegable con opciones. visible en cualquier pantalla. Opciones:
- Mis amigos
- Nuestras recomendaciones para ti
- Elementos guardados
- Buscar amigos
- Solicitudes de amistad
- Invitar amigos
- Menú de ayuda
- Configuración
- Cerrar sesión                 


#### Click opción menú hamburguesa: Mis amigos:
- Nos lleva a otra vista en el que sólo se pinta una lista de los amigos que tiene el usuario
- En la lista se muestran las fotos y nombres de los amigos, y un icono con la opción de eliminar.


#### Click opción menú hamburguesa: Nuestras Recomendaciones para ti:
- Nos lleva a otra vista
- Header
- h1: Nuestras recomendaciones para ti
- Publicaciones de los lugares que buscan promoción, se muestra una lista con los logos de los lugares y una calificación y comentario
- Al hacer click a alguno se abre un modal con el mapa de ubicación.


#### Click botón notificación: Elementos guardados:
- Nos lleva a otra vista.
- Se muestra el header, y las publicaciones guardadas como en la vista del newsfeed y del perfil de usuario.


#### Click opción menú hamburguesa: Buscar amigos:
- Nos lleva a otra vista en el que sólo se pinta un input de búsqueda
- Al escribir en el input de búsqueda se van pintando los nombres y fotos que coincidan. (tendrá un filtro).


#### Click opción menú hamburguesa: Solicitudes de amigos:
- Nos muestra una lista con los nombres y fotos de los amigos que envían la solicitud y dos botones, uno de agregar y otro de eliminar.


#### Click opción menú hamburguesa: Menú de ayuda (navegación suplementaria:
- Nos lleva a la vista principal con el menú en transparencia como si volvieramos a iniciar sesión.


#### Click opción menú hamburguesa: Configuración:
- Nos lleva a otra vista en el que sólo se muestra una lista con los elementos a configurar (privacidad, ubicación, cambiar nombre de usuario, cambiar foto de perfil, cambiar contraseña, etc).


#### Click opción menú hamburguesa: Cerrar sesión:
- Despliega una alerta en la que se muestra el mensaje “¿Estás seguro que deseas cerrar sesión?” y dos botones, uno de cancelar y otro de aceptar
- Al darle click en el botón de aceptar, se cerrará la ventana y se mostrará el menú desplegable, al darle en el botón de aceptar, se cerrará la sesión y se mostrará la primer vista en la que se muestra el logo de la red y los botones de iniciar sesión o crear cuenta.
- Al darle click en cancelar se cerrará la alerta.


## Elementos body

### Click en select con tres opciones (lugares, películas, productos):

#### Opcion Lugares:
- Se muestran las publicaciones con la foto del lugar, comentarios abajo, del lado derecho el icono de editar en el caso de perfil o de guardar o borrar en el caso de newsfeed, y a un lado de ellos, el icono de una estrella con la calificación (del 1 al 5)

#### Text Area para escribir recomendación:
- Se encuentra como primer elemento en el body y se muestra un textarea en el que el usuario podrá escribir algún comentario, elegir su ubicación y el lugar en el que se encuentra, y del lado derecho se muestra la calificación que le da al lugar y el botón de submit para enviar su recomendación.
