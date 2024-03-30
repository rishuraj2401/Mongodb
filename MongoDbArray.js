// $size , //Array--------------------------------------------
const docs={
    _id:234241,
    name:"eruoqwer",
    hobbies:["w","a","c"],
    exp:[
        {company:"amzon"},
        {company:"google"}, {company:"amzon"}
    ]
}

// wiasa docs find kro jiska hobbies "w " ho;
// simple find hobbies:w; monog db array me find kr lega;
// agr exp: google ho; to ye hai array of object , but isme me v simply hi find krega bus "exp.company" krna hai aur quote k andar;

db.collection.find({hobbies:"w"});
db.collection.find({"exp.company":"google"});


// agr hme ye find krna ho ki kitne log 2 company me kaam kr chuke hai;

db.collection.find({exp:{$size:3}})


// greater than 3 k liye;
db.collection.find({exp:{$size:{$gte:3}}})//ye nhi kr skte, kyunki $size sirf array and number pr hi kaam krefa
db.collection.find({$expr:{$gt:[{$size:"exp"}, 3]}})


db.collection.find({hobbies:["w","r"]})// ye wo document find krega jiski hobbies :["w","r"] but ["r","w"] ko nhi find krega;

db.collection.find({hobbies:{$all:["w","r"]}}) //$all sare ko find krega;
db.collection.find({hobbies:{$in:["w","r"]}})// jinka hobbie "w"or "r" se match krta ho


// $elemMatch

const docs2={
    _id:"wrqwe",
    product:[
        {name:"apple",quatity:12 },
        {name:"ple",quatity:10 },
        {name:"app",quatity:1 },

        
    ]
}

//wiasa docs find kro jisme apple ki quahtity 1 ho;
db.collection.find({"product.name":"apple", "product.quantity":1})
// ye upr wala docs2 find krke de dega but ye to glt , upr wale me apple ki quatity 12 hai;


// isko chahiye array ke sigle element to dono properties ho;

db.collection.find({product:{$elemMatch:{name:"apple", quantity:1}}})
db.collection.find({product:{$elemMatch:{name:"apple", quantity:{$gt:1}}}})
