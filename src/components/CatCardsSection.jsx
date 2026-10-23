import icon from '../assets/cat-icon.png'
import img1 from '../assets/dingding.png'
import img2 from '../assets/ttungi.png'
import img3 from '../assets/jingjing.png'
import img4 from '../assets/mingming.png'
import img5 from '../assets/daol.png'
import img6 from '../assets/yeppi.png'
import img7 from '../assets/ttalgi.png'
import img8 from '../assets/meoru.png'
import img9 from '../assets/dallae.png'
import img10 from '../assets/aengdu.png'
import img11 from '../assets/cheri.png'
import img12 from '../assets/jadu.png'
import img13 from '../assets/ppotto.png'
import img14 from '../assets/kkami.png'

// Information of cats in Dongseo University
const cats = [
    {
        id: 1,
        name: "딩딩 (~2018.11)",
        description: "고등어 고양이. 노묘이고 너구리라는 별명이 있었다.",
        img: img1
    },
    {
        id: 2,
        name: "뚱이 (2016.06~)",
        description: "검은색이 조금 묻은 우유 고양이. 먹는 것을 좋아한다. 사람을 좋아한다. 현재는 디자인홀에서 거주한다.",
        img: img2
    },
    {
        id: 3,
        name: "징징 (2017.07~)",
        description: "삼색이 섞여있고 코가 핑크색인 고양이. 카페 내에 지정석이 있다. 살이 잘 찌는 체질이므로 간식 금지!",
        img: img3
    },
    {
        id: 4,
        name: "밍밍 (2016.06~)",
        description: "치즈가 약간 묻은 우유고양이. 몸집이 작고 순하다.",
        img: img4
    },
    {
        id: 5,
        name: "디올",
        description: "검은색이 주된 카오스 고양이. 사람을 좋아하지 않는다. 학교 안에서 마주쳤다면 운세가 좋은 것!",
        img: img5
    },
    {
        id: 6,
        name: "예삐",
        description: "고등어 고양이. 우진 아파트에 주로 거주한다.",
        img: img6
    },
    {
        id: 7,
        name: "딸기",
        description: "배가 하얀 고등어 고양이. 사람을 좋아하지 않는다. 글로벌빌리지에 주로 거주한다.",
        img: img7
    },
    {
        id: 8,
        name: "머루 (2018.01~)",
        description: "어깨에 문신을 한 고등어 고양이. 사람을 좋아하지 않는다.",
        img: img8
    },
    {
        id: 9,
        name: "달래 (2018.01~)",
        description: "귀가 까만 삼색 고양이. 사람을 좋아하지 않는다. 몸집이 작은 편이다.",
        img: img9
    },
    {
        id: 10,
        name: "앵두 (2019.06~)",
        description: "콧수염에 커피가 잔뜩묻은 고등어 고양이. 사람을 아주 좋아한다. *현재 심한 구내염을 앓고있다.",
        img: img10
    },
    {
        id: 11,
        name: "체리 (2019.06~)",
        description: "코를 조금 흘린 젖소 고양이. 사람을 좋아한다.",
        img: img11
    },
    {
        id: 12,
        name: "자두 (성묘 추정)",
        description: "젖소 고양이. 앵두, 체리와 친하다.",
        img: img12
    },
    {
        id: 13,
        name: "뽀또 (성묘 추정)",
        description: "치즈 고양이. 친화력이 좋다. 글로벌빌리지 건물에서 자주 출몰한다.",
        img: img13
    },
    {
        id: 14,
        name: "까미",
        description: "털이 전체적으로 까맣고 어린 고양이. 사람을 좋아하나, 여기저기 돌아다닌다.",
        img: img14
    },
];

// "딩딩 (~2018.11)" -> { title: "딩딩", since: "~2018.11" }
const splitName = (name) => {
    const match = name.match(/^(.*?)\s*\((.*)\)$/);
    return match
    ? { title: match[1], since: match[2] }
    : { title: name, since: null};
} 

const CatCardsSection = () => {
    return (
        <div>
            <h2 className="pagetitle">동서대학교에서 자주 보이는 고양이들</h2>
            {/* <p className="titledescription">동서대학교에서 자주 보이는 고양이들을 소개해드리겠습니다!</p> */}

            <div className="catgrid">
                {cats.map((cat) => {
                    const {title, since} = splitName(cat.name);
                    return (
                        <article key={cat.id} className="catcard">
                            {/* 1. The slot at the top */}
                            <div className="card-slot" aria-hidden="true"></div>
                            
                            {/* 2. The header of the card (green) */}
                            <header className="card-header">
                                <img src={icon} alt="" />
                                <span className="card-headnote">고양이 카드</span>
                            </header>

                            {/* 3. The main content of the card */}
                            <div className="card-main">
                                <img src={cat.img} alt={`고양이 ${title}`} className="card-img"/>
                                <dl className="card-fields">
                                    <div>
                                        <dt>이름</dt>
                                        <dd className="card-name">{title}</dd>
                                    </div>
                                    <div>
                                        <dt>추가 정보</dt>
                                        <dd className="card-note">{since || '미상'}</dd>
                                    </div>
                                </dl>
                            </div>

                            {/* 4. The description of the card */}
                            <p className="card-desc">
                                <b>특이사항</b>
                                {cat.description || '정보 없음'}
                            </p>
                            <div className="barcode" aria-hidden="true"></div>

                        </article>
                            
                        );
                    })}
            </div>
            
            <footer>바코드는 디자인 요소로, 실제 스캔은 불가합니다.</footer>
        </div>
    )
};

export default CatCardsSection;
