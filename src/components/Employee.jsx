function Employee() {
    const name = "Saker";
    const role = "Full Stack Developer";
    const yearsOfExperience = 5;
    
    return (
        <div>
            <h2>name: {name}</h2>
            <p>role: {role}</p>
            <p>years of experience: {yearsOfExperience}</p>
            <p>{yearsOfExperience >= 5 ? "Ervaren developer" : "Junior/Mid developer"}</p>
        </div>
    );
}

export default Employee;