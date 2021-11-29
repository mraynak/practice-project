const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
    try {
      const response = await fetch(url, options);
  
      if (response.status === 204) {
        return null;
      }
  
      const payload = await response.json();
  
      if (payload.error) {
        return Promise.reject({ message: payload.error });
      }
      return payload.data;
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error(error.stack);
        throw error;
      }
      return Promise.resolve(onCancel);
    }
  }

  export async function listAnimals(signal) {
    const url = new URL(`${API_BASE_URL}/animals`);
    return await fetchJson(url, { headers, signal }, [])
  }
  
  export async function createAnimal(data, signal) {
    const url = `${API_BASE_URL}/animals`
    const options = {method: "POST", headers, body: JSON.stringify({ data: data}), signal}
    return await fetchJson(url, options)
  }