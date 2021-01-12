export const Fish = (fish) => {
    return `
    <section class="fish card">
    <div><img class="fish__image--card" src="${fish.image}" /></div>
    <div class="fish__name">${fish.name}</div>
    <div class="fish__species">${fish.species}</div>
    <div class="fish__length">${fish.length}</div>
    <div class="fish__location">${fish.location}</div>
    <div class="fish__diet">${fish.food}</div>
    </section>
    `
}
export const FishList = () => {
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector("insert selector here")
    const fishes = useFish()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fishList">
            All the fish go here!
        </article>
    `
} 