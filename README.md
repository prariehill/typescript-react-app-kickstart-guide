# React TypeScript kickstart

This gitbook serves as a guide for kickstarting a new React project with preconfigured Redux, TypeScript, Sass, Storybook and unit testing.

## Prerequisites

These tools are needed to start developing.

```bash
# nvm
brew install nvm

# node (latest lts version)
nvm install --lts
# set latest stable lts as default
nvm alias default stable
# be tripple shure you use the right node version
nvm use default

# yarn
brew install yarn --without-node
```

## Editor
We recommend to use [VSCode](https://code.visualstudio.com/) as editor. 
Install the following Extensions:
* `TSLint` -> linting support directly in editor ([marketplace](https://marketplace.visualstudio.com/items?itemName=eg2.tslint))
* `Type safe React & Redux Snippets in TypeScript` -> Snippets for boilerplate code as shown in Cookbook ([marketplace](https://marketplace.visualstudio.com/items?itemName=Sandstorm.vscode-awesome-ts-react-redux-snippets))

## Cookbook
In the cookbook you will find skeletons for important modules. These skeletons are also available for VSCode as snippets in the VSCode [marketplace](https://marketplace.visualstudio.com/items?itemName=Sandstorm.vscode-awesome-ts-react-redux-snippets).

## Example (Component with defaultProps)

> Look, ma! Intellisense!

<img alt="component with defaultProps example" src="images/Component&defaultProps.gif" style="max-height: 90vh;">

## Contribute

1. Fork this repo 
2. Run `npm install` 
3. Make changes
4. Test changes with `npm run build` and serve it locally (e.g. with `serve _book`, install `serve` with `npm install -g serve`)
5. Create a pull request. 

We're looking forward to your contributions!
