export const makePostRequest = async (url, data) => {
  const config = {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  const response = await fetch(url, config);
  const json = await response.json();

  return json;
};
