import React, { useState } from 'react';
import './index.css';
import { familyData } from './data';

function Page({ name, photoUrl, details, gender, relation, children }) {

    const [selectedChild, setSelectedChild] = useState(null);

    let AllChildren = [];
    for (var i = 0; i < children.length; i++) {
        let Xname = children[i];
        AllChildren.push(
            <li key={Xname}>
                <div className="childrens" onClick={() => {
                    scrollToBottom();
                    handleChildClick(Xname);
                }}>
                    {Xname}
                </div>
                <br className='NewLine'></br>
            </li >
        );
    }

    let relationName = <p className="childrens" onClick={() => { scrollToBottom(); handleChildClick(relation) }} href='http://localhost:3000/#'>{relation}</p>
    let relationShip;
    if (gender === "Male") {
        relationShip = "Wife :- "
    }
    else {
        relationShip = "Husband :- "
    }
    if (relation === "") {
        relationShip = "Unmarried";
    }

    // function handleChildClick(Xname) {
    //     for (let i = 0; i < familyData.length; i++) {
    //         if (familyData[i].name === Xname) {
    //             setSelectedChild(familyData[i]);
    //         } else {
    //             setSelectedChild(null);
    //         }
    //     }
    // }

    function handleChildClick(Xname) {
        if (selectedChild && selectedChild.name === Xname) {
            setSelectedChild(null);
        } else {
            for (let i = 0; i < familyData.length; i++) {
                if (familyData[i].name === Xname) {
                    setSelectedChild(familyData[i]);
                    break;
                }
            }
        }
    }


    function scrollToBottom() {
        setTimeout(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }, 100);
    }

    return (
        <div className='chara'>
            <div className='Myself' >
                <h2 className='character-name'>{name}</h2>
                < h2 className='character-relation' onClick={() => handleChildClick(relation)}>{relationShip}  {relationName}</h2>
                <div className='character-img'>
                    <img className='character-img toBorder' src={photoUrl} alt={name} />
                </div>
                <p className='Character-details'>{details}</p>
                <div className='offsprings'>{AllChildren}</div>



            </ div>
            {selectedChild && (
                // <div>
                <Page
                    name={selectedChild.name}
                    photoUrl={selectedChild.photoUrl}
                    details={selectedChild.details}
                    gender={selectedChild.Gender}
                    relation={selectedChild.relation}
                    children={selectedChild.children}
                />
                // </div>
            )}

        </div>
    );
}

export default Page;  