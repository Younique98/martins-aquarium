import { useLocation } from "./locationDataProvider.js"
import { Location } from "./locations.js"
/**
 *  locationList which renders individual fish objects as HTML
 */

// TODO: Import `useLocation` from the data provider module

export const LocationList = () => {

    const contentElement = document.querySelector(".containerLeft__fishList")
    const locations = useLocation()

    // Generate all of the HTML for all of the fish
    let locationHTMLRepresentations = ""
    for (const location of locations) {
        /*
            Invoke the Location component function
            and pass the current location object as an argument.
            Each time, add the return value to the
            locationHTMLRepresentations variable with `+=`
        */
       locationHTMLRepresentations += Location(location) 
    }

    // Add a section, and all of the locations to the DOM
    contentElement.innerHTML += `
        <article class="locationList">
            ${locationHTMLRepresentations}
        </article>
    `
}

