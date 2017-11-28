## About Varie


> **Note:** This repository contains the core code of the Varie framework. If you want to build an application using Varie, visit the main [Varie repository](https://github.com/variejs/varie).


Varie is a framework built ontop of VueJS, and was built in effort to build simple, but powerful vue applications.

### Features : 
 
- A simple routing Engine built on top of Vue Router
    - Routing Middleware
- State management - Vuex with a bit of magic
- A dependency injection container 
- Web pack configuration made easy (Mix)
- HTTP Middleware
- Plugins
- And more!

Varie is built with simplicity in mind, making it easier to get your product out the door.

## Installation

1. Install Varie CLI
    `npm install -g varie-cli`
2. Create new project
    `varie new <my-project>`

## Contributions
1. Setup
    1. git clone git@github.com:CodePier/varie-framework.git 
        * run yarn install
        * run `npm link` inside the varie-framework folder
    2. git clone git@github.com:CodePier/varie.git
        * run yarn install
        * run `npm link varie` inside the varie folder
2. Building
    1. `npm run dev` - builds the framework / application once
    2. `npm run watch` - watches for change and rebuilds the application

## License

The Varie framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).