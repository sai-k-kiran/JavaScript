//     value?.prop:

//     works as value.prop, if value exists,
//     otherwise when value is undefined/null, it returns undefined.

// For ex, if 'address' of an 'user' is not defined then there would be no 'street-name'. 
// And if we write user.address.street-name, it would give us an error instead of undefined/null bcoz, 
// thers is no address, how come you are asking about street name.
// user.address --> undefined, user.address.street-name --> error. In that case, use optional chaining " ?. "
// if you want to check for address of a user, then write user?.address.street-name. If address doesnt exist, then asking for
// street-name doesnt throw an error if asked with optional chaining

let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)

// The variable 'user' must be declared (e.g. let/const/var user or as a function parameter). 
// The optional chaining works only for declared variables.


// Suppose 'user' has no 'isAdmin()' fn, so if it is called, then it will throw an error. so use " ?.() "
// If such fn exists, it will run normally otherwise, it will stop without error

let userAdmin = {
    admin() {
      alert("I am admin");
    }
  };
  
  let userGuest = {};  // has no "admin()" fn
  
  userAdmin.admin?.(); // I am admin
  
  userGuest.admin?.(); // nothing (no such method)


  let user1 = {
      firstName: 'John',
  }

  let user2 = {}

  console.log(user1?.[firstName]);
  console.log(user2?.[firstName]);