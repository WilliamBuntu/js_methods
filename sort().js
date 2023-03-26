const products = [
    {name:'gold star',price:14},
    {name:'banana shell',price:6},
    {name:'mashroom',price:26},
    {name:'red pells',price:40},
    {name:'apples',price:15},
    {name:'green shells',price:23},
    {name:'blue shells',price:30},
    {name:'bonus mango',price:10}
 ]

 const newProducts = products.sort( (a,b) => a.price - b.price)
 console.log(newProducts , products)