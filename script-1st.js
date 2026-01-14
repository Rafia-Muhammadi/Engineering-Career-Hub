function loadResources() {
    let course = document.getElementById("courseSelect").value;
    let videoList = document.getElementById("videoList");
    let notesList = document.getElementById("notesList");

    let data = {
        c: {
            videos: [
                { title: "C Introduction", id: "irqbmMNs2Bo" },
                { title: "Variables & Data Types", id: "ZSPZob_1TOk" },
                { title: "Loops in C", id: "KJgsSFOSQv0" },
                { title: "Functions in C", id: "apGV9Kg7ics" },
                { title: "Arrays in C", id: "7h2oGmGJxJY" }
            ],
            notes: ["C Notes PDF", "C Practice Questions"]
        },

        java: {
            videos: [
                { title: "Java Basics", id: "UmnCZ7-9yDY" },
                { title: "OOPS Concepts", id: "BSVKUk58K6U" },
                { title: "Loops in Java", id: "eIrMbAQSU34" },
                { title: "Arrays in Java", id: "NBIUbTddde4" },
                { title: "Methods in Java", id: "drQK8ciCAjY" }
            ],
            notes: ["Java Notes PDF", "OOPS Notes"]
        },

        python: {
            videos: [
                { title: "Python Introduction", id: "rfscVS0vtbw" },
                { title: "Variables", id: "x7X9w_GIm1s" },
                { title: "Loops", id: "6iF8Xb7Z3wQ" },
                { title: "Functions", id: "NSbOtYzIQI0" },
                { title: "Lists & Tuples", id: "W8KRzm-HUcc" }
            ],
            notes: ["Python Notes PDF", "Python Cheat Sheet"]
        },
        dsa: {
            videos: [
                { title: "What is DSA?", id: "0IAPZzGSbME" },
                { title: "Time & Space Complexity", id: "FPu9Uld7W-E" },
                { title: "Arrays in DSA", id: "n60Dn0UsbEk" },
                { title: "Stacks Explained", id: "XCbGlmY2n8w" },
                { title: "Queues Explained", id: "zp6pBNbUB2U" }
            ],
            notes: [
                "DSA Basics Notes PDF",
                "Time Complexity Cheat Sheet",
                "DSA Practice Problems"
            ]
        }
    };

    videoList.innerHTML = "";
    notesList.innerHTML = "";

    if (!course) return;

    data[course].videos.forEach(v => {
        let thumb = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
        let link = `https://www.youtube.com/watch?v=${v.id}`;

        videoList.innerHTML += `
            <div class="video-card">
                <img src="${thumb}" alt="${v.title}">
                <a href="${link}" target="_blank">${v.title}</a>
            </div>
        `;
    });

    data[course].notes.forEach(n => {
        notesList.innerHTML += `
            <div class="note-item">📄 <a href="#">${n}</a></div>
        `;
    });
}
