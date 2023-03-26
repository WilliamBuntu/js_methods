// const scores = [10,34,23,14,45,11,30,21]

// const result= scores.filter((score)=>{

//     return score > 20
// })
// console.log(result)
 users = [
    {name:'buntu',premium:true},
    {name:'Martial',premium:true},
    {name:'Gaju',premium:false},
    {name:'Alain',premium:true},
    {name:'Queen',premium:false},
    {name:'Gelio',premium:true},
    {name:'Sheezy',premium:false},
    {name:'TEta',premium:true}
 ]


 const premiumUsers = users.filter(user => user.premium)
 console.log(premiumUsers)