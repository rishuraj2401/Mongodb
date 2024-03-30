var_Evaluation_operator={$expr, $jsonSchema, $mod, $regex,$text};

// $expr: ye kahanni lega
db.collection.find({$expr:{$gt:["$field1", "$field2"]}}); // field1> field2
db.collection.find({$expr:{$lt:["$price",{$avg:"$price"}]}})// waise documents jisme price avg price se chota hai;
db.collection.aggregate({$project:{sum:{$expr:{$add:["$a","$b"]}}}}) //jb arithmetic operator lagate hai to array of field lete hai, 
              // jaise $gt on prices, avg of prices , addition , yha tk ki $or, $and ye sb v array of field hota hai;


// $regex    : waose value jo is regular expression se match kr rha ho;
 db.school.find({about:{$regex:'/^A/'}})      // regular expression starting with A;

//$text: ye usi field pr kaam krega jis par index create kra hua hai;
// you must create a text index on the fields you want to seach , it allow mongodb to search specific words and phrase in that field
db.school.createIndex({question:"text"});
db.school.find({$text:{$search:"is what"}}); // jis v question field me what and is hoga wo dhund ke de dega , ye hm goAsk me v use kiye hai;


// $mod

db.find({quantity:{$mod:[3,0]}})// us quatity wale field k o find kijiye jisko 3 se divide krne pe 0 remiander aa rha ho;
