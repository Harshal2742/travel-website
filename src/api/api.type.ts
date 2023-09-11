import { Tour } from "./api.interface"

export type TopTour = Pick<Tour, "_id" | "name" | "ratingsAverage" | "difficulty" | "price" | "summary" | "imageCover" | "duration" | "guides" | "ratingsQuantity" | "id" | "durationInWeeks">


export type TopTours = TopTour[]
