
# Sensorial

> Despliegue local de los componentes del producto **Sensorial**

![alt text](img/sensorial.png)

## Requisitos

* docker 20.10.9
* docker-compose 1.26.2

## Uso

1. Levantar la aplicacion corriendo lo siguiente:

    ```sh
    make s
    ```

2. Cargar la base de datos usando los scripts de mongo en la carpeta *resources*

3. Para dar de baja los contenedores ejecutar:

    ```sh
    make f
    ```

## Puertos

### Sensorial componentes

* **front**: 80
* **base**: 8080
* **back**: 5000
* **raspberry**: 6000

### Herramientas

* **mongo-exporess**: 9000
* **dozzle**: 9001

## Accesos

### Mongodb

* **user**: sensorial
* **pass**: sensorial
