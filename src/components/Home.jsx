function Home({ onNavigate }) {
    return (
        <div className="home cardslist">
            <h2 className="pagetitle">무엇을 도와드릴까요?</h2>
            <p className="titledescription"></p>

            <button id="catcards" onClick={() => onNavigate('catcards')}>
                <div id="icon"></div>
                <div>
                    <h3>동서대 고양이 카드</h3>
                    <p></p>
                </div>
            </button>
            
            <button onClick={() => onNavigate('dictionary')}>
                <div id="icon"></div>
                <div>
                    <h3>고양이 사전</h3>
                    <p></p>
                </div>
            </button>
            
            <button onClick={() => onNavigate('emergency')}>
                <div id="icon"></div>
                <div>
                    <h3>비상 상황 발생 시</h3>
                    <p></p>
                </div>
            </button>
            
        </div>
    )
};

export default Home;