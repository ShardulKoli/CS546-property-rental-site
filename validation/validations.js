module.exports = {
    checkId(id) {
      console.log("TYPE 1 OF ID :: "+typeof id);
      id = Number(id);
      if (Number.isInteger(id) && id > 0) {
        if (!id || id === "" || id === undefined) throw 'Error: You must provide an id to search for';
        if (id.length === 0)
        throw 'Error: id cannot be an empty string or just spaces';
        return id;
      }else{
        throw 'Error: id must be a positive whole number';
      }
      console.log("TYPE 2 OF ID :: "+typeof id);
    },
    validateFirstName(fname) {
        console.log("TYPE 1 OF Name :: "+typeof fname);
        if (!fname)
            throw "First name is not present.";
        if (typeof fname !== 'string') 
            throw "First name must be a string";
        if (fname.trim().length === 0)
            throw "First name cannot be an empty string or string with just spaces";
    },
    validateLastName(lname) {
        console.log("TYPE 1 OF Name :: "+typeof lname);
        if (!lname)
            throw "Last name is not present.";
        if (typeof lname !== 'string') 
            throw "Last name must be a string";
        if (lname.trim().length === 0)
            throw "Last name cannot be an empty string or string with just spaces";
    },
    validateName(name) {
        console.log("TYPE 1 OF Name :: "+typeof name);
        if (!name)
            throw "Property name is not present.";
        if (typeof name !== 'string') 
            throw "Property name must be a string";
        if (name.trim().length === 0)
            throw "Property name cannot be an empty string or string with just spaces";
    },
    validateAddress(addr) {
        console.log("TYPE 1 OF Address :: "+typeof addr);
        if (!addr)
            throw "Property Address is not present.";
        if (typeof addr !== 'string') 
            throw "Property Address must be a string";
        if (addr.trim().length === 0)
            throw "Property Address cannot be an empty string or string with just spaces";
    },
    validateEmail(email) {
        if (!email) throw 'You must provide a Email ID';
        if (typeof email !== 'string') throw 'Email ID must be a string';
        if (email.trim().length === 0)
            throw 'Email ID cannot be an empty string or string with just spaces';
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email.match(mailformat))
            alert("You have entered an invalid email address!");
    },
    validateUserType(userType) {
        console.log("TYPE 1 OF user :: "+typeof userType);
        userType = Number(userType);
        if (Number.isInteger(userType) && userType > 0) {
          if (!userType || userType === "" || userType === undefined || userType.length === 0) throw 'Error: You must provide type of user';
          return userType;
         // if(userType not in (0,1,2)) throw validation 
        }else{
          throw 'Error: User type must be a positive whole number';
        }
        console.log("TYPE 2 OF user :: "+typeof userType);
    },
    validateContact(contact) {
        console.log("TYPE 1 OF contact :: "+typeof contact);
        contact = Number(contact);
        if (Number.isInteger(contact) && contact > 0) {
          if (!contact || contact === "" || contact === undefined || contact.length === 0) throw 'Error: You must provide contact information';
          return contact;
         // if(userType not in (0,1,2)) throw validation 
        }else{
          throw 'Error: Contact information must be a positive whole number';
        }
        console.log("TYPE 2 OF contact :: "+typeof contact);
    },
    validatePassword(){
        if (!password)
            throw "You must provide a Password";
        if (typeof password !== 'string')
            throw "Password must be a string";
        if (password.trim().length === 0)
            throw "Password cannot be an empty string or string with just spaces";
        if (password.trim().length < 6)
            throw "Password should be atleast 6 characters long.";
    }

};