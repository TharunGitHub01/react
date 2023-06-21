import React from "react";
import p2 from '../../src/images/p2.png'
import p3 from '../../src/images/p3.png'
import p4 from '../../src/images/p4.png'
import p5 from '../../src/images/p5.png'
import '../../src/css/Iconss.css'
import p1 from '../../src/images/p1.png'
import Marquee from "react-fast-marquee";
function Iconss() {
    return (
        <div className="icons">
            <Marquee>
                <img src={p1} />
                <img src={p2} />
                <img src={p3} />
                <img src={p4} />
                <img src={p5} />
                <img src={p1} />
                <img src={p2} />
                <img src={p3} />
                <img src={p4} />
                <img src={p5} />
            </Marquee>
        </div>
    );
}
export default Iconss;