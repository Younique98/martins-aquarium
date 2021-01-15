import { useTip } from "./TipDataProvider.js"
import { Tip} from "./tips.js"
/**
 * TipList which renders individual tip objects as HTML
 */

// TODO: Import `useTips` from the data provider module

export const TipList = () => {

    const contentElement = document.querySelector(".containerLeft__tipList")
    const tips = useTip()

    // Generate all of the HTML for all of the fish
    let tipsHTMLRepresentations = ""
    for (const tip of tips) {
        /*
            Invoke the Tip component function
            and pass the current tip object as an argument.
            Each time, add the return value to the
            tipHTMLRepresentations variable with `+=`
        */
       tipHTMLRepresentations += Tip(tip) 
    }

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <article class="tipList">
            ${tipHTMLRepresentations}
        </article>
    `
}

