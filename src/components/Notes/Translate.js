import React, { useEffect, useState } from "react";
import countries from "../../data";
import '../../App.css'
import './menu.css'
import { FaBars, FaTimes, FaCamera, FaAssistiveListeningSystems, FaStopCircle } from 'react-icons/fa';
import { SiGrammarly } from "react-icons/si";
import { FcNeutralDecision } from "react-icons/fc";

// import Menubar from './Menubar';

const Translate = () => {
    const[input,setInput]=useState('');
    const[output,setOutput]=useState('');

    const sendInput=async(e)=>{
        e.preventDefault();

        const res = await fetch('http://localhost:8888/auth/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                input
            })
        }).then((res) => {return res.json()});
            const result = async () => {
                const data = await res;
                console.log(data);
    
                if(data.status === 422 || !data)
                {
                    window.alert('Something went wrong');
                }
                else{
                    setOutput(data)
                }
    }
}










    useEffect(() => {
        const fromText = document.querySelector(".from-text");
        const toText = document.querySelector(".to-text");
        const exchageIcon = document.querySelector(".exchange");
        const selectTag = document.querySelectorAll("select");
        const icons = document.querySelectorAll(".row i");
        const translateBtn = document.querySelector("button");
        selectTag.forEach((tag, id) => {
            for (let country_code in countries) {
                let selected =
                    id == 0
                        ? country_code == "en-GB"
                            ? "selected"
                            : ""
                        : country_code == "hi-IN"
                            ? "selected"
                            : "";
                let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
                tag.insertAdjacentHTML("beforeend", option);
            }
        });

        exchageIcon.addEventListener("click", () => {
            console.log("helo");
            let tempText = fromText.value;
            let tempLang = selectTag[0].value;
            console.log(tempText);
            console.log(tempLang);
            fromText.value = toText.value;
            toText.value = tempText;
            selectTag[0].value = selectTag[1].value;
            selectTag[1].value = tempLang;
        });

        fromText.addEventListener("keyup", () => {
            if (!fromText.value) {
                toText.value = "";
            }
        });

        translateBtn.addEventListener("click", () => {
            let text = fromText.value.trim();
            let translateFrom = selectTag[0].value;
            let translateTo = selectTag[1].value;
            if (!text) return;
            toText.setAttribute("placeholder", "Translating...");
            let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
            fetch(apiUrl)
                .then((res) => res.json())
                .then((data) => {
                    toText.value = data.responseData.translatedText;
                    data.matches.forEach((data) => {
                        if (data.id === 0) {
                            toText.value = data.translation;
                        }
                    });
                    toText.setAttribute("placeholder", "Translation");
                });
        });

        icons.forEach((icon) => {
            icon.addEventListener("click", ({ target }) => {
                if (!fromText.value || !toText.value) return;
                if (target.classList.contains("fa-copy")) {
                    if (target.id == "from") {
                        navigator.clipboard.writeText(fromText.value);
                    } else {
                        navigator.clipboard.writeText(toText.value);
                    }
                } else {
                    let utterance;
                    if (target.id == "from") {
                        utterance = new SpeechSynthesisUtterance(fromText.value);
                        utterance.lang = selectTag[0].value;
                    } else {
                        utterance = new SpeechSynthesisUtterance(toText.value);
                        utterance.lang = selectTag[1].value;
                    }
                    speechSynthesis.speak(utterance);
                }
            });
        });
    }, []);
    return (
        <div >
            <div className="container1">
                <div >
                    <div className="box-menu">
                        <ul className='menu-item'>
                            <li>
                                <FaCamera size='25' style={{ color: '#0A2647' }} />
                            </li>
                            <li>
                                <FaAssistiveListeningSystems size="25" style={{ color: '#222' }} />
                            </li>
                            <li>
                                <FaStopCircle size="25" style={{ color: 'red' }} />
                            </li>
                            <li>
                                <SiGrammarly size="25" style={{ color: '#ABC270' }} />
                            </li>
                            <li>
                                <FcNeutralDecision size="27" style={{ color: '#ABC270' }} />
                            </li>

                        </ul>
                    </div>

                </div >
                <form action="POST">
                    <div className="text-input w-[100%]">
                        <textarea
                            spellcheck="false"
                            className="from-text"
                            style={{background:"#F8F5E4"}}
                            placeholder="Type your Note"
                            value={input}
                            onChange={(e)=>setInput(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <ul className="controls">
                        <li className="row from">
                            <div className="icons">
                                <i id="from" className="fas fa-volume-up"></i>
                                <i id="from" className="fas fa-copy"></i>
                            </div>
                            <select></select>
                        </li>
                        <li className="exchange">
                            <i className="fas fa-exchange-alt"></i>
                        </li>
                        <li className="row to">
                            <select></select>
                            <div className="icons">
                                <i id="to" className="fas fa-volume-up"></i>
                                <i id="to" className="fas fa-copy"></i>
                            </div>
                        </li>
                    </ul>
                    <div className="text-input">
                        <textarea
                            spellcheck="false"
                            readonly
                            disabled
                            className="to-text"
                            placeholder="Check For Output"
                        >{output.text}</textarea>
                    </div>

                </form>
                <button style={{ width: '100%' }}>Translate Text</button>
            </div>
        </div>
    );
};

export default Translate;
