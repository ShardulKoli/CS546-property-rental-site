function filterData() {
  const userBroker = {
    _id: 1,
    firstName: "Eren",
    lastName: "Yeager",
    email: "email@gmail.com",
    userType: "Broker",
    contact: 123123123,
    ownedProp: [],
    isActive: true,
  };

  const userUser = {
    _id: 1,
    firstName: "Eren",
    lastName: "Yeager",
    email: "email@gmail.com",
    userType: "Broker",
    contact: 123123123,
    bookMarkedProp: [],
    rentedProp: [],
  };

  const property1 = {
    _id: 1,
    name: "Property 1",
    address: "Some Address in Heights 1",
    pincode: "07307",
    city: "Jersey City",
    state: "New Jersey",
    type: "Apartment",
    beds: 3,
    baths: 2,
    balcony: 1,
    centralAir: false,
    petFriendly: true,
    partyFriendly: true,
    garrage: false,
    nearBySchools: "Stevens",
    nearByMedical: "Pharmacy",
    nearByCommute: "Commute list",
    rent: 2000,
    brokerage: 500,
    deposit: 500,
    minimumLeasePeriod: 12,
    images: [],
    broker: 1,
    status: true,
    isActive: true,
  };

  const property2 = {
    _id: 2,
    name: "Property 2",
    address: "Some Address in Heights 2",
    pincode: "07307",
    city: "Jersey City",
    state: "New Jersey",
    type: "Apartment",
    beds: 2,
    baths: 1,
    balcony: 0,
    centralAir: false,
    petFriendly: false,
    partyFriendly: true,
    garrage: false,
    nearBySchools: "Stevens",
    nearByMedical: "Pharmacy",
    nearByCommute: "Commute list",
    rent: 150,
    brokerage: 0,
    deposit: 100,
    minimumLeasePeriod: 12,
    images: [],
    broker: 1,
    status: true,
    isActive: true,
  };

  const property3 = {
    _id: 3,
    name: "Property 3",
    address: "Some Address in Heights 3",
    pincode: "07307",
    city: "Hoboken",
    state: "New Jersey",
    type: "Apartment",
    beds: 3,
    baths: 2,
    balcony: 1,
    centralAir: false,
    petFriendly: true,
    partyFriendly: true,
    garrage: false,
    nearBySchools: "Stevens",
    nearByMedical: "Pharmacy",
    nearByCommute: "Commute list",
    rent: 2500,
    brokerage: 1000,
    deposit: 1000,
    minimumLeasePeriod: 6,
    images: [],
    broker: 2,
    status: true,
    isActive: true,
  };

  const property4 = {
    _id: 4,
    name: "Property 4",
    address: "Some Address in Heights 4",
    pincode: "07307",
    city: "Hoboken",
    state: "New Jersey",
    type: "Apartment",
    beds: 3,
    baths: 1,
    balcony: 1,
    centralAir: true,
    petFriendly: true,
    partyFriendly: true,
    garrage: true,
    nearBySchools: "Stevens",
    nearByMedical: "Pharmacy",
    nearByCommute: "Commute list",
    rent: 1500,
    brokerage: 500,
    deposit: 500,
    minimumLeasePeriod: 12,
    images: [],
    broker: 1,
    status: true,
    isActive: true,
  };

  var propArr = [];
  propArr.push(property1);
  propArr.push(property2);
  propArr.push(property3);
  propArr.push(property4);

  /*for (let i = 0; i < propArr.length; i++) {
  console.log("PROP ARR " + i + " ID :: "+propArr[i]._id);
  console.log("PROP ARR " + i + " address :: "+propArr[i].address);
  console.log("PROP ARR " + i + " balcony :: "+propArr[i].balcony);
  console.log("PROP ARR " + i + " baths :: "+propArr[i].baths);
  console.log("PROP ARR " + i + " beds :: "+propArr[i].beds);
  console.log("PROP ARR " + i + " broker :: "+propArr[i].broker);
  console.log("PROP ARR " + i + " brokerage :: "+propArr[i].brokerage);
  console.log("PROP ARR " + i + " centralAir :: "+propArr[i].centralAir);
  console.log("PROP ARR " + i + " city :: "+propArr[i].city);
  console.log("PROP ARR " + i + " deposit :: "+propArr[i].deposit);
  console.log("PROP ARR " + i + " garrage :: "+propArr[i].garrage);
  console.log("PROP ARR " + i + " images :: "+propArr[i].images);
  console.log("PROP ARR " + i + " isActive :: "+propArr[i].isActive);
  console.log("PROP ARR " + i + " minimumLeasePeriod :: "+propArr[i].minimumLeasePeriod);
  console.log("PROP ARR " + i + " name :: "+propArr[i].name);
  console.log("PROP ARR " + i + " nearByCommute :: "+propArr[i].nearByCommute);
  console.log("PROP near" + i + " ByMedical ID :: "+propArr[i].nearByMedical);
  console.log("PROP ARR " + i + " nearBySchools :: "+propArr[i].nearBySchools);
  console.log("PROP ARR " + i + " partyFriendly :: "+propArr[i].partyFriendly);
  console.log("PROP ARR " + i + " petFriendly :: "+propArr[i].petFriendly);
  console.log("PROP ARR " + i + " pincode :: "+propArr[i].pincode);
  console.log("PROP ARR " + i + " rent :: "+propArr[i].rent);
  console.log("PROP ARR " + i + " state :: "+propArr[i].state);
  console.log("PROP ARR " + i + " status :: "+propArr[i].status);
  console.log("PROP ARR " + i + " type :: "+propArr[i].type);
  }*/

  const map1 = new Map();
  map1.set('address','Some Address in Heights 4');
  map1.set('balcony',null);
  map1.set('baths',null);
  map1.set('beds',null);
  map1.set('centralAir', true);
  map1.set('city', "Hoboken");
  map1.set('garrage', null);
  map1.set('nearByCommute', null);
  map1.set('nearByMedical', null);
  map1.set('nearBySchools',"Stevens");
  map1.set('partyFriendly', null);
  map1.set('petFriendly', null);
  map1.set('pincode', null);
  map1.set('state', null);

  let idFlag=false;
  let filteredList = [];
  let addrFlag=false,balconyFlag=false,bathFlag=false,bedFlag=false,airFlag=false,cityFlag=false,garrageFlag=false,leaseFlag=false,
    commuteFlag=false,medicalFlag=false,schoolFlag=false,partyFlag=false,petFlag=false,pinFlag=false,stateFlag=false;

  for (let i = 0; i < propArr.length; i++) {
    //Setting values of respective flags true if filters are present for those values.
    const filterMap = new Map();
    if(null!= map1.get('address')){
        addrFlag=true;
        filterMap.set('address',map1.get('address'));
    } 
    if(null!= map1.get('balcony')){
        balconyFlag=true;
        filterMap.set('balcony',map1.get('balcony'));
    } 
    if(null!= map1.get('baths')){
        bathFlag=true;
        filterMap.set('baths',map1.get('baths'));
    } 
    if(null!= map1.get('beds')){
        bedFlag=true;
        filterMap.set('beds',map1.get('beds'));
    } 
    if(null!= map1.get('centralAir')){
        airFlag=true;
        filterMap.set('centralAir',map1.get('centralAir'));
    } 
    if(null!= map1.get('city')){
        cityFlag=true;
        filterMap.set('city',map1.get('city'));
    } 
    if(null!= map1.get('garrage')){
        garrageFlag=true;
        filterMap.set('garrage',map1.get('garrage'));
    } 
    if(null!= map1.get('nearByCommute')){
        commuteFlag=true;
        filterMap.set('nearByCommute',map1.get('nearByCommute'));
    } 
    if(null!= map1.get('nearByMedical')){
        medicalFlag=true;
        filterMap.set('nearByMedical',map1.get('nearByMedical'));
    } 
    if(null!= map1.get('nearBySchools')){
        schoolFlag=true;
        filterMap.set('nearBySchools',map1.get('nearBySchools'));
    } 
    if(null!= map1.get('partyFriendly')){
        partyFlag=true;
        filterMap.set('partyFriendly',map1.get('partyFriendly'));
    } 
    if(null!= map1.get('petFriendly')){
        petFlag=true;
        filterMap.set('petFriendly',map1.get('petFriendly'));
    } 
    if(null!= map1.get('pincode')){
        pinFlag=true;
        filterMap.set('pincode',map1.get('pincode'));
    } 
    if(null!= map1.get('state')){
        stateFlag=true;
        filterMap.set('state',map1.get('state'));
    } 

    let count1= 0, count2=0;
    for (let [key, value] of filterMap) {
        //console.log(key + " :: "+ value);
        //console.log(propArr[i].address + " :: "+propArr[i].centralAir + " :: "+ propArr[i].city+ " :: "+ propArr[i].nearBySchools);
        count1++;
        if(key==="address"){
            if(JSON.stringify(value) === JSON.stringify(propArr[i].address)) count2++;
        }else if(key==="balcony"){
            if(JSON.stringify(value) === JSON.stringify(propArr[i].balcony)) count2++;
        }else if(key==="baths"){
            if(JSON.stringify(value) === JSON.stringify(propArr[i].baths)) count2++;
        }else if(key==="beds"){
            if(JSON.stringify(value) === JSON.stringify(propArr[i].beds)) count2++;
        }else if(key==="centralAir"){
            if(JSON.stringify(value) === JSON.stringify(propArr[i].centralAir)) count2++;
        }else if(key==="city"){
            if(JSON.stringify(value) === JSON.stringify(propArr[i].city)) count2++;
        }else if(key==="garrage"){
            if(JSON.stringify(value) === JSON.stringify(propArr[i].garrage)) count2++;
        }else if(key==="nearByCommute"){
            if(JSON.stringify(value) === JSON.stringify(propArr[i].nearByCommute)) count2++;
        }else if(key==="nearByMedical"){
            if(JSON.stringify(value) === JSON.stringify(propArr[i].nearByMedical)) count2++;
        }else if(key==="nearBySchools"){
            if(JSON.stringify(value) === JSON.stringify(propArr[i].nearBySchools)) count2++;
        }else if(key==="partyFriendly"){
            if(JSON.stringify(value) === JSON.stringify(propArr[i].partyFriendly)) count2++;
        }else if(key==="petFriendly"){
            if(JSON.stringify(value) === JSON.stringify(propArr[i].petFriendly)) count2++;
        }else if(key==="pincode"){
            if(JSON.stringify(value) === JSON.stringify(propArr[i].pincode)) count2++;
        }else if(key==="state"){
            if(JSON.stringify(value) === JSON.stringify(propArr[i].state)) count2++;
        }
    }
    if(count1==count2){
        //console.log("PUSHING INTO FILTERED LIST");
        filteredList.push(propArr[i]);
    } 
    //console.log(count1 + " = " + count2);
  }

  /*for (let i = 0; i < filteredList.length; i++) {
    console.log(filteredList[i]);
  }*/
}
module.exports = {
  filterData
}