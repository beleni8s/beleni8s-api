# Loopback 4

## Creating a project

```bash
sudo npm install -g @loopback/cli

lb4 app --help
export PROJECT_NAME="beleni8s-api"
# Application class name
export APP_CLASS_NAME="StarterApplication"
export APP_CLASS_NAME="TodoListApplication"
# Project description
export PROJECT_DESC="Beleni8s' RESTful API"
lb4 app ${PROJECT_NAME} --description "${PROJECT_DESC}" --out-dir "${PROJECT_ROOT_DIR}" --applicationName "${APP_CLASS_NAME}"
```

## A First Endpoint

## References

* https://loopback.io/getting-started.html
