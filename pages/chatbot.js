import React, { useState, useEffect, useRef } from 'react';
import UseCaseMultipleStates from './useCaseMultipleStates';


const Chatbot = () => {
    const [isChatbotOpen, setChatbotOpen] = useState(false);
    const [textfield, setTextfield] = useState(["Hi there 👋<br />How can I help you today?"]);
    const [temptext, setTemptext] = useState('');
    const [time, setTime] = useState('');
    const chatboxRef = useRef(null);


    useEffect(() => {
        // Scroll to the bottom when new messages are added
        if (chatboxRef.current) {
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
          }
      }, [textfield]);


    const toggleChatbot = () => {
        setChatbotOpen(!isChatbotOpen);
    };

    const handleChange = (event) => {

        setTemptext(event.target.value)

    }


    const handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            event.preventDefault();
            if (temptext !== null || temptext !== '')
                addText();
        }
    };

    const addText = () => {

        const currentTimestamp = Date.now();
        const currentDate = new Date(currentTimestamp);
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;

        if (temptext.trim() !== '') {
            setTextfield((prev) => [...prev, temptext]);
            fetch(`https://api.funtranslations.com/translate/yoda.json${temptext}`)
                .then((res) => res.json())
                .then((data) => {

                    // const prob = data.country.reduce((acc, arr) => {
                    //     if (acc.probability < arr.probability)
                    //       {  acc.probability = arr.probability
                    //         acc.country_id = arr.country_id }

                    //     return acc
                    // }, {probability : 0, country_id : ' '})
                    setTemptext('');
                    setTextfield((prev) => [...prev, data.age]);
                     // Set temptext to null
                });

            setTime(formattedTime);


        }
    }




    return (
        <div>
            <button
                className="fixed bottom-30 right-35 outline-none border-none h-12 w-12 flex items-center justify-center rounded-full bg-purple-600 transition-all duration-200 ease-in cursor-pointer chatbot-toggler z-10"
                onClick={toggleChatbot}
            >
                <span className="material-symbols-rounded">{isChatbotOpen ? 'close' : 'mode_comment'}</span>
            </button>
            {isChatbotOpen && (
                <div className="bottom-90 overflow-auto right-35 w-1/2 h-1/2 bg-white rounded-lg opacity-100 pointer-events-auto transform scale-100 transform-origin-bottom-right shadow-xl transition-all duration-100 ease-linear chatbot">
                    <header className="relative text-center text-white bg-purple-600 py-4">
                        <h2 className="text-lg">Chatbot</h2>
                        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" />
                    </header>
                    <div className="overflow-y-auto max-h-96" ref={chatboxRef}>
                        <ul className="chatbox overflow-y-auto  py-8 px-6 pb-36">
                            {textfield && textfield.map((item, index) => (
                                <li className={index % 2 === 0 ? "chat incoming" : "chat outgoing"} key={index}>
                                    <span className="material-symbols-outlined"></span>
                                    <p className="text-black text-inside font-sans">{item}</p>
                                    <span class="time">{time}</span>
                                </li>

                            ))}
                        </ul>
                    </div>
                    <div className="flex gap-5 absolute bottom-0 w-full bg-white py-3 px-5 border-t border-gray-300 chat-input">
                        <textarea
                            className="h-14 w-full border-none outline-none resize-none max-h-48 py-4 pr-4 text-gray-950 input"
                            placeholder='Enter a message...'
                            spellCheck="false"
                            required
                            onChange={handleChange}
                            value={temptext}
                            onKeyDown={handleKeyPress}
                        ></textarea>
                        <button
                            id="send-btn"
                            className="flex items-center cursor-pointer h-14 btn"
                            onClick={addText}
                        >
                            send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
