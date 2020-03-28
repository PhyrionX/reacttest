import requestService from "./request";

export function getInvoice(invoiceId, auth) {
  return requestService.http.get(`http://localhost:3000/invoice/${ invoiceId }`, { headers: { Authorization: 'Bearer ' + auth } })
}
