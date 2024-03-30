var Logical_operator={$and,$or, $nor, $xor}

db.student.find({$or:[{age:{$lte:5}},{age:{$gt:10}}]}) // find me phle operator aayega and then array of condtion or filter
db.student.find({age:{$gt:5},name:"Riss"}) ;
db.student.find({$and: [{age:{$gt:5}},{name:"Riss"}]}) //is case me direct v likhte to $and jaisa hi kaam krta ;
// but
db.student.find({age:{$gte:5}, age:{$lte:10}})// is case me same key hai to last wala json execute hoga sirf 
                                            // to yha pe $and lgane pr hi kaam karega

var existance_and_typeCheck ={$exists:true, $type:"bool"} 
//koi aisa field do kuch document me present hai kuch me nhi to 
db.school.find({mobileNo:{$exist:true}})
db.school.find({mobileNo:{$exist:true, $type:"number"}})    
