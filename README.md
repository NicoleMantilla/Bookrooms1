git clone <url_del_repositorio>

css
Copy code
2. Instala las dependencias del frontend:
cd frontend
npm install

css
Copy code
3. Instala las dependencias del backend:
cd backend
pip install -r requirements.txt

markdown
Copy code

## Uso

1. Inicia el servidor backend:
cd backend
python api.py

markdown
Copy code
2. Inicia el servidor frontend:
cd frontend
npm start

markdown
Copy code
3. Abre tu navegador web y visita [http://localhost:3000](http://localhost:3000) para ver la aplicación en acción.

## Funcionalidades

- **Lista de habitaciones:** Muestra una lista de habitaciones disponibles con detalles como nombre, descripción y imagen.
- **Búsqueda de habitaciones:** Permite a los usuarios buscar habitaciones según el número de adultos, niños, bebés y precio máximo.

## Tecnologías utilizadas

- React: Frontend de la aplicación.
- Flask: Backend de la aplicación.
- HTML, CSS, Sass: Maquetación y estilos de la aplicación.

## Contribución

Si quieres contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu contribución: `git checkout -b feature/nueva-funcionalidad`
3. Realiza tus cambios y haz commits: `git commit -am 'Agrega una nueva funcionalidad'`
4. Sube tus cambios a tu repositorio: `git push origin feature/nueva-funcionalidad`
5. Crea un nuevo pull request en GitHub.
