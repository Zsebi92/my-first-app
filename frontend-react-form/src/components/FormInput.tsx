import React, {ChangeEvent, FormEvent, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;

export default function FormInput() {


    const [musterungsForm, setMusterungsForm] = useState({
        sureName: "",
        name: "",
        age: "0",
        agb: "false"
    })


    function handleChange(changeEvent: ChangeEvent<HTMLInputElement>) {

        const fieldName = changeEvent.target.name;
        const fieldValue = changeEvent.target.value;


        console.log(changeEvent)

        setMusterungsForm(
            diealteMusterngsForm => ({
                ...diealteMusterngsForm,
                [fieldName]:
                    fieldValue === "checkbox" ? changeEvent.target.checked
                        : fieldValue

            }))
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        console.log("handleSubmit", musterungsForm)
    }


    return (
        <div className="form">
            <form onSubmit={handleSubmit}>

                <label> Vorname
                    <input name="sureName"
                           placeholder=""
                           type="text"
                           onChange={handleChange}
                           value={musterungsForm.sureName}/>
                </label>

                <label> Nachname
                    <input name="name"
                           placeholder=""
                           type="text"
                           onChange={handleChange}
                           value={musterungsForm.name}/>
                </label>

                <label> Alter
                    <input name="age"
                           placeholder="18"
                           type="number"
                           onChange={handleChange}
                           value={musterungsForm.age}
                    />
                </label>

                <label>AGB´s
                    <input name="boxIsChecked"
                           type="checkbox"
                           onChange={handleChange}/>

                </label>
                <button>Submit</button>


            </form>
        </div>
    );
}
