# @yandex-cloud/eslint-config

## Install
```
npm install --save-dev eslint @yandex-cloud/eslint-config
```

## Usage
Add `.eslintrc` file in the project root with the following content:

```json
{
    "extends": "@yandex-cloud/eslint-config",
    "root": true
}
```

Add client and server config files in corresponding directories:

```json
{
    "extends": "@yandex-cloud/eslint-config/server"
}
```

```json
{
    "extends": "@yandex-cloud/eslint-config/client"
}
```

### Prettier
If you are using Prettier, extend root config with the additional rules:

```json
{
    "extends": ["@yandex-cloud/eslint-config", "@yandex-cloud/eslint-config/prettier"],
    "root": true
}
```
