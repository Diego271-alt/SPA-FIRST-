//en este caso se agrega aún así estes en la nu accede en donde dentor de la carpeta
const path = require('path');
//nps sirve para travajar con html es el plugin de webpack
const HtmlWebpackPlugin=require('html-webpack-plugin');
//en este nodulo es donde va a empezar y donde lo vamos a mandar
// una vez estando en producción


//esta const es para poder escribir los documentos de los estilos
const CopyWebPackPlugin =require('copy-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        //dirname es donde se encuentre ka carpeta pon esta
        path: path.resolve(__dirname,'dist'),
        filename:'main.js',

    },
    resolve:{
        // aquo ponemos las extensiones que vamos a usar 
        extensions:['.js'],
    },
    //reglas para que para que mi proyecto pueda funcionar en cada navegador
    //se va a usar babel
    module: {
        rules: [
            //estructura de babel según el entorno
            {
                //establecemos los valores qeu vamos a filtrar en este caso se hace un regex
                //con ese / establecemos el punto de entrada 
                // con este test vamos a identificar los arcfivos ese regex es una forma de establecer valores a filtra de una ruta etc

                test:/\.js?$/,
                //escluimos los node modules para no incorporar eso es importante quitarlo
                exclude: /node_modules/,
                use:{
                    //en este codigo lo que hacemos es usar una configuraciçon y esta fie la que instalamos anteriomente
                    loader: 'babel-loader',
                }

            }
            
        ]

    },

    //definiendo este plugin vamos a poder acceder a los elementos de html
    plugins: [
        new HtmlWebpackPlugin(
            {
                // con esta instrucción le estamos diciendo que como inyectar valores a html
                inject:true,
                template: './public/index.html',
                filename: './index.html',
            }
        ),
        new CopyWebPackPlugin ([{
                patterns: [{from : './src/styles/main.css', to: ' '}],


        }]
        )
    ]
    

    //extensiones
}
