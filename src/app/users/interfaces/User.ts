export interface User {
  id: number;
}

export interface LoginInfo {
  email: string;
  password: string;
  confirmPassword: string;
  cellphoneNumber: string;
}
export interface PersonalInfo {
  firstName: string;
  lastName: string;
  cpf: string;
}
export interface ResidencialAddressInfo {
  street: string;
  number: string;
  zipcode: string;
  city: string;
}
