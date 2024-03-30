
use('intern_data')
db.data.find({intensity:{$lt:12}})
db.data.find({intensity:{$lt:12}})
db.data.find({intensity:{$lte:12}})
 // it will find intensity which is less than 12


db.data.find(filter,option)
db.data.findOne(filter,option)

// Crud operation
// create: insertOne, insertMany , {insert v sirf kamm krega but ye purana tareeka hogya}
db.data.updateOne(filter,data, options);
db.data.updateMany(filter,data, options);
db.data.replaceOne(filter,data, options);

db.data.deleteOne(filter,option)
db.data.deleteMany(filter,option)

// read
//  findone ek document return krega 
// find : ek cursor return krega ,jispe hum operations lga skte hai;
db.data.find(filter).forEach((x)=>printjson(x))
db.data.find(filter).limit(2)
db.data.find(filter).limit(2).skip(10)
const filter={intensity:{$lt:12, $gt:10}}

db.data.find({intensity:{$lt:12, $gte:6}}).limit(2)

// use school : command to use school database if it does not exist then it will automatically created
//  show collections : it will show the collection present in the database;

db.data.insertOne({});
db.data.insertMany([{},{},{}]); // yha array of documents aayenge

db.students.insertOne({name:"Rishu"}) // if students naam ka databse nhi h to ye create krega ,aur uske badh insert krega;

// db.data.updateOne(filter,data, options);
// db.data.updateMany(filter,data, options);
db.students.updateOne({name:"Rishu"},{$set:{name:"RishuRaj", class:"Btech"}})

db.students.deleteMany({}) // delete all data;

// Projection

//  let say hme sare attribute nhi show krwane hai, isko bolenge projection 
// or ye hm options me dal skte hai;

db.data.find({},{intensity:1}) // isse sirf intensity filed hi dikhega , but iske sath sath _id v dikh ayega default, 
// to jo field nhi dikhane hai
db.data.find({},{intensity:1,_id:0});

//  mongodb is schemaless, hme khud schema maintain krke chalan pdta hai;

// MOngodb datatypes

// Text, Boolean , Number, {Integer-- (32), NumberLong---(64), NumberDecimal}

// ObjectId, ISODate, Timestap, Array, Emb. Document;


db.data.insertOne({name:"Amazon", isFunded:true, funding:2344566757, 
employee:[{name:"vipul", age:23}, {name:"Ramesh", age:50}], foundedOn: new Date, foundedOnTime: new Timestamp() })

// result would be : Text, Boolean, number , array of object , date, timestamp;
// timestamp me ek "i" hota hai, suppose hum insert many krhe hai toh sbka timstamp ek hi aajayega toh pehchanege kaise kon sa phle hua hai kon sa badh me toh i:1,2,3...


// for dropping a database: 
db.dropDatabase(); // jis database me hai wo delete ho jayega;

db.students.drop(); // it will delete the collection named students;
                    // matlab simple hai na , hum students me jaise find kr rhe the  wiase hi student drop function use kr rhe hai;
   
// options

let option={order:true} // or false , isko krne se order me insert hoga, or false krne me order follow nhi karega , 
                            // like agr hum insertMany kr rhe hai aur ek ki id same hai error aayega lekin uske badh wale jo shi rhenge wo insert hojayege ;
// option me write concern aata hai==> 
//  option= {writeConcern:{w:0,j:0,wtimeout:1000}}
// w=> ack, j=> write in jornol, and timeout

//  VALIDATION IN MONGODB

db.createCollection("school", {
   validator:{
       $jsonSchema:{
        required:["name", "price"],
        properties:{
            name:{
                bsonType:'string',
                description: 'must in string'
            },
            price:{
                bsonType:'number',
                description:'must be number and required'
            }
        }
       }
   },
    validationAction:"warn" // default "error", invalidate hone pr ek error dega ek only warn krke execute ho jayega


},
)
db.createCollection("college") /// isse se database me college naam ka collection create hogya;

const validator={
    validator:{
        $jsonSchema:{
            required:["name", "price"],
            properties:{
                name:{
                    bsonType:'string'
                }
            }
        }
    }
} /// ye ban validator isko direct chipka do collection me; 

db.createCollection("college2", validator)



 Atomicity in mongodb
// if a document have 50 field :( document means one object  ) to yaa to pura document insert hoga ya ek v nhi , same for delete and update

// But if multiple document insert ho rhe hai to , 10 krna tha and 5 ke badh connection cut gya to 5 insert ho hi jayenege, 
// so we can say atomicity is for document level


// for importing json file in mongodb databaase we need to install , mongodb command line toolbar, install krke, bin path ko env variable me save kr lena hai
// uske badh command line me aana hai, 
// json file ka path likhna hai, database name , collection name, aur ye batana hai h ki isme jsonArray hai ek json document nhi hai, aur agr phle se collection present ho to use drop kr do

const cmd = cmd//mongoimport path -d databaseName -c collection name --josnArray --drop


var comaparison_operator_={$eq, $gt,$lt, $gte,$lte, $in:"in", $nin:"not in"}


db.student.find({age:5})
db.student.find({age:{$eq:5}})
db.student.find({age:{$gte:5}})
db.student.find({age:{$in:[5,4,6,7]}}) // age 5,4,6,7 aisa kuch hoga to result aa jayega;

db.school.insertOne({name:"Raj", dob:{year:2040, month:"jan"}})


db.school.find({dob:{year:2000,month:"jan"}})// sare filed dalenge dob to aise find out ho jayega
                            // but if we want ki sirf year se find out kre 

db.school.find({'dob.year':2000})  // important : colon ke andar neste query work krti hai,aur hm colong normally v use kr skte hai;








