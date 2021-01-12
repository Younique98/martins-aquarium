console.log("Welcome to the main module")

import { FishList } from './Fish.js'
import { useFish } from './FishDataProvider.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
};
// Import the FishList here
FishList()