function filterData(propArr, map1) {
  console.log("In validation :");
  console.log(propArr);
  console.log(map1);

  let idFlag = false;
  let filteredList = [];
  let addrFlag = false,
    balconyFlag = false,
    bathFlag = false,
    bedFlag = false,
    airFlag = false,
    cityFlag = false,
    garrageFlag = false,
    leaseFlag = false,
    commuteFlag = false,
    medicalFlag = false,
    schoolFlag = false,
    partyFlag = false,
    petFlag = false,
    pinFlag = false,
    stateFlag = false,
    rentFlag = false;

  for (let i = 0; i < propArr.length; i++) {
    //Setting values of respective flags true if filters are present for those values.
    const filterMap = new Map();
    // if(null!= map1.get('address')){
    //     addrFlag=true;
    //     filterMap.set('address',map1.get('address'));
    // }
    if (null != map1.get("balcony")) {
      balconyFlag = true;
      filterMap.set("balcony", map1.get("balcony"));
    }
    if (null != map1.get("baths")) {
      bathFlag = true;
      filterMap.set("baths", map1.get("baths"));
    }
    if (null != map1.get("beds")) {
      bedFlag = true;
      filterMap.set("beds", map1.get("beds"));
    }
    if (null != map1.get("centralAir")) {
      airFlag = true;
      filterMap.set("centralAir", map1.get("centralAir"));
    }
    if (null != map1.get("city")) {
      cityFlag = true;
      filterMap.set("city", map1.get("city"));
    }
    if (null != map1.get("garrage")) {
      garrageFlag = true;
      filterMap.set("garrage", map1.get("garrage"));
    }
    if (null != map1.get("nearByCommute")) {
      commuteFlag = true;
      filterMap.set("nearByCommute", map1.get("nearByCommute"));
    }
    if (null != map1.get("nearByMedical")) {
      medicalFlag = true;
      filterMap.set("nearByMedical", map1.get("nearByMedical"));
    }
    if (null != map1.get("nearBySchools")) {
      schoolFlag = true;
      filterMap.set("nearBySchools", map1.get("nearBySchools"));
    }
    if (null != map1.get("partyFriendly")) {
      partyFlag = true;
      filterMap.set("partyFriendly", map1.get("partyFriendly"));
    }
    if (null != map1.get("petFriendly")) {
      petFlag = true;
      filterMap.set("petFriendly", map1.get("petFriendly"));
    }
    if (null != map1.get("pincode")) {
      pinFlag = true;
      filterMap.set("pincode", map1.get("pincode"));
    }
    if (null != map1.get("state")) {
      stateFlag = true;
      filterMap.set("state", map1.get("state"));
    }
    if (null != map1.get("rent")) {
      rentFlag = true;
      filterMap.set("rent", map1.get("rent"));
    }
    //console.log("filterMap");
    console.log(filterMap);
    let count1 = 0,
      count2 = 0;
    for (let [key, value] of filterMap) {
      //console.log(key + " :: "+ value);
      //console.log(propArr[i].address + " :: "+propArr[i].centralAir + " :: "+ propArr[i].city+ " :: "+ propArr[i].nearBySchools);
      count1++;
      // if(key==="address"){
      //     if(JSON.stringify(value) === JSON.stringify(propArr[i].address)) count2++;
      // }else
      if (key === "balcony") {
        if (value === JSON.stringify(propArr[i].balcony)) count2++;
      } else if (key === "baths") {
        if (value === JSON.stringify(propArr[i].bath)) count2++;
      } else if (key === "beds") {
        if (value === JSON.stringify(propArr[i].beds)) count2++;
      } else if (key === "centralAir") {
        if (value === JSON.stringify(propArr[i].centralAir)) count2++;
      } else if (key === "city") {
        if (value === JSON.stringify(propArr[i].city)) count2++;
      } else if (key === "garrage") {
        if (value === JSON.stringify(propArr[i].garrage)) count2++;
      } else if (key === "nearByCommute") {
        if (value === JSON.stringify(propArr[i].nearByCommute)) count2++;
      } else if (key === "nearByMedical") {
        if (value === JSON.stringify(propArr[i].nearByMedical)) count2++;
      } else if (key === "nearBySchools") {
        if (value === JSON.stringify(propArr[i].nearBySchools)) count2++;
      } else if (key === "partyFriendly") {
        if (value === JSON.stringify(propArr[i].partyFriendly)) count2++;
      } else if (key === "petFriendly") {
        if (value === JSON.stringify(propArr[i].petFriendly)) count2++;
      } else if (key === "pincode") {
        if (value === JSON.stringify(propArr[i].pincode)) count2++;
      } else if (key === "state") {
        if (value === JSON.stringify(propArr[i].state)) count2++;
      } else if (key === "rent") {
        if (value === JSON.stringify(propArr[i].rent)) count2++;
      }
    }
    if (count1 == count2) {
      //console.log("PUSHING INTO FILTERED LIST");
      filteredList.push(propArr[i]);
    }
    // else{
    //   console.log("FILTERED LIST EMPTY");
    // }
    console.log(count1 + " = " + count2);
  }
  return filteredList;

  // /*for (let i = 0; i < filteredList.length; i++) {
  //   console.log(filteredList[i]);
  // }*/
}
module.exports = {
  filterData,
};
