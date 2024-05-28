const API_BASE_URL = 'http://localhost:3000'
const token = window.localStorage.getItem('token') || ''
// Authenticate endpoint
async function signIn({email, password}) {

    const response = await fetch(`${API_BASE_URL}/api/v1/authentication`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify({
        user: {
            email: email,
            password: password
        }
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
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    });

    return response.json();
}

async function deletePackage({id}) {

    const response = await fetch(`${API_BASE_URL}/api/v1/packages/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    });

    return response.json();
}

export { signIn, deletePackage, allPackages };