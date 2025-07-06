import React, { useState } from "react";

const HomeComponent = (props) => {

    
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [phonenumber, setPhonenumber] = useState("")

    const [firstnameError, setFirstnameError] = useState("")
    const [lastnameError, setLastnameError] = useState("")
    const [phonenumberError, setPhonenumberError] = useState("")

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();  //prevent page reloading
        props.newMessage(["Apple" , "Orange", "Mango"])
        const user = { firstname, lastname, phonenumber } //Property Value Shorthand 

        setFirstname("")
        setLastname("")
        setPhonenumber("")

        setFirstnameError("")
        setLastnameError("")
        setPhonenumberError("")

        setHasBeenSubmitted(true)

        
        
    }

    const handleFirstname = (e) => {
        if (e.target.value.length < 10) {
            setFirstnameError("Firstname must be more than 10 chars!")
        }
        else {
            setFirstname(e.target.value)
            setFirstnameError("")
        }
    }

    const handleLastname = (e) => {
        if (e.target.value.length < 10) {
            setLastnameError("Lastname must be more than 10 chars!")
        }
        else {
            setLastname(e.target.value)
            setLastnameError("")
        }
    }

    const handlePhonenumber = (e) => {
        if (e.target.value.length < 10) {
            setPhonenumberError("Phone Number must be more than 10 chars!")
        }
        else {
            setPhonenumber(e.target.value)
            setPhonenumberError("")
        }
    }

    const showMessage = () => {
        return hasBeenSubmitted ? "Submitted Successfully " : ""
    }

    return (
        <>
            <h3> {showMessage() } </h3>
            <form action="" method="" onSubmit={handleSubmit}>
                <label htmlFor="firstname"> First Name:</label>
                <input type="text" name="firstname" onChange={handleFirstname} />
                {
                    firstnameError ? <p>{firstnameError}</p> : <p></p>
                }
                <label htmlFor="lastname"> Last Name:</label>
                <input type="text" name="lastname" onChange={handleLastname} />
                {
                    lastnameError ? <p>{lastnameError}</p> : <p></p>
                }
                <label htmlFor="phonenumber"> Phonenumber:</label>
                <input type="text" name="phonenumber" onChange={handlePhonenumber} />
                {
                    phonenumberError ? <p>{phonenumberError}</p> : <p></p>
                }
                <button>Sign Up</button>
            </form>
        </>
    )
}

export default HomeComponent;