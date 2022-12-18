import { Address, NewAddress } from "./IAddress";


export interface Supplier {
  id: number;
  name: string;
  address: Address,
  internalResponsable: string;
  phoneNumber: string;
  description: string;
  email: string;
}

export interface NewSupplier {
  name: string;
  address: NewAddress,
  internalResponsable: string;
  phoneNumber: string;
  description: string;
  email: string;
}

export interface Email {
  id: number;
  email: string;
}
