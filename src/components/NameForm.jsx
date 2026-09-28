import { useState } from "react";

function NameForm() {
    const [name, setName] = useState("");
    const [submittedName, setSubmittedName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name.trim() === "") {
            setError("Voer een naam in.");
            return;
        }

        setError("");
        setSubmittedName(name);
        setName("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Naam:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {submittedName && <p>Hallo {submittedName}!</p> /*als submittedName niet leeg is, toon de boodschap*/ }      
        </div>
    );
}

export default NameForm;