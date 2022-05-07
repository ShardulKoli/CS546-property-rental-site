const { ObjectId } = require("mongodb");

module.exports = {
  checkId(id) {
    id = Number(id);
    if (Number.isInteger(id) && id > 0) {
      if (id === undefined) throw "Error: You must provide an id to search for";
      if (id.length === 0)
        throw "Error: id cannot be an empty string or just spaces";
      return id;
    } else {
      throw "Error: id must be a positive whole number";
    }
  },
  validateFirstName(fname) {
    if (!fname) throw "First name is not present.";
    if (typeof fname !== "string") throw "First name must be a string";
    if (fname.trim().length === 0)
      throw "First name cannot be an empty string or string with just spaces";

    return fname.trim();
  },
  validateLastName(lname) {
    if (!lname) throw "Last name is not present.";
    if (typeof lname !== "string") throw "Last name must be a string";
    if (lname.trim().length === 0)
      throw "Last name cannot be an empty string or string with just spaces";

    return lname.trim();
  },
  validateName(name) {
    if (!name) throw "Property name is not present.";
    if (typeof name !== "string") throw "Property name must be a string";
    if (name.trim().length === 0)
      throw "Property name cannot be an empty string or string with just spaces";

    return name.trim();
  },
  validateAddress(addr) {
    if (!addr) throw "Property Address is not present.";
    if (typeof addr !== "string") throw "Property Address must be a string";
    if (addr.trim().length === 0)
      throw "Property Address cannot be an empty string or string with just spaces";

    return addr.trim();
  },
  validateEmail(email) {
    if (!email) throw "You must provide a Email ID";
    if (typeof email !== "string") throw "Email ID must be a string";
    if (email.trim().length === 0)
      throw "Email ID cannot be an empty string or string with just spaces";
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat))
      throw "You have entered an invalid email address!";

    return email.trim();
  },
  validateUserType(userType) {
    if (!userType) throw "User type is not present.";
    if (typeof userType !== "string") throw "User type must be a string";
    if (userType.trim().length === 0)
      throw "User type cannot be an empty string or string with just spaces";
    if (
      userType.toLowerCase() !== "student" &&
      userType.toLowerCase() !== "broker"
    )
      throw "Invalid User type!";

    return userType.trim();
  },
  validateContact(contact) {
    contact = Number(contact);
    if (Number.isInteger(contact) && contact > 0) {
      if (contact === undefined || contact.length === 0)
        throw "Error: You must provide contact information";
      if (contact.toString().length !== 10)
        throw "Contact number should be 10 digits!";
      return contact;
    } else {
      throw "Error: Contact information must be a positive whole number";
    }
  },
  validatePassword(password) {
    if (!password) throw "You must provide a Password";
    if (typeof password !== "string") throw "Password must be a string";
    if (password.trim().length === 0)
      throw "Password cannot be an empty string or string with just spaces";
    if (password.trim().length < 6)
      throw "Password should be atleast 6 characters long.";

    return password;
  },
  validatePincode(pincode) {
    let pincode1 = Number(pincode);
    if (Number.isInteger(pincode1) && pincode1 > 0) {
      if (pincode1 === "" || pincode1 === undefined)
        throw "Error: You must provide Pincode";
      if (pincode1.length === 0)
        throw "Error: Pincode cannot be an empty string or just spaces";
      return pincode;
    } else {
      throw "Error: Pincode must be a positive whole number";
    }
  },
  validateCity(city) {
    if (!city) throw "You must provide a City";
    if (typeof city !== "string") throw "City must be a string";
    if (city.trim().length === 0)
      throw "City cannot be an empty string or string with just spaces";

    return city;
  },
  validateState(state) {
    if (!state) throw "You must provide a State";
    if (typeof state !== "string") throw "State must be a string";
    if (state.trim().length === 0)
      throw "State cannot be an empty string or string with just spaces";

    return state;
  },
  validatePropertyType(propType) {
    if (!propType) throw "You must provide a Property Type";
    if (typeof propType !== "string") throw "Property Type must be a string";
    if (propType.trim().length === 0)
      throw "Property Type cannot be an empty string or string with just spaces";

    return propType;
  },
  validateBeds(beds) {
    beds = Number(beds);
    if (Number.isInteger(beds) && beds > 0) {
      if (beds === undefined) throw "Error: You must provide number of beds";
      if (beds.length === 0)
        throw "Error: Beds cannot be an empty string or just spaces";
      if (beds > 20) throw "Error: Number of beds cannot be more than 20";
      return beds;
    } else {
      throw "Error: Beds must be a positive whole number";
    }
  },
  validateBaths(baths) {
    baths = Number(baths);
    if (Number.isInteger(baths) && baths > 0) {
      if (baths === undefined) throw "Error: You must provide number of baths";
      if (baths.length === 0)
        throw "Error: Number of baths cannot be an empty string or just spaces";
      if (baths > 20) throw "Error: Number of baths cannot be more than 20";
      return baths;
    } else {
      throw "Error: Number of baths must be a positive whole number";
    }
  },
  validateBalcony(balcony) {
    balcony = Number(balcony);
    if (Number.isInteger(balcony) && balcony >= 0) {
      if (balcony === undefined)
        throw "Error: You must provide number of baths";
      if (balcony.length === 0)
        throw "Error: Number of balcony cannot be an empty string or just spaces";
      if (balcony > 20) throw "Error: Number of balcony cannot be more than 20";
      return balcony;
    } else {
      throw "Error: Number of balcony must be a positive whole number";
    }
  },
  validateRent(rent) {
    rent = Number(rent);
    if (Number.isInteger(rent) && rent > 0) {
      if (rent === undefined) throw "Error: You must provide rent";
      if (rent.length === 0)
        throw "Error: Rent cannot be an empty string or just spaces";
      return rent;
    } else {
      throw "Error: Rent must be a positive whole number";
    }
  },
  validateBrokerage(brokerage) {
    brokerage = Number(brokerage);
    if (brokerage === undefined) throw "Error: You must provide Brokerage";
    if (brokerage.length === 0)
      throw "Error: Brokerage cannot be an empty string or just spaces";
    if (brokerage < 0) throw "Error : Brokerage cannot be less than 0";
    return brokerage;
  },
  validateDeposit(deposit) {
    deposit = Number(deposit);
    if (deposit === undefined) throw "Error: You must provide Deposit";
    if (deposit.length === 0)
      throw "Error: Deposit cannot be an empty string or just spaces";
    if (deposit < 0) throw "Error : Deposit cannot be less than 0";
    return deposit;
  },
  validateCentralAir(centralAir) {
    if (typeof centralAir != "boolean") {
      throw "Error: Central air must be of a boolean type";
    }

    return centralAir;
  },
  validatePetFriendly(petFriendly) {
    if (typeof petFriendly != "boolean") {
      throw "Error: Pet Friendly must be of a boolean type";
    }

    return petFriendly;
  },
  validatePartyFriendly(partyFriendly) {
    if (typeof partyFriendly != "boolean") {
      throw "Error: Party Friendly must be of a boolean type";
    }

    return partyFriendly;
  },
  validateGarrage(garrage) {
    if (typeof garrage != "boolean") {
      throw "Error: Garrage must be of a boolean type";
    }

    return garrage;
  },
  validatePropertyId(propId) {
    if (!propId) throw "Property id is not present.";
    if (typeof propId !== "string") throw "Property id must be a string";
    if (propId.trim().length === 0)
      throw "Property id cannot be an empty string or string with just spaces";
    if (!ObjectId.isValid(propId)) {
      throw `${propId} is an invalid id!`;
    }
    return propId.trim();
  },
  validateMinimumLeastPeriod(minimumLeasePeiod) {
    minimumLeasePeiod = Number(minimumLeasePeiod);
    if (Number.isInteger(minimumLeasePeiod) && minimumLeasePeiod > 0) {
      if (
        !minimumLeasePeiod ||
        minimumLeasePeiod === "" ||
        minimumLeasePeiod === undefined
      )
        throw "Error: You must provide minimum lease period";
      if (minimumLeasePeiod.length === 0)
        throw "Error: Minimum lease Period cannot be an empty string or just spaces";
      return minimumLeasePeiod;
    } else {
      throw "Error: Minimum lease Period must be a positive whole number";
    }
  },
  validateImages(images) {
    if (!images) throw "Images should not be null";
    if (!Array.isArray(images)) throw "Images should be an array";

    return images;
  },
  validateNearbyCommute(nearByCommute) {
    if (!nearByCommute) throw "You must provide a Nearby Commute";
    if (typeof nearByCommute !== "string")
      throw "Nearby Commute must be a string";
    if (nearByCommute.trim().length === 0)
      throw "Nearby Commute cannot be an empty string or string with just spaces";

    return nearByCommute;
  },
  validateUserId(id) {
    if (!id) throw "User id is not present.";
    if (typeof id !== "string") throw "User id must be a string";
    if (id.trim().length === 0)
      throw "User id cannot be an empty string or string with just spaces";
    if (!ObjectId.isValid(id)) {
      throw `${id} is an invalid id!`;
    }
    return id.trim();
  },
  validateProperties(property) {
    if (property._id) property._id = this.validatePropertyId(property._id);
    property.name = this.validateName(property.name);
    property.address = this.validateAddress(property.address);
    property.broker = this.validateEmail(property.broker);
    property.pincode = this.validatePincode(property.pincode);
    property.city = this.validateCity(property.city);
    property.state = this.validateState(property.state);
    property.type = this.validatePropertyType(property.type);
    property.beds = this.validateBeds(property.beds);
    property.bath = this.validateBaths(property.bath);
    property.balcony = this.validateBalcony(property.balcony);
    property.rent = this.validateRent(property.rent);
    property.brokerage = this.validateBrokerage(property.brokerage);
    property.deposit = this.validateDeposit(property.deposit);
    property.centralAir = this.validateCentralAir(property.centralAir);
    property.petFriendly = this.validatePetFriendly(property.petFriendly);
    property.partyFriendly = this.validatePartyFriendly(property.partyFriendly);
    property.garrage = this.validateGarrage(property.garrage);
    property.minimumLeasePeriod = this.validateMinimumLeastPeriod(
      property.minimumLeasePeriod
    );
    property.images = this.validateImages(property.images);
    property.nearByCommute = this.validateNearbyCommute(property.nearByCommute);

    return property;
  },
};
