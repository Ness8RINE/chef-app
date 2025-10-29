
/*
const [going, setGoing] = React.useState(true);

function handleGoing() {
  setGoing(prev => !prev);
}
⚙️ Étape 1 — Premier rendu
Quand le composant s’affiche la première fois :

going = true

donc le bouton montre “Yes”

⚙️ Étape 2 — Premier clic
Tu cliques sur le bouton
👉 setGoing(prev => !prev) est exécuté

prev vaut la valeur actuelle (true)

!prev = !true = false

donc setGoing(false)

React met à jour son state interne :

maintenant going = false

React re-render le composant (le redessine avec la nouvelle valeur)

⚙️ Étape 3 — Deuxième clic
Tu cliques encore une fois :

cette fois prev = false

!prev = true

React remet going = true

Le composant se re-render encore.

⚙️ Résultat final :
Clics	Valeur de going	Affichage
0	true	“Yes”
1	false	“No”
2	true	“Yes”
3	false	“No”

⚡ Pourquoi ça marche
Parce que useState() garde en mémoire la valeur actuelle à l’intérieur du composant — même après plusieurs re-rendus.
Chaque fois que tu appelles setGoing(...), React met à jour cette valeur, puis recalcule l’interface.

*/

import React from "react";
export default function StateBoolean(){
    
    const [going, func] = React.useState(true)

    function handelGoing(){
        func( prevState => !prevState)
    }
    return (
        <>
        <h1>Do you feel goining out today ?</h1>
        <button onClick={handelGoing}>{going ? "Yes" : "No"}</button>
        </>
    )
    
}
