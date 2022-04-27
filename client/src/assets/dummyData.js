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

const property = {
  _id: 1,
  name: "Property 1",
  address: "Some Address in Heights",
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

module.exports = {
  userBroker,
  userUser,
  property,
};
