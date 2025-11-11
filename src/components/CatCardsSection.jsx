// Information of cats in Dongseo University

const CatCardsSection = () => {
    const cats = [
        {
            id: 1,
            name: "aa",
            location: "blabla",
            description: "blablablablabla blablablablabla blablablablabla",
            img: null
        },
        {
            id: 2,
            name: "bb",
            location: "blabla",
            description: "blablablablabla blablablablabla blablablablabla",
            img: null
        },
        {
            id: 3,
            name: "cc",
            location: "blabla",
            description: "blablablablabla blablablablabla blablablablabla",
            img: null
        },
    ];


    return (
        <div>
            <h2 className="pagetitle">동서대 고양이 카드</h2>
            <div>
                {cats.map((cat) => (
                // Making card for each cats
                    <div key={cat.id}>
                        {/* image here */}
                        <div className="card">
                            <h3>{cat.name}</h3>
                            <p>{cat.location}</p>
                            <p>{cat.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default CatCardsSection;