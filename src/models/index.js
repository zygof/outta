export const ImageModel = {
  _id: 0,
  label: '',
  uri: '',
};

export const RatingModel = {
  _id: 0,
  average: 0,
  reviews: 0,
  label: '',
  metadata: [],
};

export const LocationModel = {
  _id: 0,
  street: '',
  city: '',
  country: '',
  zipcode: 0,
  latitude: 0,
  longitude: 0,
};

export const TimeRemainingModel = {
  _id: 0,
  isAvailable: false,
  dayDuration: 0,
  hourDuration: 0,
  minuteDuration: 0,
  duration: '',
};

export const FoodCategoryModel = {
  _id: 0,
  name: '',
  logo: '',
  origin: '',
  verified: false,
};

export const FranchiseCategoryModel = {
  _id: 0,
  name: '',
  logo: '',
  origin: '',
};

export const IngredientCategoryModel = {
  _id: 0,
  name: '',
  logo: '',
  origin: '',
  verified: false,
};

export const IngredientModel = {
  _id: 0,
  name: '',
  category: IngredientCategoryModel,
  image: ImageModel,
  verified: false,
};

export const FranchiseModel = {
  _id: 0,
  name: '',
  category: FranchiseCategoryModel,
  logo: '',
  images: [ImageModel],
  manager: '',
  description: '',
  rating: RatingModel,
  verified: false,
  createdAt: '',
  updatedAt: '',
};

export const FoodModel = {
  _id: 0,
  name: '',
  price: {value: 0, unit: 'euro'},
  category: FoodCategoryModel,
  description: '',
  image: [ImageModel],
  ingredients: [IngredientModel],
  calories: 0,
  carbs: 0,
  protein: 0,
  fat: 0,
  franchise: FranchiseModel,
  createdAt: '',
  updatedAt: '',
};

export const DiscountModel = {
  _id: 0,
  food: FoodModel,
  discountPct: 0,
  priceWithDiscount: 0,
  exception: [],
  startedAt: '',
  finishedAt: '',
};

export const NotificationModel = {
  _id: 0,
  email: '',
  type: '',
  status: '',
  text: '',
  isViewed: false,
  viewedAt: '',
  createdAt: '',
};

export const RestaurantModel = {
  _id: 0,
  franchise: FranchiseModel,
  phone: '',
  location: LocationModel,
  images: [ImageModel],
  rating: RatingModel,
  verified: false,
  createdAt: '',
  updatedAt: '',
};

export const UserModel = {
  firstName: '',
  name: '',
  pseudo: '',
  email: '',
  password: '',
  role: '',
  accountType: 'email',
  verified: false,
  verification: '',
  location: LocationModel,
  createdAt: '',
  updatedAt: '',
  loginAttempts: 0,
  blockExpires: '',
};
