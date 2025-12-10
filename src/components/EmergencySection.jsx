const EmergencySection = () => {
    return (
        <div>
            <h2 className="pagetitle">비상 상황 발생 시</h2>
            <div className="cardslist">

                <div className="card emergencyinfo">
                    <h3>고양이가 공격성을 보일 때 대처 요령</h3>
                    <ol>
                        <li>공격하는 이유: 고양이가 공격성을 보일 때는 영역을 지키거나 새끼가 있는 어미 고양이가 새끼를 지키기 위해 공격성을 보일 수가 있다.</li>
                        <li>대처 요령: 고양이와 거리 유지, 발을 구르거나 큰 소리로 위협하지 않는다.</li>
                        <li>피해 시 조치: 물림, 할큄은 즉시 상처를 소독하고 병원에 가서 파상풍·항생제 등 치료, 광견병 예방접종과 바르토넬리증 등 감염 가능성이 있어 병원에 가서 검사하기.</li>
                    </ol>
                    <p>사상구청 청소행정과: 051-310-4541(일반 폐기물·동물 사체 수거 담당)</p>
                </div>

                <div className="card emergencyinfo">
                    <h3>고양이가 다쳐있거나 죽어있을 때 대처법</h3>
                    <ol>
                        <li>다쳐있는 경우
                            <ul>
                                <li> 놀라 공격하거나 스트레스를 받을 수 있어 멀리서 혈흔, 호흡, 움직임을 관찰한다.</li>
                                <li>긴급한 경우에는 지자체 동물보호센터에 신고하여 신속하게 도움을 받는 것이 좋다.</li>
                            </ul>
                        </li>
                        <li>죽어있는 경우
                            <ul>
                                <li>전염병이나 기생충 위험이 있어 접촉하지 않고 관할 구청/시청에 신고하여 사체를 수거한다. </li>
                            </ul>
                        </li>
                    </ol>
                </div>

            </div>
        </div>
    )
};

export default EmergencySection;