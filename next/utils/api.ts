export const api = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Api request failed: ' + response.statusText);
  }
  return response.json() as Promise<T>;
};
