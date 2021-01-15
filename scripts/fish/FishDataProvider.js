const fishCollection = [
    {
    name: "Name: Bart",
    food: "Food: crustaceans",
    species: "Species: Bettas",
    location: "Location: Thailand",
    length: 5,
    image: "https://cdn.pixabay.com/photo/2014/06/23/06/00/longhorn-cowfish-375110__340.jpg"
 
    },
    {
        name: "Name: Derp",
        food: "Food: crustaceans",
        species: "Species: Anthias Squamipinnis",
        location: "Location: Somewhere Land",
        length: 2.1,
        image: "https://cdn.pixabay.com/photo/2020/10/12/22/12/color-pop-5650322__340.jpg"
     
        },
        {
            name: "Name: Thomas",
            food: "Food: clams",
            species: "Species: Clown Fish",
            location: "Location: Never Land",
            length: "Length: 4 in.",
            image: "https://cdn.pixabay.com/photo/2015/04/07/21/12/lionfish-711799__340.jpg"
         
            },
            {
                name: "Name: Mr. Fancy Pants",
                food: "Food: Pebbles",
                species: "Species: Goldfish",
                location: "Location: In Space",
                length: 3,
                image: "https://cdn.pixabay.com/photo/2019/10/12/04/59/koi-4543131__340.jpg"
             
                }

]
export const useFish = () => {
    return fishCollection.slice()
}


export const mostHolyFish = () => {
    const holyFish =[]

    for (const fishObject of fishCollection) {
        if (fishObject.length % 3 === 0) {
            console.log(fishObject)
            holyFish.push(fishObject)
        }
    }
return holyFish
}
// console.log("array of holy fish",holyFish)

export const soldierFish = () => {
    const soldiers =[]

    for (const fishObject of fishCollection) {
        if (fishObject.length % 5 === 0) {
            console.log(fishObject)
            soldiers.push(fishObject)
        }
    }
return soldiers
}

export const nonHolyFish = () => {
    const nonregular =[]

    for (const fishObject of fishCollection) {
        if (fishObject.length % 5 !== 0 && fishObject.length % 3 !== 0) {
            nonregular.push(fishObject)
        }
      }  
      
   console.log("array of regular fish", nonregular) 
return nonregular
}
