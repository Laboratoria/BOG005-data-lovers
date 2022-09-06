# Data Lovers
# juegos olimpicos Rio 2016
## Índice
### Paso a paso 
* [1. Definición del producto](#1-definición-de-producto)
* [2. prototipo](#2-primera-historia-de-usuario)
* [3. Primera historia de usuario](#3-primera-historia-de-usuario)
* [4. Segunda historia de usuario](#4-segunda-historia-de-usuario)
* [5. Tercera historia de usuario](#5-tercera-historia-de-usuario)
* [6. Testeo de usabilidad](#6-hacker-edition)


***

## 1. Definición del producto

Creamo esta aplicación web para brindarle a los usuarios la obtención de información refrente a los atletas que participaron y ganaron una o mas medallas en las olimpiadas de Rio 2016. Con una interfaz minimalista y a la vez colorida los usuarios tendran la oportunidad de hacer busqueda por medio de varios filtros y un plus de saber dato curioso.


## 2. Prototipo
[Desktop, page1](src/IMAGENES/DESCK%20PAGE%201.png)
[Desktop, page2](src/IMAGENES/DESCK%20PAGE%202.png)

[Mobile, page1](src/IMAGENES/MOBILE%20PAGE1.png)
[Mobile, page2](src/IMAGENES/MOBILE%20PAGE%202.png)

## 3. Primera historia de usuario

COMO: AFISIONADO AL DEPORTE
QUE: INPUT PARA FILTRAR ATLETAS POR DEPORTE
PARA: IR DIRECTO A LA INFORMACIÓN QUE DESEO

CRITERIO DE ACEPTACIÓN: FILTRAR Y VISUALIZAR ATLETAS POR DEPORTE
TERMINADO: VISUALIZAR EN LISTA NOMBRES DE LOS ATLETAS, Y OTROS DOS DATOS

### 4. Segunda historia de usuario

COMO: Deportista
QUE: Select para ordenar por orden alfabético
PARA: Ubicar con más facilidad el nombre que quiero

CRITERIO DE ACEPTACIÓN: Ordenar filtrado previo de la a-z y de la z-a
TERMINADO: VISUALIZAR el filtrado ordenado

#### 5 Tercera historia de usuario

Como: Amante de la historia deportiva
Que: botón para visualizar los atletas con mayor cantidad de medallas ganadas
Para: tener la información específica

Calcular el atleta con mayor medallas ganadas
Criterios de aceptación:
- por medio de un botón que el usuario tenga la posibilidad de calcular los atletas con mayor cantidad de medallas ganadas
- que el usuario visualice en pantalla(arriba de las cards el resultado del calculo)



###### Testeos de usabilidad

En el primer testeo: nos dimos cuenta que la menera como mostrabamos la  información de los atletas no era la mejor(en una lista, mostrando solo los nombres).. 
Iteración de diseño: en vez de una sola lista y ya, devidimos por cards, dando espacio entre cada una y dandole un color mas vivo.

En el segundo testeo: observamos que era complicado para el usuario escribir los nombres de los atletas en el input.
Iteración de diseño: Quisimos usar el input pero está vez cambiamos a tipo de medalla, en este caso el usuario solo debe escribir alguna de las tres opciones de medalla.

En el tercer testeo: Teníamos un boton que nos regresaba a la pagina de inicio. Analizando su funcionalidad observamos que su uso era innecesario.
Iteración de diseño: eliminamos ese botón, y creamos en el footer, el cual al realizar alguna busqueda apareza al final de la página y que nos lleve a la vista principal (nav) de la misma segunda pagina





