import { useState } from 'react';

const CatDictionarySection = () => {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    const dictionaryItems = [
        {
            id: 1,
            subtitle: "고양이에게 먹이면 안 되는 것",
            info: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in info piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, info Latin professor at Hampden-Sydney College"
        },
        {
            id: 2,
            subtitle: "조심해야 할 점",
            info: "in Virginia, looked up one of the more obscure Latin words, consectetur, from info Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of"
        },
    ];

    return (
        <div>
            <h2 className="pagetitle">고양이 사전</h2>
            <div>
                {dictionaryItems.map(item => (
                    <div className="card">
                        <button onClick={() => toggleItem(item.id)}>
                            {item.subtitle}
                            <span>{openItem === item.id ? ' ▲' : ' ▼'}</span>
                        </button>
                    
                    {openItem === item.id && (
                        <div>
                            <p>{item.info}</p>
                        </div>
                    )}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default CatDictionarySection;