// Ejercicio no.4 manejo de objetos y arreglos
//Nota: 
//1. En cada una de las funciones deberás de usar el parametro feed para realizar las operaciones
//2. A partir de la función no 3 se deberá de regresar como resultado el arreglo de tweets con todas sus propiedades y ////// valores actualizados acorde a las operaciones de cada uno
const {feed} = require('./source');
/*
1. Obtener el numero total de Tweets
Input: feed -> [{propiedades...}, {propiedades...}]
Output: 2
*/
const countTweets = (feed) => {};

/*
2. Obtener un arreglo con todos los perfiles de usuarios que están en el arreglo de tweets
Input: feed -> [{profile: "AJ + Español"},{ profile: "Elon Musk" }]
Output: ["AJ + Español", "Elon Musk"]
*/

const getProfiles = (feed) => {}

/*
3. Crear una función para obtener el arreglo de tweets con todas sus propiedades pero se tendrá que agregar un '@' al inicio del valor para la propiedad username
Input:  feed -> [{username: "ajplusespanol", ...},{ username: "elonmusk", ... }]
Output: [{username: "@ajplusespanol"}, {username: "@elonmusk"}]
*/

const updateUsername = (feed) => {}

/*
4. Crear una función para actualizar el no de interacciones de cada tweet 
para que en los casos donde haya más de 1000 (likes, comentarios, retweets) 
se muestre el noInteracción/1000 y la palabra mil
Input: feed -> [
    {
        interaction: {
            comments: 6700,
            retweets: 3700,
            likes: 84000
        }
    },
    { 
        interaction: {
            comments: 17600,
            retweets: 1300,
            likes: 78800
        }
    }]
Output: arregloTweets -> [
    {
        interaction: {
            comments: "6.7 mil",
            retweets: "3.7 mil",
            likes: "84 mil"
        }
    },
    { 
        interaction: {
            comments: "17.6 mil",
            retweets: "1.3 mil",
            likes: "78.8 mil"
        }
    }]
*/

const updateInteraction = (feed) => {

}

/*
5. Función para obtener todos los tweets que tengan más de "n" comentarios y mostrarlos de la misma forma que el punto no 4
Input: 

    feed -> [
        { 
            interaction: {
                comments: 5,
                retweets: 66,
                likes: 126
            }
        },
        {
            interaction: {
                comments: 6700,
                retweets: 3700,
                likes: 84000
            }
        },
        { 
            interaction: {
                comments: 17600,
                retweets: 1300,
                likes: 78800
            }
        }
    ]

    noComments -> 1000


Output: feed -> [
    {
        interaction: {
            comments: "6.7 mil",
            retweets: "3.7 mil",
            likes: "84 mil"
        }
    },
    { 
        interaction: {
            comments: "17.6 mil",
            retweets: "1.3 mil",
            likes: "78.8 mil"
        }
    }]
*/
const getTweetsGreaterThan = (feed, noComments) => {

}

/*
6. Función para obtener todos los tweets que tengan un numero menor o igual de "n" comentarios y mostrarlos de la misma forma que el punto no 4
Input: 

    feed -> [
        { 
            interaction: {
                comments: 5,
                retweets: 66,
                likes: 126
            }
        },
        {
            interaction: {
                comments: 6700,
                retweets: 3700,
                likes: 84000
            }
        },
        { 
            interaction: {
                comments: 17600,
                retweets: 1300,
                likes: 78800
            }
        }
    ]

    noComments -> 1000


Output: arregloTweets -> [
    {
        interaction: {
            comments: "6.7 mil",
            retweets: "3.7 mil",
            likes: "84 mil"
        }
    },
    { 
        interaction: {
            comments: "17.6 mil",
            retweets: "1.3 mil",
            likes: "78.8 mil"
        }
    }]
*/
const getTweetsLessOrEqualsThan = (feed, noComments) => {

}

/*
    7. Función para obtener todos los tweets que tengan un numero mayor de "n" [interacción] y mostrarlos de la misma forma que el punto no 4
    
    Input =========

    feed -> [
        { 
            interaction: {
                comments: 5,
                retweets: 66,
                likes: 126
            }
        },
        {
            interaction: {
                comments: 6700,
                retweets: 3700,
                likes: 84000
            }
        },
        { 
            interaction: {
                comments: 17600,
                retweets: 1300,
                likes: 78800
            }
        }
    ]
    interaction -> "likes",
    quantity -> 85000

    Output =============
    [
        { 
            interaction: {
                comments: 17600,
                retweets: 1300,
                likes: 78800
            }
        }
    ]

*/
const getTweetsGreaterThanInteraction = (feed, interaction, quantity) => {

}