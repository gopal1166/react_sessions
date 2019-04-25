# session 6: axios get 

Date: 17/03/2019

---------------------------------------------

package: axios

installing: `npm install axios`

syntax: 

```
axios.get('url')
.then((response) => {console.log(response)})
.catch((error) => {console.log(error)})

```

where: one life cycle method
```
componentDidMount() {
    //api calling (get, post, put and delete)
}
```

Store the response tempororly in state

To render the list of objects to the screen we'll use map() fun:

```
var employees = [
  {id: 1, name: "GOpal"},
  {id: 2, name: "Mahesh"}
]

employees.map((obj) => {
  console.log(obj.name)
})
```

url: use dummy REST API `jsonplaceholder`

work: `axios post, put, patch and delete`