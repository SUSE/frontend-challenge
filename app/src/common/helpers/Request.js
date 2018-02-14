/**
 * Helper that is used to centralize all the requests on a single part of the code
 */
class Request {
  /**
   * Performs a GET request to the given URL
   *
   * @param url {string} - URL to where perform the request
   *
   * @returns {Promise} - Promise object that will return the response parsed in JSON
   */
  get(url) {
    return fetch(url)
      .then((response) => response.json())
  }
}

let instance = new Request();

export default instance
