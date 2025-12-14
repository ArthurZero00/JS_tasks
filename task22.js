/* Task 1: Create an object library with at least three books. 
Each book should be its own object containing properties like title, 
author (string), year (number), and genres (array of strings). Then:
Add a new genre to one book.
Update the year of another book.
Delete a property (e.g. remove author) from the third book. 
*/

let library = {
    books1: { title: "Dune",
             author: "Frank Herbert",
             year: 1965,
             genres: ["Science" , "Fiction", "Adventure"]
            
     },
     books2: { title: "Sapiens",
             author: "Yuval Noah Harari",
             year: 2011,
             genres: ["History", "Non-fiction"]
            
     },
     books3: { title: "Dune",
             author: "Frank Herbert",
             year: 1965,
             genres: ["Science" , "Fiction", "Adventure"]
            
     }
}

library["books1"].genres.push("New genre");
library["books2"].year = 2022;
delete library["books3"].genres;
console.log(library);