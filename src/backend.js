const API_BASE_URL = "http://localhost:3000";
const token = window.localStorage.getItem("token") || "";
// Authenticate endpoint
async function signIn({ email, password }) {
  const response = await fetch(`${API_BASE_URL}/api/v1/authentication`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify({
      user: {
        email: email,
        password: password,
      },
    }),
  });

  return response.json();
}

// Get all packages
async function allPackages() {
  const response = await fetch(`${API_BASE_URL}/api/v1/packages`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  }); //.then((data) => { return data.json(); }).then((data) => { return data['packages'] }).catch((error) => console.error(error));

  return response.json();
}

// Create a new package
async function createPackage({ location, destination, date, timeslot }) {
  const response = await fetch(`${API_BASE_URL}/api/v1/packages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify({
      package: {
        location: location,
        destination: destination,
        date: date,
        timeslot: timeslot,
      },
    }),
  });

  return response.json();
}

// Update package
async function updatePackage({ id, location, destination, date, timeslot }) {
  const response = await fetch(`${API_BASE_URL}/api/v1/packages/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify({
      package: {
        location: location,
        destination: destination,
        date: date,
        timeslot: timeslot,
      },
    }),
  });

  return response.json();
}

// get package
async function getPackage({ id }) {
  const response = await fetch(`${API_BASE_URL}/api/v1/packages/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });

  return response.json();
}

// delete
async function deletePackage({ id }) {
  const response = await fetch(`${API_BASE_URL}/api/v1/packages/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });

  return response.json();
}

export {
  API_BASE_URL,
  token,
  signIn,
  deletePackage,
  allPackages,
  createPackage,
  getPackage,
  updatePackage,
};
