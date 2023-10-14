
export interface ApiResult<T> {
  status: 'success' | 'fail' | 'error';
  data?: T;
  error?: Error;
  message?: string;

  // Added temprory to use token. NOT secure. We have to use cookies
  token?: string;
}

export interface Error {
  statusCode: number;
  status: string;
  isOperational: boolean;
}

export interface Tour {
  startLocation: StartLocation;
  _id: string;
  name: string;
  duration: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  maxGroupSize: number;
  difficulty: string;
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  images: string[];
  startDates: string[];
  secretTour: boolean;
  locations: Location[];
  guides: Guide[];
  slug: string;
  __v: number;
  durationInWeeks: number;
  reviews: Review[];
  id: string;
}

export interface Guide {
  _id: string;
  name: string;
  photo: string;
  role: string;
  email: string;
}

export interface Location {
  type: string;
  coordinates: number[];
  description: string;
  day: number;
  _id: string;
}

export interface Review {
  _id: string;
  review: string;
  rating: number;
  createdAt: string;
  tour: string;
  user: User;
  __v: number;
  id: string;
  fromServer?: boolean
}

export interface User {
  _id: string;
  name: string;
  photo: string;
}

export interface StartLocation {
  type: string;
  coordinates: number[];
  address: string;
  description: string;
}

export interface SignInApiData {
  email: string,
  password: string
}


export interface CurrentUser {
  _id: string;
  name: string;
  photo: string;
  email: string;
  role: 'user' | 'guide' | 'lead-guide' | 'admin';
  __v: number;
}

export interface PasswordUpdate {
  passwordCurrent: string;
  password: string;
  passwordConfirm: string;
}