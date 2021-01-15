const locationCollection = [
    {
        location:"North America",
        season: "Spring"
    },
    {
        location:"South America",
        season: "fall"
    }
]
export const useLocations = () => {
    return locationCollection.slice()
}