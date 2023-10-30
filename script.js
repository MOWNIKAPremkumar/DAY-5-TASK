//1.  JSON iterate for loops (For, For in, for of, forEach)

var car = [{
    "Name": "i20",
  "company": "Hyundai",
  "variants": ["sports", "Asta", "Magna","Era"],
  "Fuel Type": ["Diesel","Petrol"],
  "Body type": "Hatchback",
  "Ratings": ["5","4","3","2","1"],
  "keyFeatures": ["Airbag","Alloy Wheel", "Foglights", "power steering", "AC"]      
  }];
  console.log(car);

  // For loop
  for ( var i=0;i<car.length;i++){
    console.log(car[i].keyFeatures);
    };
  
  // For in loop
   for ( var a in car){
  console.log(car[a].variants);
  }
  
// For of 
for ( var val of car){
    console.log(val.keyFeatures);
    }
 
// for each 
      car.forEach(function(b) { console.log(b.Ratings); });


//--------------------------------------------------------*****------------------------------------------------------------

//2.RESUME DATA IN JSON FORMAT

let MYRESUME={
"PROFILE":{
"Name"     : "N. MOWNIKA",
"Email"    : "mowni02mani09@gmail.com",
"PhoneNumber": "8807666600",
"Github"   : "https://github.com/MOWNIKAPremkumar"
},

"OBJECTIVE":{

"Objective":"Looking for an IT Job"
},

"EDUCATIONAL QUALIFICATION":[{

"Degree"    : "BA English Literature ",
"PERCENTAGE":  "68%",
"Year of passing":  "2018",
"College"   : "Vellalar College for women",
"Affiliated University": "Bharathiar University",
"Higher Secondary":  "Year of passing -2015",
"School"    : "Bharathi Matriculation and Higher secondary School",
"PERCENTAGE":  "71%",
"SSLC"      :  "Year of passing -2013",
"School"    : "Bharathi Matriculation and Higher secondary School",
"PERCENTAGE":  "82%"
}],

"TECHNICAL QUALIFICATION":[{

"Typewriting"  :  "Higher Grade in English in 2017",
"Typewriting"  :  "Higher Grade in Tamil in 2018",
"Software used": ["Microsoft Office, Word, PPT, Excel"]
}],

"STRENGTH":{

"Positive strength":["Confident, Determined and Positive thinking"],

"Key strength":["Hardworking, Disciplined and sincere in work"]
},

"PERSONAL DETAILS":[{

"Age"           :  "25 years",
"Date of Birth" :  "02.06.1998",
"Marital Status":  "Married",
"Husband Name"  :  "Manikandan.G",
"Address"       :  ["RKSAdharvaa,Backside of rainbow Avenue,sengathurai road,kadampadi,Kangaiyampalayam,sulur"],
"District"      :  "Coimbatore ",
"Pincode"       :  "641 401"
}],

"DECLARION":{

"Declaration"   : "I hereby declare that all the information given above is true and correct to the best of my knowledge"
}
}
console.log(MYRESUME);


