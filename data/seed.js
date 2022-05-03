const routesProperty=require('./properties');
const routesUser=require('./users');


//  let numOfStudents=10;
//     for(let i= 0;i<=numOfStudents ;i ++){
//         try{
//             let NewUser=routesUser.createUser("User :"+i, "Demo Lastname :"+i, "User"+i+"@demo.edu", 1, 12345667890, "User@"+i);
//         }
//         catch(error){
//                 console.log(error);

//         }

//     }

//     let numOfBrokers=10;
//     for(let i= 0;i<=numOfBrokers ;i ++){
//         try{
//             let NewUser=routesUser.createUser("Broker :"+i, "Demo Lastname :"+i, "Broker"+i+"@demo.com", 1, 12345667890, "Broker@"+i);
//         }
//         catch(error){
//                 console.log(error);

//         }

//     }
function addProperty1(){
    let numOfProps=10;
    for(let i= 0;i<=numOfProps ;i ++){
        try{
            let newProperty1=routesProperty.createProperty(
                "Property :"+i+Math.random(), "Street :"+i+",Demo Ave", i+3423, "city"+i, "state"+i,"Townhouse",5,3,2,true,
                false,true,true,"School 3","101 Pharmacy","Bus stop",5000,0,
                5000,1,1,"Broker :"+i,true
            );
            // let newProperty2=routesProperty.createProperty(
            //     "Property :"+i+2, "Street :"+i+",Demo Ave", i+3423, "city"+i, "state"+i,"Appartment",3,2,1,false,
            //     true,false,false,"School 2","A1 pharmacy","Path station",2500,3000,
            //     2500,1,1,"Broker :"+i,true
            // );
            // let newProperty3=routesProperty.createProperty(
            //     "Property :"+i+3, "Street :"+i+",Demo Ave", i+3423, "city"+i, "state"+i,"Basement",2,1,0,true,
            //     true,true,false,"School 1","Legit pharmacy","paths tation",1300,2400,
            //     1300,0,1,"Broker :"+i,true
            // );
        }
        catch(error){
                console.log(error);

        }

    }
}
function addProperty2(){
    let numOfProps=10;
    for(let i= 0;i<=numOfProps ;i ++){
        try{
            // let newProperty1=routesProperty.createProperty(
            //     "Property :"+i+1, "Street :"+i+",Demo Ave", i+3423, "city"+i, "state"+i,"Townhouse",5,3,2,true,
            //     false,true,true,"School 3","101 Pharmacy","Bus stop",5000,0,
            //     5000,1,1,"Broker :"+i,true
            // );
            let newProperty2=routesProperty.createProperty(
                "Property :"+i+2, "Street :"+i+",Demo Ave", i+3423, "city"+i, "state"+i,"Appartment",3,2,1,false,
                true,false,false,"School 2","A1 pharmacy","Path station",2500,3000,
                2500,1,1,"Broker :"+i,true
            );
            // let newProperty3=routesProperty.createProperty(
            //     "Property :"+i+3+Math.random(), "Street :"+i+",Demo Ave", i+3423, "city"+i, "state"+i,"Basement",2,1,0,true,
            //     true,true,false,"School 1","Legit pharmacy","paths tation",1300,2400,
            //     1300,0,1,"Broker :"+i,true
            // );
        }
        catch(error){
                console.log(error);

        }

    }
}
function addProperty3(){
    let numOfProps=10;
    for(let i= 0;i<=numOfProps ;i ++){
        try{
            // let newProperty1=routesProperty.createProperty(
            //     "Property :"+i+1, "Street :"+i+",Demo Ave", i+3423, "city"+i, "state"+i,"Townhouse",5,3,2,true,
            //     false,true,true,"School 3","101 Pharmacy","Bus stop",5000,0,
            //     5000,1,1,"Broker :"+i,true
            // );
            // let newProperty2=routesProperty.createProperty(
            //     "Property :"+i+2, "Street :"+i+",Demo Ave", i+3423, "city"+i, "state"+i,"Appartment",3,2,1,false,
            //     true,false,false,"School 2","A1 pharmacy","Path station",2500,3000,
            //     2500,1,1,"Broker :"+i,true
            // );
            let newProperty3=routesProperty.createProperty(
                "Property :"+i+3+Math.random(), "Street :"+i+",Demo Ave", i+3423, "city"+i, "state"+i,"Basement",2,1,0,true,
                true,true,false,"School 1","Legit pharmacy","paths tation",1300,2400,
                1300,0,1,"Broker :"+i,true
            );
        }
        catch(error){
                console.log(error);

        }

    }
}

 function random(){
   var i  = Math.floor(Math.random()*20)%4;
   if(i<=0) return random();
   return i;
 }
 function execute(){
   var i = random();
   eval('addProperty'+i+'()');
 }
 execute();
 execute();
 execute();