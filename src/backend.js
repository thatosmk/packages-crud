const API_BASE_URL = 'http://localhost:3000'

// Authenticate endpoint
async function signIn({email, password}) {

    const response = await fetch(`${API_BASE_URL}/api/v1/authentication`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer token`,
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

async function deletePackage({id}) {

    const response = await fetch(`${API_BASE_URL}/api/v1/packages/${id}`, {
      method: "DESTROY",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer token`,
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    });

    return response.json();
}

export { signIn, deletePackage };