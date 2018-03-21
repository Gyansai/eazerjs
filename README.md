<h2 style="text-align: center; font-size: 30px">EazerJS</h1><hr/>

## What is EazerJS ?

Eazer.js is a powerful DOM engine wich allow you to build HTML websites with Javascript only.

## Getting started
 
 EazerJS works with 3 importent things : `components`, `aliases` and `content`.

 * First create HTML page including EazerJS. ( https://cdn.rawgit.com/dimensi0n/eazerjs/master/lib/dist/eazer.min.js )

 ```html
 <!DOCTYPE html>
 <html>
    <head>
        <meta charset="utf-8"/>
        <title>An amazing EazerJS page</title>

        <!-- Inlude EazerJS -->
        <script src="https://cdn.rawgit.com/dimensi0n/eazerjs/master/lib/dist/eazer.min.js"></script>
    </head>
    <body></body>
    <script>
        // Here you will write your JS code.
    </script>
 </html>
  ```

  *You can also create a js file and include it after the body tag.*

  * You have to create components.

  ```javascript
  // In your script
  const Title = {
      type: "h1",
      style: "font-family: Arial",
      class: "your-class-name-if-there-is-one",
      id: "your-id-if-there-is-one"
  }
  ```

  * Then you have to create aliases.

  ```javascript
  const aliases = {
      MyTitle: Title,
      MySecondTitle: Title
  }
  ```

  *An alias can be used only one time*

  * Then you have to create the content.

  ```javascript
  let content = {
      MyTitle: "The super title of my website",
      MySecondTitle: "The second super title of my website"
  }
  ```
  * Finally you have to init the Page class and render the page.

  ```javascript
  const page = new Page()
  page.render(content, aliases)
  ```

  *You can also use a global style for the page (The Link to the future doc about GlobalStyle)*

  It will render that : 

  ```html 
  <div class="page">
    <h1 class="your-class-name-if-there-is-one" id="your-id-if-there-is-one" style="font-family: Arial"></h1>
  </div>
  ```

  Good luck : )

  Div, Link and Images are special components take a look here : The Link to the future doc about Specials Components (Div, Link & Images).