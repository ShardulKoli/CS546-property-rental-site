const checkId = (id) => {
  console.log("TYPE 1 OF ID :: " + typeof id);
  id = Number(id);
  if (Number.isInteger(id) && id > 0) {
    if (id === undefined) throw "Error: You must provide an id to search for";
    if (id.length === 0)
      throw "Error: id cannot be an empty string or just spaces";
    return id;
  } else {
    throw "Error: id must be a positive whole number";
  }
};
const validateFirstName = (fname) => {
  console.log("TYPE 1 OF Name :: " + typeof fname);
  if (!fname) throw "First name is not present.";
  if (typeof fname !== "string") throw "First name must be a string";
  if (fname.trim().length === 0)
    throw "First name cannot be an empty string or string with just spaces";

  return fname.trim();
};
const validateLastName = (lname) => {
  console.log("TYPE 1 OF Name :: " + typeof lname);
  if (!lname) throw "Last name is not present.";
  if (typeof lname !== "string") throw "Last name must be a string";
  if (lname.trim().length === 0)
    throw "Last name cannot be an empty string or string with just spaces";

  return lname.trim();
};
const validateName = (name) => {
  console.log("TYPE 1 OF Name :: " + typeof name);
  if (!name) throw "Property name is not present.";
  if (typeof name !== "string") throw "Property name must be a string";
  if (name.trim().length === 0)
    throw "Property name cannot be an empty string or string with just spaces";

  return name.trim();
};
const validateAddress = (addr) => {
  console.log("TYPE 1 OF Address :: " + typeof addr);
  if (!addr) throw "Property Address is not present.";
  if (typeof addr !== "string") throw "Property Address must be a string";
  if (addr.trim().length === 0)
    throw "Property Address cannot be an empty string or string with just spaces";

  return addr.trim();
};
const validateEmail = (email) => {
  if (!email) throw "You must provide a Email ID";
  if (typeof email !== "string") throw "Email ID must be a string";
  if (email.trim().length === 0)
    throw "Email ID cannot be an empty string or string with just spaces";
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(mailformat))
    throw "You have entered an invalid email address!";

  return email.trim();
};
const validateUserType = (userType) => {
  if (!userType) throw "User type is not present.";
  if (typeof userType !== "string") throw "User type must be a string";
  if (userType.trim().length === 0)
    throw "User type cannot be an empty string or string with just spaces";
  if (userType !== "Student" && userType !== "Broker")
    throw "Invalid User type!";

  return userType.trim();
};
const validateContact = (contact) => {
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
};
const validatePassword = (password) => {
  if (!password) throw "You must provide a Password";
  if (typeof password !== "string") throw "Password must be a string";
  if (password.trim().length === 0)
    throw "Password cannot be an empty string or string with just spaces";
  if (password.trim().length < 6)
    throw "Password should be atleast 6 characters long.";

  return password;
};
const validatePincode = (pincode) => {
  pincode = Number(pincode);
  if (Number.isInteger(pincode) && pincode > 0) {
    if (pincode === "" || pincode === undefined)
      throw "Error: You must provide Pincode";
    if (pincode.length === 0)
      throw "Error: Pincode cannot be an empty string or just spaces";
    return pincode;
  } else {
    throw "Error: Pincode must be a positive whole number";
  }
};
const validateCity = (city) => {
  if (!city) throw "You must provide a City";
  if (typeof city !== "string") throw "City must be a string";
  if (city.trim().length === 0)
    throw "City cannot be an empty string or string with just spaces";

  return city;
};
const validateState = (state) => {
  if (!state) throw "You must provide a State";
  if (typeof state !== "string") throw "State must be a string";
  if (state.trim().length === 0)
    throw "State cannot be an empty string or string with just spaces";

  return state;
};
const validatePropertyType = (propType) => {
  if (!propType) throw "You must provide a Property Type";
  if (typeof propType !== "string") throw "Property Type must be a string";
  if (propType.trim().length === 0)
    throw "Property Type cannot be an empty string or string with just spaces";

  return propType;
};
const validateBeds = (beds) => {
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
};
const validateBaths = (baths) => {
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
};
const validateBalcony = (balcony) => {
  balcony = Number(balcony);
  if (Number.isInteger(balcony) && balcony > 0) {
    if (balcony === undefined) throw "Error: You must provide number of baths";
    if (balcony.length === 0)
      throw "Error: Number of balcony cannot be an empty string or just spaces";
    if (balcony > 20) throw "Error: Number of balcony cannot be more than 20";
    return balcony;
  } else {
    throw "Error: Number of balcony must be a positive whole number";
  }
};
const validateRent = (rent) => {
  rent = Number(rent);
  if (Number.isInteger(rent) && rent > 0) {
    if (rent === undefined) throw "Error: You must provide rent";
    if (rent.length === 0)
      throw "Error: Rent cannot be an empty string or just spaces";
    return rent;
  } else {
    throw "Error: Rent must be a positive whole number";
  }
};
const validateBrokerage = (brokerage) => {
  brokerage = Number(brokerage);
  if (brokerage === undefined) throw "Error: You must provide Brokerage";
  if (brokerage.length === 0)
    throw "Error: Brokerage cannot be an empty string or just spaces";
  if (brokerage < 0) throw "Error : Brokerage cannot be less than 0";
  return brokerage;
};
const validateDeposit = (deposit) => {
  deposit = Number(deposit);
  if (deposit === undefined) throw "Error: You must provide Deposit";
  if (deposit.length === 0)
    throw "Error: Deposit cannot be an empty string or just spaces";
  if (deposit < 0) throw "Error : Deposit cannot be less than 0";
  return deposit;
};
const validateCentralAir = (centralAir) => {
  if (typeof centralAir != "boolean") {
    throw "Error: Central air must be of a boolean type";
  }

  return centralAir;
};
const validatePetFriendly = (petFriendly) => {
  if (typeof petFriendly != "boolean") {
    throw "Error: Pet Friendly must be of a boolean type";
  }

  return petFriendly;
};
const validatePartyFriendly = (partyFriendly) => {
  if (typeof partyFriendly != "boolean") {
    throw "Error: Party Friendly must be of a boolean type";
  }

  return partyFriendly;
};
const validateGarrage = (garrage) => {
  if (typeof garrage != "boolean") {
    throw "Error: Garrage must be of a boolean type";
  }

  return garrage;
};
const validatePropertyId = (propId) => {
  if (!propId) throw "Property id is not present.";
  if (typeof propId !== "string") throw "Property id must be a string";
  if (propId.trim().length === 0)
    throw "Property id cannot be an empty string or string with just spaces";

  return propId.trim();
};
const validateMinimumLeastPeriod = (minimumLeasePeiod) => {
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
};
const validateImages = (images) => {
  if (!images) throw "Images should not be null";
  if (!Array.isArray(images)) throw "Images should be an array";

  return images;
};
const validateNearbyCommute = (nearByCommute) => {
  if (!nearByCommute) throw "You must provide a Nearby Commute";
  if (typeof nearByCommute !== "string")
    throw "Nearby Commute must be a string";
  if (nearByCommute.trim().length === 0)
    throw "Nearby Commute cannot be an empty string or string with just spaces";

  return nearByCommute;
};
const validateProperties = (property) => {
  if (property._id) property._id = this.validatePropertyId(property._id);
  property.name = validateName(property.name);
  property.address = validateAddress(property.address);
  property.broker = validateEmail(property.broker);
  property.pincode = validatePincode(property.pincode);
  property.city = validateCity(property.city);
  property.state = validateState(property.state);
  property.type = validatePropertyType(property.type);
  property.beds = validateBeds(property.beds);
  property.bath = validateBaths(property.bath);
  property.balcony = validateBalcony(property.balcony);
  property.rent = validateRent(property.rent);
  property.brokerage = validateBrokerage(property.brokerage);
  property.deposit = validateDeposit(property.deposit);
  property.centralAir = validateCentralAir(property.centralAir);
  property.petFriendly = validatePetFriendly(property.petFriendly);
  property.partyFriendly = validatePartyFriendly(property.partyFriendly);
  property.garrage = validateGarrage(property.garrage);
  property.minimumLeasePeriod = validateMinimumLeastPeriod(
    property.minimumLeasePeriod
  );
  property.images = validateImages(property.images);

  return property;
};

module.exports = {
  checkId,
  validateFirstName,
  validateLastName,
  validateEmail,
  validateProperties,
  validateContact,
  validatePassword,
  validateUserType,
};
