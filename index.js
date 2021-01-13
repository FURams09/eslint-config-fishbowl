module.exports = {
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  "overrides": [
    {
      "files": [
        "server/**/*"
      ],
      "rules": {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "array-bracket-spacing": [
      "warn",
      "always",
      {
        "objectsInArrays": false
      }
    ],
    "arrow-parens": [
      0
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "indent": [
      "warn",
      2
    ],
    "max-len": [
      "error",
      {
        "code": 120,
        "comments": 200,
        "ignoreTrailingComments": true
      }
    ],
    "no-trailing-spaces": [
      "error"
    ],
    "object-curly-newline": [
      "warn",
      {
        "ObjectExpression": {
          "minProperties": 2,
          "multiline": true
        }
      }
    ],
    "object-curly-spacing": [
      "warn",
      "always",
      {
        "arraysInObjects": false
      }
    ],
    "object-property-newline": [
      "error"
    ],
    "quotes": [
      "warn",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "react/react-in-jsx-scope": 0,
    "semi": 1,
    "sort-imports": [
      "warn",
      {
        "allowSeparatedGroups": true,
        "ignoreCase": true,
        "ignoreDeclarationSort": true,
        "memberSyntaxSortOrder": [
          "all",
          "single",
          "multiple",
          "none"
        ]
      }
    ],
    "sort-keys": [
      "warn",
      "asc",
      {
        "caseSensitive": false,
        "natural": true
      }
    ]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}