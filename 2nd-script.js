function loadWebResources() {
    let topic = document.getElementById("courseSelect").value;
    let videoList = document.getElementById("videoList");
    let notesList = document.getElementById("notesList");

    videoList.innerHTML = "";
    notesList.innerHTML = "";

    const data = {
        html: {
            videos: [
                { title: "HTML Introduction", id: "pQN-pnXPaVg" },
                { title: "HTML Elements", id: "UB1O30fR-EE" },
                { title: "Forms in HTML", id: "2O8pkybH6po" },
                { title: "Semantic HTML", id: "kGW8Al_cga4" },
                { title: "HTML Project", id: "kUMe1FH4CHE" }
            ],
            notes: [
                "HTML Complete Notes PDF",
                "HTML Cheat Sheet"
            ]
        },

        css: {
            videos: [
                { title: "CSS Introduction", id: "yfoY53QXEnI" },
                { title: "CSS Box Model", id: "rIO5326FgPE" },
                { title: "Flexbox", id: "JJSoEo8JSnc" },
                { title: "CSS Grid", id: "jV8B24rSN5o" },
                { title: "Responsive Design", id: "srvUrASNj0s" }
            ],
            notes: [
                "CSS Notes PDF",
                "Flexbox & Grid Cheat Sheet"
            ]
        },

        js: {
            videos: [
                { title: "JavaScript Basics", id: "PkZNo7MFNFg" },
                { title: "Variables & Functions", id: "W6NZfCO5SIk" },
                { title: "DOM Manipulation", id: "0ik6X4DJKCc" },
                { title: "Events in JS", id: "XF1_MlZ5l6M" },
                { title: "JS Mini Project", id: "3PHXvlpOkf4" }
            ],
            notes: [
                "JavaScript Notes PDF",
                "JS Interview Questions"
            ]
        }
    };

    if (!data[topic]) return;

    data[topic].videos.forEach(v => {
        let thumb = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
        let link = `https://www.youtube.com/watch?v=${v.id}`;

        videoList.innerHTML += `
            <div class="video-card">
                <img src="${thumb}">
                <a href="${link}" target="_blank">${v.title}</a>
            </div>
        `;
    });

    data[topic].notes.forEach(n => {
        notesList.innerHTML += `
            <div class="note-item">📄 ${n}</div>
        `;
    });
}
