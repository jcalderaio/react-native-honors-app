# eslint-plugin-class-property

Enforces semicolon after class properties

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-class-property`:

```
$ npm install eslint-plugin-class-property --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-class-property` globally.

## Usage

Add `class-property` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "class-property"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "class-property/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here
