function Book() {
    const title = "Laravel";
    const author = "Taylor Otwell";
    const year = 2024;

    return (
        <div>
            <h2>Title: {title}</h2>
            <p>Author: {author}</p>
            <p>Year: {year}</p>
            <p>{year >= 2020 ? "Recent boek" : "Ouder boek"}</p>
        </div>
    );
}

export default Book;