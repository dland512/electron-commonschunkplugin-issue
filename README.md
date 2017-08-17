About
---
This repository displays a potential bug in electron and/or webpack in which using the `CommonsChunkPlugin` to build the main process code results in electron hanging upon start up.

Seteps to reproduce
---
Reproducing the issue:
1. Clone this repo
2. `npm i`
3. `npm start`

You may see the electron icon appear in your task bar or doc but you won't see the main window appear.

Note that webpack puts everything into the `build` directory. There is one bundle for the main proecss (`main.bundle.js`), one for the renderer process (`app.bundle.js`), and one for a common module they both use (`mymodule.js`).

How do I know this is realted to `CommonsChunkPlugin`?
--

I have a javascript module called `mymodule.js` that I'm trying to make its own chunk to be shared by the main and renederer processes.

Open `webpack.main.js`. Comment out the code related to `mymodule` and `CommonsChunkPlugin`, namely these lines:

    entry: {
        main: path.join(__dirname, './main.js'),
        mymod: ['./mymodule'] <-- comment this out
    }
    
and

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('mymod') <-- comment this out
    ]
    
Now rerun `npm start` and everything will work fine. Of course, now it's not using `CommonsChunkPlugin` so you'll see the code for `mymodule` duplicated inside of main.bundle.js.