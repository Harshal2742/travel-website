import { Tour } from "./api.interface"

export type TopTour = Pick<Tour, "_id" | "name" | "ratingsAverage" | "difficulty" | "price" | "summary" | "imageCover" | "duration" | "guides" | "id" | "durationInWeeks">


export type TopTours = TopTour[]
