class Request {
  get(url) {
    return fetch(url)
      .then((response) => response.json())
  }
}

let instance = new Request();

export default instance
