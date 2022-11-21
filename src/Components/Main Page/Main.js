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
                    <main style={{justifyContent:"center", cursor:"pointer", padding:"9em 0 9em 0"}}>
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
            <div className="ceil">
                <div className="container container-second-page">
                    <div className="header" style={{padding:"20px 20px 20px 10px"}}>
                        <p style={{fontSize:"52px",}}>ИТ ЦЕХ</p>
                    </div>
                    <main className="main-second-page">
                        <div className="info-about-us">
                            <p>>автоматизирует <br/> рутинные тех. процессы компаний <br/>в телеграмм-боте </p>
                            <p>>учет инвентаря\</p>
                            <p>>учет рабочего времени\</p>
                            <p>>учет персонала\</p>
                            <p>>и т.п.> показать на экране <br/>смартфона руководителя\ <span className="low-dash">__</span></p>
                        </div>
                        <div className="cub-container cub-container-second-page">
                            <div className="cube-ceil cube-ceil-second-page">
                                <img className="img-second-page" src="cube-3.gif" alt="cube"/>
                            </div>
                        </div>
                    </main>
                    <div className="footer footer-second-page" style={{justifyContent:"space-between", padding:"3em 0 7em 0"}}>
                        <div className="bot" style={{alignItems:"center"}}>
                            <div className="bot-container">
                                <div className="bot-ceil">
                                    <img style={{maxWidth: "80px", alignItems:"center"}} src="telegram-2.gif" alt="телеграмм-бот"/>
                                </div>
                            </div>
                        </div>
                        <div>
                        <h1>Думайте о будущем.</h1>
                        <h1>Рутина - забота бота ИТ-ЦЕХ</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main;
