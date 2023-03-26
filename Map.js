// const scores = [10,34,23,14,45,11,30,21]

// const mapedScores = scores.map(score => score/2)
// console.log(mapedScores)

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

 const updatedProducts = products.map(product => {
    if(product.price > 20){
        return { name:product.name, price:product.price/2}
    }else{
       return { name:product.name, price:product.price}
    }
 })

 console.log(updatedProducts)