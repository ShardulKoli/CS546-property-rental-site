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