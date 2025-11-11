const EmergencySection = () => {
    return (
        <div>
            <h2 className="pagetitle">비상 상황 발생 시</h2>
            <div>
                <div className="card">
                    <h3>1. 고양이가 다쳤거나 아파 보일 때</h3>
                    <ol>
                        <li>무리하게 잡으려고 하지 마세요. 고양이가 흥분하면 더 다칠 수 있습니다.</li>
                        <li>즉시 학교 내 동물보호 동아리나 가까운 동물병원에 연락하세요.
                            <ul>
                                <li>연락처: 000-000-0000 (학교 동아리)</li>
                                <li>연락처: 000-000-0000 (지역 동물병원)</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
};

export default EmergencySection;