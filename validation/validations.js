const { Double } = require("mongodb");
const dummyData  = require("../client/src/assets/dummyData");
module.exports = {
    checkId(id) {
        console.log("TYPE 1 OF ID :: " + typeof id);
        id = Number(id);
        if (Number.isInteger(id) && id > 0) {
            if (!id || id === "" || id === undefined) throw 'Error: You must provide an id to search for';
            if (id.length === 0)
                throw 'Error: id cannot be an empty string or just spaces';
            return id;
        } else {
            throw 'Error: id must be a positive whole number';
        }
    },
    validateFirstName(fname) {
        console.log("TYPE 1 OF Name :: " + typeof fname);
        if (!fname)
            throw "First name is not present.";
        if (typeof fname !== 'string')
            throw "First name must be a string";
        if (fname.trim().length === 0)
            throw "First name cannot be an empty string or string with just spaces";

        return fname.trim();
    },
    validateLastName(lname) {
        console.log("TYPE 1 OF Name :: " + typeof lname);
        if (!lname)
            throw "Last name is not present.";
        if (typeof lname !== 'string')
            throw "Last name must be a string";
        if (lname.trim().length === 0)
            throw "Last name cannot be an empty string or string with just spaces";

        return lname.trim();
    },
    validateName(name) {
        console.log("TYPE 1 OF Name :: " + typeof name);
        if (!name)
            throw "Property name is not present.";
        if (typeof name !== 'string')
            throw "Property name must be a string";
        if (name.trim().length === 0)
            throw "Property name cannot be an empty string or string with just spaces";

        return name.trim();
    },
    validateAddress(addr) {
        console.log("TYPE 1 OF Address :: " + typeof addr);
        if (!addr)
            throw "Property Address is not present.";
        if (typeof addr !== 'string')
            throw "Property Address must be a string";
        if (addr.trim().length === 0)
            throw "Property Address cannot be an empty string or string with just spaces";

        return addr.trim();
    },
    validateEmail(email) {
        if (!email) throw 'You must provide a Email ID';
        if (typeof email !== 'string') throw 'Email ID must be a string';
        if (email.trim().length === 0)
            throw 'Email ID cannot be an empty string or string with just spaces';
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.match(mailformat))
            throw "You have entered an invalid email address!";

        return email.trim();
    },
    validateUserType(userType) {
        if (!userType)
            throw "User type is not present.";
        if (typeof userType !== 'string')
            throw "User type must be a string";
        if (userType.trim().length === 0)
            throw "User type cannot be an empty string or string with just spaces";
        if (userType !== "Student" && userType !== "Broker")
            throw "Invalid User type!";

        return userType.trim();
    },
    validateContact(contact) {
        contact = Number(contact);
        if (Number.isInteger(contact) && contact > 0) {
            if (!contact || contact === "" || contact === undefined || contact.length === 0) throw 'Error: You must provide contact information';
            if (contact.toString().length !== 10) throw "Contact number should be 10 digits!";
            return contact;
        } else {
            throw 'Error: Contact information must be a positive whole number';
        }

    },
    validatePassword(password) {
        if (!password)
            throw "You must provide a Password";
        if (typeof password !== 'string')
            throw "Password must be a string";
        if (password.trim().length === 0)
            throw "Password cannot be an empty string or string with just spaces";
        if (password.trim().length < 6)
            throw "Password should be atleast 6 characters long.";

        return password;
    }, 
    validatePincode(pincode){
        pincode = Number(pincode);
        if (Number.isInteger(pincode) && pincode > 0) {
            if (!pincode || pincode === "" || pincode === undefined) throw 'Error: You must provide Pincode';
            if (pincode.length === 0)
            throw 'Error: Pincode cannot be an empty string or just spaces';
            return pincode;
        }else{
            throw 'Error: Pincode must be a positive whole number';
        }
    },
    validateCity(city){
        if (!city)
            throw "You must provide a City";
        if (typeof city !== 'string')
            throw "City must be a string";
        if (city.trim().length === 0)
            throw "City cannot be an empty string or string with just spaces";
    },
    validateState(state){
        if (!state)
            throw "You must provide a State";
        if (typeof state !== 'string')
            throw "State must be a string";
        if (state.trim().length === 0)
            throw "State cannot be an empty string or string with just spaces";
    },
    validatePropertyType(propType){
        if (!propType)
            throw "You must provide a Property Type";
        if (typeof propType !== 'string')
            throw "Property Type must be a string";
        if (propType.trim().length === 0)
            throw "Property Type cannot be an empty string or string with just spaces";
    },
    validateBeds(beds){
        beds = Number(beds);
        if (Number.isInteger(beds) && beds > 0) {
            if (!beds || beds === "" || beds === undefined) throw 'Error: You must provide number of beds';
            if (beds.length === 0)
            throw 'Error: Beds cannot be an empty string or just spaces';
            return beds;
        }else{
            throw 'Error: Beds must be a positive whole number';
        }
    },
    validateBaths(baths){
        baths = Number(baths);
        if (Number.isInteger(baths) && baths > 0) {
            if (!baths || baths === "" || baths === undefined) throw 'Error: You must provide number of baths';
            if (baths.length === 0)
            throw 'Error: Number of baths cannot be an empty string or just spaces';
            return baths;
        }else{
            throw 'Error: Number of baths must be a positive whole number';
        }
    },
    validateBalcony(balcony){
        balcony = Number(balcony);
        if (Number.isInteger(balcony) && balcony > 0) {
            if (!balcony || balcony === "" || balcony === undefined) throw 'Error: You must provide number of baths';
            if (balcony.length === 0)
            throw 'Error: Number of balcony cannot be an empty string or just spaces';
            return balcony;
        }else{
            throw 'Error: Number of balcony must be a positive whole number';
        }
    },
    validateRent(rent){
        rent = Number(rent);
        if (Number.isInteger(rent) && rent > 0) {
            if (!rent || rent === "" || rent === undefined) throw 'Error: You must provide rent';
            if (rent.length === 0)
            throw 'Error: Rent cannot be an empty string or just spaces';
            return rent;
        }else{
            throw 'Error: Rent must be a positive whole number';
        }
    },
    validateBrokerage(brokerage){
        brokerage = Double(brokerage);
        if (!brokerage || brokerage === "" || brokerage === undefined) throw 'Error: You must provide Brokerage';
        if (brokerage.length === 0)
        throw 'Error: Brokerage cannot be an empty string or just spaces';
        return brokerage;
    },
    validateDeposit(deposit){
        deposit = Double(deposit);
        if (!deposit || deposit === "" || deposit === undefined) throw 'Error: You must provide Deposit';
        if (deposit.length === 0)
        throw 'Error: Deposit cannot be an empty string or just spaces';
        return deposit;
    },
    validateCentralAir(centralAir){
        if (typeof centralAir != "boolean") {
            throw 'Error: Central air must be of a boolean type';
        }
    },
    validatePetFriendly(petFriendly){
        if (typeof petFriendly != "boolean") {
            throw 'Error: Pet Friendly must be of a boolean type';
        }
    },
    validatePartyFriendly(partyFriendly){
        if (typeof partyFriendly != "boolean") {
            throw 'Error: Party Friendly must be of a boolean type';
        }
    },
    validateGarrage(garrage){
        if (typeof garrage != "boolean") {
            throw 'Error: Garrage must be of a boolean type';
        }
    },
    validatePropertyId(propId) {
        if (!propId)
            throw "Property id is not present.";
        if (typeof propId !== 'string')
            throw "Property id must be a string";
        if (propId.trim().length === 0)
            throw "Property id cannot be an empty string or string with just spaces";

        return propId.trim();
    },
    validateProperties(dummyData){
          checkId(dummyData.property._id)
          validatePropertyId(dummyData.property._id)
          validateFirstName(dummyData.userUser.firstName)
          validateLastName(dummyData.userUser.lastName)
          validateName(dummyData.property.name)
          validateAddress(dummyData.property.address)
          validateEmail(dummyData.userUser.email)
          validateUserType(dummyData.userUser.userType)
          validateContact(dummyData.userUser.contact)
          validatePassword(dummyData.userUser.password)
          validatePincode(dummyData.property.pincode)
          validateCity(dummyData.property.city)
          validateState(dummyData.property.state)
          validatePropertyType(dummyData.property.propType)
          validateBeds(dummyData.property.beds)
          validateBaths(dummyData.property.baths)
          validateBalcony(dummyData.property.balcony)
          validateRent(dummyData.property.rent)
          validateBrokerage(dummyData.property.broker)
          validateDeposit(dummyData.property.deposit)
          validateCentralAir(dummyData.property.centralAir)
          validatePetFriendly(dummyData.property.petFriendly)
          validatePartyFriendly(dummyData.property.partyFriendly)
          validateGarrage(dummyData.property.garrage)
        return true;
  },
};