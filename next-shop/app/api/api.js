
export async function fetchJson(url, options) {
  const response = await fetch(url, options);
  if(!response.ok) {
    throw new NextShopApiError(url, response.status)
  }
  return await response.json();
}

export class NextShopApiError extends Error {
  constructor(url, status) {
    super(`'${url}' returned ${status}`);
    if(Error.captureStackTrace) {
      Error.captureStackTrace(this, NextShopApiError)
    }
    this.name = 'ApiError';
    this.status = status;
  }
}