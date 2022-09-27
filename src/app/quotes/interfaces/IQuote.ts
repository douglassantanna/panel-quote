import { Customer } from "src/app/customers/interfaces/ICustomer";

export interface Quote {
  id: number;
  customer: Customer;
  panelWidth: number;
  panelHeigth: number;
  panelColor: string;
  fontColor: string;
  fontSize: string;
  fontType: string;
  paymentMethod: string;
  textArea: string;
}
export interface NewQuote {
  id: number;
  customer: Customer;
  panelWidth: number;
  panelHeigth: number;
  panelColor: string;
  fontColor: string;
  fontSize: string;
  fontType: string;
  paymentMethod: string;
  textArea: string;
}
