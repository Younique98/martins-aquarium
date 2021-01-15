console.log("Welcome to the main module")
import { useFish } from './fish/FishDataProvider.js'
const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
};
// Import the FishList here
import { FishList } from './fish/FishList.js'
FishList()