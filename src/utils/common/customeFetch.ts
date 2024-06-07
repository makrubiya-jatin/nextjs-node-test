const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT
const customFetch = async (url: string, options?: RequestInit) => {
  const response = await fetch(`${apiEndpoint}${url}`, options);
  return response;
};

export default customFetch;