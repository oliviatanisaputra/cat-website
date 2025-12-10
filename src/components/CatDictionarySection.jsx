import { useState } from 'react';

const CatDictionarySection = () => {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    const dictionaryItems = [
        {
            id: 1,
            subtitle: "학교나 공공장소에 사는 길고양이는",
            info: "‘도시생태계의 일부’로, 쥐나 해충을 잡아주는 역할을 한다. 하지만 사람과의 공존 문제(배설물, 울음소리, 쓰레기 봉투 훼손 등) 때문에 갈등이 생기기도 한다. 대부분 중성화(TNR)된 개체는 번식을 하지 않으며, 일정 구역을 중심으로 생활한다. 사람의 돌봄(밥, 물, 잠자리 등)에 익숙한 경우도 있다.",
        },
        {
            id: 2,
            subtitle: "주의 사항",
            info: "1. 만지거나 갑자기 다가가지 않기 → 낯선 사람을 경계하므로 공격하거나 도망칠 수 있다.;2. 학교에서 고양이와의 거리 유지 → 교내 위생 문제나 안전을 위해 학교 규칙에 따라 행동해야 한다.;3. 먹이 급식소·TNR 프로그램 협력 → 함부로 밥을 주기보다, 학교나 지역센터와 협력해서 체계적으로 관리해야 한다.;4. 다친 고양이 발견 시 신고 → 지역 동물보호센터나 구청 동물복지팀에 연락하기."
        },
        {
            id: 3,
            subtitle: "고양이에게 해로운 음식",
            info: "양파, 마늘 (적혈구 파괴로 빈혈 유발); 초콜릿, 커피 (카페인·테오브로민 독성); 생선 가시, 닭뼈 (소화기관 손상 가능); 우유	(유당불내증으로 설사 유발); 짠 음식, 라면, 햄 등 (나트륨 과다로 신장에 해로움 포도, 건포도 신장 손상 가능)"
        },
        {
            id: 4,
            subtitle: "건강 정보",
            info: "길고양이는 벼룩, 진드기, 기생충, 바이러스 등을 가지고 있을 수 있다. 대표 질병. 고양이 감염병: 고양이 감염성 복막염(FIP), 고양이 백혈병(FeLV), 고양이 에이즈(FIV). 사람에게 옮길 수 있는 질병(인수공통감염병): 톡소플라스마증, 고양이 긁힘병. 따라서 직접 접촉하거나 쓰다듬지 않는 것이 중요하다."
        },
    ];

    return (
        <div>
            <h2 className="pagetitle">고양이 사전</h2>
            <div className="cardslist">
                {dictionaryItems.map(item => (
                    <div className="card dictionaryinfo">
                        <button onClick={() => toggleItem(item.id)}>
                            <h3>
                                {item.subtitle}
                                <span>{openItem === item.id ? '  ▲' : '  ▼'}</span>
                            </h3>
                        </button>
                    
                    {openItem === item.id && (
                        <div className="dictionaryinfo-info">
                            <p>{item.id === 2 || item.id === 3
                            ? item.info.split(';').map((part, index) => (
                                <span key={index}>
                                    {index > 0 && <br />}{part.trim()}
                                </span>
                            ))
                            : item.info}</p>
                        </div>
                    )}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default CatDictionarySection;