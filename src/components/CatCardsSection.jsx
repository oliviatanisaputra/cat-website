import img1 from '../assets/goobers.gif'
import img2 from '../assets/pissedoff.jpg'
import img3 from '../assets/tongueout.jpg'

// Information of cats in Dongseo University

const CatCardsSection = () => {
    const cats = [
        {
            id: 1,
            name: "치즈",
            location: "blabla",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
            img: img1
        },
        {
            id: 2,
            name: "bb",
            location: "blabla",
            description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
            img: img2
        },
        {
            id: 3,
            name: "cc",
            location: "blabla",
            description: "Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            img: img3
        },
    ];


    return (
        <div>
            <h2 className="pagetitle">동서대 고양이 카드</h2>
            <div className="cardslist">
                {cats.map((cat) => (
                // Making card for each cats
                    <div key={cat.id} className="card catcard">
                        <img src={cat.img} alt="cat pic" className="catcard-img"/>
                        <div className="catcard-info">
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