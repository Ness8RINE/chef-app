//import React from 'react';

export default function ReactForm(){

    /*
    function handelSubmit(event){
        event.preventDefault()
        const formElement = event.currentTarget //get acces to the DOM Of the form
        const formData = new FormData(formElement)  // get acces to all elements of the form 
        const myEmail = formData.get("mail")
        const myPassword = formData.get('password')
        formElement.reset()
        console.log(myEmail)
        console.log(myPassword)
    }
    
    */

    function singUp(formData){
        const email = formData.get('mail')
        console.log(`this email come from the singUP function ${email}`)
    }


    //to get all the data from the form : 
            // function singUpGetAllData(formData){
            //     const allFormData = Object.fromEntries(formData)
            //     console.log(allFormData)
            // }


    return(
        <>
        <section>
            <h1>Singup form</h1>
            {/* <form onSubmit={handelSubmit} method="post"> */}
            <form action={singUp} > 
                <label htmlFor="idEmail">Add your email </label><br/>
                <input id="idEmail" type="email" name="mail" placeholder="nes@gmail.com"/><br />
                <label htmlFor="idPass">Add a password </label><br/>
                <input id="idPass" type="password" name="password" /><br />
                <button>Submit</button>
            </form>
        </section>
        </>
    )
}