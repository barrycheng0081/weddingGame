// data.js
const gameData = {
    anniversaryDate: "2018-05-20",
    secretImage: "images/secret_photo2.jpg", 
    punishments: [
        "【愛情靈藥】恩恩愛愛一號",
        "【愛情靈藥】長長久久二號",
        "【愛情靈藥】互相扶持三號",
        "【愛情靈藥】永不吵架四號",
        "【愛情靈藥】百年好合五號",
        "【愛情靈藥】白頭偕老六號",
    ],
    airlineName: "BALAN & TYNE AIRWAYS",
    welcomeTitle: "⚠️ 警告：非法挖角請求",
    welcomeText: "Ivy 您好，您正試圖將我們的金牌飛行員 Alex 挖角至 ALVY AIRWAYS。<br>本航司 (BALAN & TYNE AIRWAYS) 絕不輕易放人！<br>除非您能通過我們的「過去、現在、未來」三階段最高級別考驗。準備好了嗎？",
    
    stages: [
        {
            id: "past",
            stageName: "航線回溯 (過去)",
            questions: [
                {
                    question: "請問當初與 Alex 簽訂合約的日期 (交往紀念日)",
                    type: "date",
                    correctAnswers: ["2013-03-27", "2013-04-02"]
                },
                {
                    question: "請問下列何者不是Alex曾駕駛過的機型？",
                    options: [
                        { type: "text", content: "A330", isCorrect: false },
                        { type: "text", content: "B777", isCorrect: false },
                        { type: "text", content: "DA40", isCorrect: false },
                        { type: "text", content: "B787", isCorrect: true }
                    ]
                },
                {
                    question: "Alex 熱愛的後宮劇后宮甄嬛傳創造無數名言，請問劇中名句「臣妾做不到啊」是以下哪場景正確場面",
                    options: [
                        { type: "image", content: "images/ho1.png", isCorrect: false },
                        { type: "image", content: "images/ho2.png", isCorrect: false },
                        { type: "image", content: "images/ho3.png", isCorrect: false },
                        { type: "image", content: "images/ho4.png", isCorrect: true }
                    ]
                },
                {
                    question: "專精手工的 Alex 做了許多精緻禮物，請問以下幾個禮物特寫中，何者不是 Alex 送過 Ivy 的?",
                    options: [
                        { type: "image", content: "images/gift1.jpg", isCorrect: false },
                        { type: "image", content: "images/gift2.jpg", isCorrect: true },
                        { type: "image", content: "images/gift3.jpg", isCorrect: false },
                        { type: "image", content: "images/gift4.jpg", isCorrect: false }
                    ]
                },
            ]
        },
        {
            id: "present",
            stageName: "機艙現況 (現在)",
            questions: [
                {
                    question: "健康是身為飛行員最重要的事情，Alex 於最新的體檢報告中，請問哪個數值為紅字?",
                    options: [
                        { type: "text", content: "頭皮毛髮覆蓋率", isCorrect: false },
                        { type: "text", content: "肌酸酐", isCorrect: false },
                        { type: "text", content: "總膽固醇", isCorrect: true },
                        { type: "text", content: "尿顏色", isCorrect: false }
                    ]
                },
                {
                    question: "身為要挖腳 Alex 的人，想必對於 Alex 目前所駕駛的機型十分理解吧，請問目前 Alex 駕駛的機型為?",
                    options: [
                        { type: "text", content: "A320", isCorrect: false },
                        { type: "text", content: "A350", isCorrect: false },
                        { type: "text", content: "B777", isCorrect: true },
                        { type: "text", content: "B787", isCorrect: false }
                    ]
                },
                {
                    question: "身為飛行員，充足的睡眠十分重要，請問 Alex 目前宿舍的門牌號碼為?",
                    options: [
                        { type: "text", content: "C1025", isCorrect: false },
                        { type: "text", content: "C1020", isCorrect: true },
                        { type: "text", content: "C2020", isCorrect: false },
                        { type: "text", content: "C2040", isCorrect: false }
                    ]
                }

            ]
        },
        {
            id: "future",
            stageName: "未來航向 (未來)",
            questions: [
                {
                    question: "請問 Alex 下一個航班的目的地機場代碼是?",
                    options: [
                        { type: "text", content: "SFO", isCorrect: false },
                        { type: "text", content: "HND", isCorrect: false },
                        { type: "text", content: "CDG", isCorrect: false },
                        { type: "text", content: "BKK", isCorrect: true }
                    ]
                },
                {
                    question: "身為一個幸福企業，對於員工每年的生日都是十分重視的，請問 Alex 的生日為?",
                    type: "date",
                    correctAnswers: ["1991-09-16"]
                }
            ]
        }
    ]
};