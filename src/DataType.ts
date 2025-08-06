export type CastType = {
     castId: string
     castName: string
     castGender: 'male' | 'female'
     castPic: string
     castAge: number
}

export type MovieType = {
     movieId: string
     movieCat: 'western' | 'comedy' | 'drama' | 'cartoon'
     movieTitle: string
     productionYear: number
     movieView: number
     moviePic: string
     movieDescription: string
     movieCast: CastType[]
}