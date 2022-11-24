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
                            <h3 style={{marginBottom: "20px"}}>ит-цех.рф [версия 1.0]</h3>
                            <h3>(с) ИТ-ЦЕХ. Все права защищены.</h3>
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
                            <p style={{fontFamily:"'Open Sans', sans-serif", letterSpacing:"2px"}}>Ц:\автоматизация \внедрить>снять рутину<span className="low-dash" style={{color:"black"}}>__</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ceil">
                <div className="container container-second-page">
                    <div className="header" style={{padding:"20px 20px 20px 10px"}}>
                        <h1>ИТ-ЦЕХ</h1>
                    </div>
                    <main className="main-second-page">
                        <div className="info-about-us">
                            <p>>автоматизирует <br/>рутинные тех.процессы компаний<br/>в телеграмм-боте </p>
                            <p>>учет инвентаря\</p>
                            <p>>учет рабочего времени\</p>
                            <p>>учет персонала\</p>
                            <p>>и т.п.>показать на экране<br/>смартфона руководителя\<span className="low-dash" style={{color:"black"}}>__</span></p>
                        </div>
                        <div className="cub-container cub-container-second-page">
                            <div className="cube-ceil cube-ceil-second-page">
                                <img className="img-second-page" src="cube-3.gif" alt="cube"/>
                            </div>
                        </div>
                    </main>
                    <div className="footer footer-second-page" style={{justifyContent:"space-between", padding:"5em 0 9em 0"}}>
                        <div className="bot" style={{alignItems:"center", padding:"10px 20px 20px 10px"}}>
                            <div className="bot-container">
                                <div className="bot-ceil">
                                    <img style={{maxWidth: "80px", alignItems:"center"}} src="telegram-2.gif" alt="телеграмм-бот"/>
                                </div>
                            </div>
                        </div>
                        <div style={{padding:"0 0 0 10px"}}>
                        <p>Думайте о будущем.</p>
                        <p>Рутина - забота бота ИТ-ЦЕХ</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main;
