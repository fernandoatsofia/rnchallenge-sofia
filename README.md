# React Native Challenge - Sofía

## Instrucciones
  - Clona este repositorio
  - Instala las dependencias:
```
yarn
```
  - Corre el proyecto:
```
react-native run-ios
```
ó
```
react-native run-android
```
  - Crea una branch local con el nombre que tu quieras, más tu nombre.
  - Crea un componente llamado ItemsList y declararlo dentro de App.js
  - Haz una llamada a una API (la que sea de tu preferencia, aunque te sugiero algunos ejemplos en la parte de abajo) y muestra los datos en el componente ItemsList
  - Ordena la lista por orden alfabético o filtra la lista por búsqueda de palabra (agregando un input).
  - Bonus Ponts por implementación de alguna librería css con sus clases y/o implementación de clase y estilos propios
  - Genera un commit y haz push

Ejemplos a llamadas a APIs (utilizando Axios y JSONPlaceholder):
```
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users'

const listService = () => {
  axios.get(url)
  .then((response) => {
    // handle success
    console.log(response);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
};

export default listService;
```

### Alternativas a Axios:

  - Fetch API https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  - Superagent https://visionmedia.github.io/superagent/

### Alternativas a JSONPlaceholder:

  - https://randomuser.me/
  - https://reqres.in/