const http = new EasyHTTP();

// Get users
http.get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// user data
const data = {
  name: "John Smith",
  username: "johnsmith",
  email: "jsmith@gmail.com",
};

// // Create User
// http.post("https://jsonplaceholder.typicode.com/users", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// // Update user
// http.put("https://jsonplaceholder.typicode.com/users/2", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// // Delete user
// http.delete("https://jsonplaceholder.typicode.com/users/2")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
