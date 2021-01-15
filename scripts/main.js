console.log("Hello and welcome to Martin's Aquarium")
import { Fish } from './fish/Fish.js'
import { useFish } from './fish/FishDataProvider.js'
const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
};
// Import the FishList here
import {FishList} from './fish/FishList.js'
FishList()


