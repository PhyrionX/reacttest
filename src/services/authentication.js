import requestService from "./request";

export function login(username, password) {
  return requestService.http.post('http://localhost:3000/Login', {
    username, password
  })
}
