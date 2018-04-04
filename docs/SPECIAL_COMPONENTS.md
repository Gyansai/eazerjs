# Special components for EazerJS

* ## Div

To create a div, first, you have to create a component.

```javascript
const Container = {
    type: "div"
}
```

Then you have to create an alias.

```javascript
let aliases = {
    row: Container
}
```

Finally you can use it into your content like this.

```javascript
let content = {
    row: {
        //The container content
    }
}
```

Example : 

```javascript
const Title = {
    type: "h1",
}
const Container = {
    type: "div",
    style: "font-family: Arial"
}

let aliases = {
    page-title: Title,
    row: Container
}

let content = {
    row: {
        page-title: "This page title is in the row div"
    }
}
```

*The div can be used only one time, you can't do that :*

```javascript
let content = {
    row: {
        other-row: {
            //Your content
        }
    }
}
```