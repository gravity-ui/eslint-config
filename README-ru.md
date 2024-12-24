# @gravity-ui/eslint-config

## Установка

```
npm install --save-dev eslint @gravity-ui/eslint-config
```

## Использование

В корне проекта создайте файл `.eslintrc` и добавьте в него следующий код:

```json
{
  "extends": "@gravity-ui/eslint-config",
  "root": true
}
```

Добавьте файлы конфигурации для клиента и сервера в соответствующие директории:

```json
{
  "extends": "@gravity-ui/eslint-config/server"
}
```

```json
{
  "extends": "@gravity-ui/eslint-config/client"
}
```

### Prettier

При использовании инструмента Prettier дополните корневую конфигурацию следующими правилами:

```json
{
  "extends": ["@gravity-ui/eslint-config", "@gravity-ui/eslint-config/prettier"],
  "root": true
}
```

### a11y

Для проверки доступности дополните корневую конфигурацию следующими правилами:

```json
{
  "extends": ["@gravity-ui/eslint-config", "@gravity-ui/eslint-config/a11y"],
  "root": true
}
```

### Порядок

Для организации порядка импорта модулей дополните корневую конфигурацию следующими правилами:

```json
{
  "extends": ["@gravity-ui/eslint-config", "@gravity-ui/eslint-config/import-order"],
  "root": true
}
```
