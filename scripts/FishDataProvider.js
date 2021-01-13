const fishCollection = [
    {
    name: "Bart",
    food: "crustaceans",
    species: "Bettas",
    location: "Thailand",
    length: "2.8 in."
 
}
]
export const useFish = () => {
    return fishCollection.slice()
}
