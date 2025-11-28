import img1 from '../assets/goobers.gif'
import img2 from '../assets/pissedoff.jpg'
import img3 from '../assets/tongueout.jpg'

// Information of cats in Dongseo University

const CatCardsSection = () => {
    const cats = [
        {
            id: 1,
            name: "딩딩 (~2018.11)",
            date: "",
            description: "고등어 고양이. 노묘이고 너구리라는 별명이 있었다.",
            img: img1
        },
        {
            id: 2,
            name: "뚱이 (2016.06~)",
            date: "",
            description: "검은색이 조금 묻은 우유 고양이. 먹는 것을 좋아한다. 사람을 좋아한다. 현재는 디자인홀에서 거주한다.",
            img: img2
        },
        {
            id: 3,
            name: "징징 (2017.07~)",
            date: "",
            description: "삼색이 섞여있고 코가 핑크색인 고양이. 카페 내에 지정석이 있다. 살이 잘 찌는 체질이므로 간식 금지!",
            img: img3
        },
        {
            id: 4,
            name: "밍밍 (2016.06~)",
            date: "",
            description: "치즈가 약간 묻은 우유고양이. 몸집이 작고 순하다.",
            img: img1
        },
        {
            id: 5,
            name: "디올",
            date: "",
            description: "검은색이 주된 카오스 고양이. 사람을 좋아하지 않는다. 학교 안에서 마주쳤다면 운세가 좋은 것!",
            img: img1
        },
        {
            id: 6,
            name: "예삐",
            date: "",
            description: "고등어 고양이. 우진 아파트에 주로 거주한다.",
            img: img1
        },
        {
            id: 7,
            name: "딸기",
            date: "",
            description: "배가 하얀 구등어 고양이. 사람을 좋아하지 않는다. 글로벌빌리지에 주로 거주한다.",
            img: img1
        },
        {
            id: 8,
            name: "마루 (2018.01~)",
            date: "",
            description: "어깨에 문신을 한 고등어 고양이. 사람을 좋아하지 않는다.",
            img: img1
        },
        {
            id: 9,
            name: "달래 (2018.01~)",
            date: "",
            description: "귀가 까만 삼색 고양이. 사람을 좋아하지 않는다. 몸집이 작은 편이다.",
            img: img1
        },
        {
            id: 10,
            name: "앵두 (2019.06~)",
            date: "",
            description: "콧수염에 커피가 잔뜩묻은 고등어 고양이. 사람을 아주 좋아한다. *현재 심한 구내염을 앓고있다.",
            img: img1
        },
        {
            id: 11,
            name: "체리 (2019.06~)",
            date: "",
            description: "코를 조금 흘린 젖소 고양이. 사람을 좋아한다.",
            img: img1
        },
        {
            id: 12,
            name: "자두 (성묘 추정)",
            date: "",
            description: "젖소 고양이. 앵두, 체리와 친하다.",
            img: img1
        },
        {
            id: 12,
            name: "뽀또 (성묘 추정)",
            date: "",
            description: "치즈 고양이. 친화력이 좋다. 글로벌빌리지 건물에서 자주 출몰한다.",
            img: img1
        },
        {
            id: 12,
            name: "까미",
            date: "",
            description: "털이 전체적으로 까맣고 어린 고양이. 사람을 좋아하나, 여기저기 돌아다닌다.",
            img: img1
        },
    ];


    return (
        <div>
            <h2 className="pagetitle">동서대 고양이 카드</h2>
            <p className="titledescription">동서대학교에서 자주 보이는 고양이들을 소개해드리겠습니다!</p>
            <div className="cardslist">
                {cats.map((cat) => (
                // Making card for each cats
                    <div key={cat.id} className="card catcard">
                        <h3>{cat.name}</h3>
                        <img src={cat.img} alt="cat pic" className="catcard-img"/>
                        <div className="catcard-info">
                            {/* <p>{cat.date}</p> */}
                            <p>{cat.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default CatCardsSection;