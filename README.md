# Tasks

This is a fullstack integration with Django and React.js. Use Django-rest-framework for the API. In addition, it has tests both on the frontend and on the backend.

This application allows you to create, read, update and delete (CRUD) tasks. 

## Quickstart

First of all, clone this repo.

```
git clone https://github.com/DD21S/react-django-tasks.git
```

Then, in the project directory, install the requirements.

```
pip install -r requirements.txt
```

Now, make the migrations.

```
python manage.py migrate
```

And finally, run the project.

```
python manage.py runserver
```

Ready, now your API is running :&#41;

---

It's recommended to use a virtual enviroment to run Python web applications.

Create and activate one with these commands:

```
python3 -m venv venv
source venv/bin/activate
```

---

[Here](https://github.com/DD21S/react-django-tasks/tree/main/frontend#getting-started-with-create-react-app) you will find info about the frontend.

## API Routes

| **METHOD**  | **ROUTE**                | **FUNCTIONALITY**   | **ACCESS**  |
| ----------- | ------------------------ | ------------------- | ----------- |
| **GET**     | /api/tasks/              | List tasks          | All         |
| **GET**     | /api/tasks/:id			     | Details task        | All         |
| **POST**    | /api/tasks/              | Create a new task   | All         |
| **PATCH**   | /api/tasks/:id           | Update task	       | All         |
| **DELETE**  | /api/tasks/:id           | Delete task         | All         |
