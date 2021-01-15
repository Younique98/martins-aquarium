const tipCollection = [
    {
        tip:"Clean tank",
        frequency: "monthly"

    },
    {
        tip:"Feed fish",
        frequency: "daily"
        
    }
    
]
export const useTip = () => {
    return tipCollection.slice()
}
