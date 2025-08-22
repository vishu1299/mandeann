// Shared type definitions for account components

export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
}

export interface SecuritySettings {
  twoFactorAuth: boolean;
  loginAlerts: boolean;
  smsNotifications: boolean;
  emailNotifications: boolean;
}

export interface Address {
  id: string;
  type: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  date: string;
  status: string;
  total: string;
  items: number;
  image: string;
  productName: string;
}

// Enhanced Order Item Types (for detailed order view)
export interface OrderItem {
  id: string;
  orderNumber: string;
  orderDate: string;
  total: string;
  shipTo: string;
  status: "Arriving Today" | "Delivered" | "Cancelled" | "Shipped" | "Returned";
  deliveryDate?: string;
  productName: string;
  productPrice: string;
  productColor: string;
  productConnectivity: string;
  productImage: string;
  quantity: number;
  packageHandedTo?: string;
}

export interface WishlistItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

export interface PaymentMethod {
  id: number;
  type: string;
  last4: string;
  expiry: string;
  isDefault: boolean;
}
