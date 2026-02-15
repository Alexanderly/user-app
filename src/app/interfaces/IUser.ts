export interface IUser {  // храни господь интерфейсы в тс, чтобы они были правильные
    name: string;
    email: string;
    phone: string;
    address: {
      city: string;
      street: string;
    };
  }
  