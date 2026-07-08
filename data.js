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
    airlineName: "BALAN & TYNG AIRWAYS",
    welcomeTitle: "⚠️ 警告：非法挖角請求",
    welcomeText: "Ivy 您好，您正試圖將我們的金牌飛行員 Alex 挖角至 ALVY AIRWAYS。<br>本航司 (BALAN & TYNG AIRWAYS) 絕不輕易放人！<br>除非您能通過我們的「過去、現在、未來」三階段最高級別考驗。準備好了嗎？",
    
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
                    question: "眼睛人稱靈魂之窗，對於飛行員更是十分重要的，請問以下哪個眼睛是 Alex 的靈魂之窗呢?",
                    options: [
                         { type: "image", content: "images/eye_liwei.jpg", isCorrect: true },
                        { type: "image", content: "images/eye_barry.jpg", isCorrect: false },
                        { type: "image", content: "images/eye_tyng.jpg", isCorrect: false },
                        { type: "image", content: "images/eye_alan.jpg", isCorrect: false }
                    ]
                },
                {
                    question: "身為要挖腳 Alex 的人，想必對於 Alex 目前所駕駛的機型想必十分理解吧，請問目前 Alex 駕駛的機型為?",
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
                    question: "掌握旗下飛行員行蹤對公司來說是十分重要的，Alex 近期較常飛美西，請問，Alex 飛美西航線時，會需要橫跨幾天呢?",
                    options: [
                        { type: "text", content: "3 天", isCorrect: false },
                        { type: "text", content: "4 天", isCorrect: false },
                        { type: "text", content: "5 天", isCorrect: true },
                        { type: "text", content: "6 天", isCorrect: false }
                    ]
                },
                {
                    question: "在未來，貴司一定對自家飛行員十分愛戴，並且能在茫茫人海中找到他，因此請在這張照片中找出 Alex！點擊照片可以放大，找到後請點下方按鈕過關：",
                    type: "find-person",
                    image: "images/search_photo.jpg" // ⬅️ 請改成你要讓新娘找人的照片路徑
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
