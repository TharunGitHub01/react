import React from "react";
import '../../src/css/Cards.css';
const data = [
    {
        "description": "Training beautiful age four skin cultural hundred environmental ability blood go physical relate produce tough open police.", "url": "https://api.slingacademy.com/public/sample-photos/6.jpeg", "title": "Apply future response she reduce decide", "id": 6, "user": 30
    },
    {
        "description": "Few address take for special development white career.", "url": "https://api.slingacademy.com/public/sample-photos/7.jpeg", "title": "Fire year candidate too like", "id": 7, "user": 20
    },
    {
        "description": "Drug if approach out according set home job company wall source trouble act huge easy style physical so month.", "url": "https://api.slingacademy.com/public/sample-photos/8.jpeg", "title": "Reflect design camera land girl wind behind side", "id": 8, "user": 13
    },
    {
        "description": "Nature focus wonder behind magazine pattern degree far without tree consider.", "url": "https://api.slingacademy.com/public/sample-photos/9.jpeg", "title": "Per nature research", "id": 9, "user": 2
    },
    {
        "description": "Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.", "url": "https://api.slingacademy.com/public/sample-photos/10.jpeg", "title": "Yard", "id": 10, "user": 30
    },
    {
        "description": "Their base help outside often grow address himself product issue watch pick kid all break ever threat try learn edge degree name order everyone seem interest democratic card reach safe war gun expert.", "url": "https://api.slingacademy.com/public/sample-photos/11.jpeg", "title": "Commercial kitchen", "id": 11, "user": 29
    },
    {
        "description": "Car garden begin western over suggest even read nor might price different pick.", "url": "https://api.slingacademy.com/public/sample-photos/12.jpeg", "title": "Fact herself", "id": 12, "user": 5
    },
    {
        "description": "Wonder race yeah seem of argue a final follow evening hair.", "url": "https://api.slingacademy.com/public/sample-photos/13.jpeg", "title": "Produce science chance develop something", "id": 13, "user": 16
    },
    {
        "description": "Result democratic design until always parent sell film true social range author expert least reveal those.", "url": "https://api.slingacademy.com/public/sample-photos/14.jpeg", "title": "Positive particular", "id": 14, "user": 28
    },
    {
        "description": "Young follow magazine bar kitchen begin at around home tax north majority especially institution.", "url": "https://api.slingacademy.com/public/sample-photos/15.jpeg", "title": "Again would high particularly American table", "id": 15, "user": 14
    },
    {
        "description": "Chance boy family recent office according stay wrong during bag level which song also movement worker medical people important difference Congress store hotel they southern music statement kind book.", "url": "https://api.slingacademy.com/public/sample-photos/16.jpeg", "title": "Boy trouble offer candidate maybe mean family", "id": 16, "user": 27
    },
    {
        "description": "Writer play bank could response TV middle improve front growth act husband provide take trial student hand task most few receive loss allow allow range.", "url": "https://api.slingacademy.com/public/sample-photos/17.jpeg", "title": "Pass effect part", "id": 17, "user": 26
    },
    {
        "description": "Writer play bank could response TV middle improve front growth act husband provide take trial student hand task most few receive loss allow allow range.", "url": "https://api.slingacademy.com/public/sample-photos/17.jpeg", "title": "Pass effect part", "id": 17, "user": 26
    },
    {
        "description": "Notice organization admit could born laugh event writer ask most debate modern talk quite arm physical nor voice.", "url": "https://api.slingacademy.com/public/sample-photos/18.jpeg", "title": "East operation young indeed draw great professor", "id": 18, "user": 25
    },
    {
        "description": "Senior learn world agreement receive civil range detail everything model interest read film everything important.",
        "url": "https://api.slingacademy.com/public/sample-photos/19.jpeg",
        "title": "Style class that party see eat find",
        "id": 19,
        "user": 11
    },
    {
        "description": "General free fly decide edge yeah their skill work television those claim pull out player leg ok small minute return morning minute son down model series team hot knowledge.", "url": "https://api.slingacademy.com/public/sample-photos/20.jpeg", "title": "No white success knowledge player community", "id": 20, "user": 20
    },
    {
        "description": "In each him half stuff under great.", "url": "https://api.slingacademy.com/public/sample-photos/21.jpeg", "title": "Nice write individual major conference bed class office shoulder", "id": 21, "user": 10
    },
    {
        "description": "Month around PM on group education college any evidence until dog argue him production town on.", "url": "https://api.slingacademy.com/public/sample-photos/22.jpeg", "title": "Apply personal receive and", "id": 22, "user": 23
    },
    {
        "description": "Million recently economic way short again share bill suggest short son natural.", "url": "https://api.slingacademy.com/public/sample-photos/23.jpeg", "title": "Tax risk guess each court hand sea goal dream", "id": 23, "user": 26
    },
    {
        "description": "Million rise ever something perhaps short culture animal tree radio quickly party doctor couple identify less peace bad both area leader bit simple stuff.", "url": "https://api.slingacademy.com/public/sample-photos/24.jpeg", "title": "Man whom woman produce may rule his man born choose few century", "id": 24, "user": 29
    },
    {
        "description": "Message during performance especially care alone wind many hour president lose place write.",
        "url": "https://api.slingacademy.com/public/sample-photos/25.jpeg",
        "title": "Certainly than need enjoy understand right",
        "id": 25,
        "user": 15
    }
];

function Cards() {
    return (
        <article className="mmmmm">
            {
                data.map((eachobj) => {
                    return (
                        <Ncards
                            key={eachobj.id}
                            title={eachobj.title}
                            imgURL={eachobj.url}
                            description={eachobj.description}
                        />
                    )
                })
            }
        </article>
    )
}

const Ncards = ({ title, imgURL, description }) => {
    return (
        <div className="card">
            <div className="img">
                <img src={imgURL} />
            </div>
            <div className="details">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default Cards;