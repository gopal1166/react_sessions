# session 2: Getting started with React

Date: 04/04/2019

---------------------------------------------


React 

Hello world

installation required:
```
Node.js 
npm 
```

```
node -v
npm -v
```

To create our project:

```
& npx create-react-app project_name
```

Go to the project directory
```
$ cd project_name
```
# To start development server
```
$ npm start
```

Project folder structure:

```
	node_modules/  : to store the dependencies
	src/			: where code resides
		App.js		: Root component
		index.js	: entry point (App.js is called)
	package.json	: To list out the installed dependencies
	.gitignore		: To ignore the node_modules while pushing to github repo
```




React components:

2 types:

1 function based
2. class based

1.function based
syntax:

() => <div></div>



after defining
we've to export
then we've to import and use


export/import two types:

1. default
2. named

default:

	default export:
		we'll use default keyword after export
	default import:
		we dont't use {}


named:

	name export:
		we dont use default keyword
	named import:
		we'll use { components }



class based components:

```
syntax:
import React, { Component } from 'react'

class ComponentName extends Component {
	render() {
			return(
				JSX conent
			)
	}
}
```

madatory method `render()`

after defining the component
import and call the component inside the App.js



















