import React from "react";
import {Link} from "react-router-dom";
import "./main.css"
function Main() {
    return(
        <>
            <div className="ceil">
                <div className="container">
                    <div className="header">
                        <div className="info">
                            <h1 style={{marginBottom: "20px"}}>ит-цех.рф [версия 1.0]</h1>
                            <h1>(с) ИТ-ЦЕХ. Все права защищены.</h1>
                        </div>
                        <div className="bot">
                            <div className="bot-container">
                                <div className="bot-ceil">
                                <img style={{maxWidth: "80px", alignItems:"center"}} src="telegram-2.gif" alt="телеграмм-бот"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <main>
                        <div className="cub-container">
                            <div className="cube-ceil">
                                <img src="cube-3.gif" alt="cube"/>
                            </div>
                        </div>
                    </main>
                    <div className="footer">
                        <div className="footer-info">
                            <h1>Ц:\автоматизация \внедрить>снять рутину<span className="low-dash">__</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main;
