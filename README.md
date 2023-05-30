# @gravity-ui/eslint-config

## Install
```
npm install --save-dev eslint @gravity-ui/eslint-config
```

## Usage
Add `.eslintrc` file in the project root with the following content:

```json
{
    "extends": "@gravity-ui/eslint-config",
    "root": true
}
```

Add client and server config files in corresponding directories:

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
If you are using Prettier, extend root config with the additional rules:

```json
{
    "extends": ["@gravity-ui/eslint-config", "@gravity-ui/eslint-config/prettier"],
    "root": true
}
```

### a11y
If accessibility of your interface is important to you, then you can use this config:

```json
{
    "extends": ["@gravity-ui/eslint-config", "@gravity-ui/eslint-config/a11y"],
    "root": true
}
```
