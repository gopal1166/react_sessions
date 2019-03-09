# session 3 

Date: 09/03/2019

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

}
```

state defining and using 

rendering state propeties inside the return ()


calling class component inside the fuction componet

props :

passing props to the child component
accessing data using props inside the child components

To access the props data

in class based:

	this.props.propetry

in function based:

	props.propety

















