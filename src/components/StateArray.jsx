
import React from "react"


/*
🧠 1️⃣ setMyFavoriteThings(...)

This is the state updater function from React’s useState.

It tells React:

“Hey, I want to update the list of my favorite things.”

⚙️ 2️⃣ prevFavThing => ...

Here you’re passing a function to setMyFavoriteThings.
That function receives the current value of the state — called prevFavThing.

So, if your state looks like this before the click:

myFavoriteThings = ["potato", "tomate"]


then, at the moment of calling:

prevFavThing = ["potato", "tomate"]

⚙️ 3️⃣ The spread operator: ...prevFavThing

The ... (spread operator) copies everything inside the current array.

So:

[...prevFavThing]


→ means “copy all the current favorite things”.

⚙️ 4️⃣ allFavoriteThings[prevFavThing.length]

Here’s the clever part.

Let’s say you have:

const allFavoriteThings = ["potato", "tomate", "pineapple", "juice", "lemonade", "icecream", "chocolate"];


And your current list (prevFavThing) has length 2 (two items).
That means:

prevFavThing.length === 2


So this code picks:

allFavoriteThings[2]  // "pineapple"


💡 Basically, it takes the next item from the allFavoriteThings array based on how many you’ve already added.

⚙️ 5️⃣ Putting it all together:
[
  ...prevFavThing,                // all old items
  allFavoriteThings[prevFavThing.length]  // the next one to add
]


➡️ This creates a new array that contains:

all your previous favorite things

plus one new thing (the next one from allFavoriteThings)

✅ 6️⃣ Example step-by-step

------------------------------------------------------------------------------------------------------------
Before click	  prevFavThing.length	    Added item	                                      New array

[]	                    0	                allFavoriteThings[0] = "potato"	                  ["potato"]

["potato"]	            1	                allFavoriteThings[1] = "tomate"	                  ["potato", "tomate"]

["potato", "tomate"]	2	                allFavoriteThings[2] = "pineapple"	              ["potato", "tomate", "pineapple"]

------------------------------------------------------------------------------------------------------------


Each click adds the next item from the allFavoriteThings list.

💬 In plain English

“Take the current list (prevFavThing),
copy everything from it (...prevFavThing),
then add one more item — the next one from allFavoriteThings,
based on how many we already have.”
*/

export default function StateArray(){
    
    const [myFavoriteThings,setMyFavoriteThings] = React.useState([])
    const allFavoriteThings = ["potato","tomate","pineapple","juse","limonada","icecream","choclate"]

    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

    function addFavoriteThing(){
        setMyFavoriteThings(
            prevFavThing => [
                ...prevFavThing,
                allFavoriteThings[prevFavThing.length]
            ])
    }


    return (
        <>
        <button onClick={addFavoriteThing}>Add item</button>
        <section aria-label="polite">
            {thingsElements}
        </section>
        </>
    )
}