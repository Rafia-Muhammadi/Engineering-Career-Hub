function loadInterviewResources() {
    let category = document.getElementById("courseSelect").value;
    let videoList = document.getElementById("videoList");
    let notesList = document.getElementById("notesList");

    videoList.innerHTML = "";
    notesList.innerHTML = "";

    const data = {
        dsa: {
            videos: [
                { title: "What is DSA?", id: "0IAPZzGSbME" },
                { title: "Time Complexity", id: "FPu9Uld7W-E" },
                { title: "Arrays", id: "n60Dn0UsbEk" },
                { title: "Stacks", id: "XCbGlmY2n8w" },
                { title: "Queues", id: "zp6pBNbUB2U" }
            ],
            notes: [
                "DSA Basics Notes PDF",
                "Time Complexity Cheat Sheet",
                "DSA Practice Problems"
            ]
        },

        aptitude: {
            videos: [
                { title: "Aptitude Basics", id: "q2G5jIh7U3E" },
                { title: "Percentages", id: "y0JcJrR9dKQ" },
                { title: "Time & Work", id: "7tS5kXzU3Yo" },
                { title: "Profit & Loss", id: "C1k4x9T9yUk" },
                { title: "Logical Reasoning", id: "JZz9A2b9PqI" }
            ],
            notes: [
                "Aptitude Formula Sheet",
                "Quant Practice Questions"
            ]
        },

        hr: {
            videos: [
                { title: "HR Interview Introduction", id: "pGq3pK6zPpE" },
                { title: "Tell Me About Yourself", id: "f9q7N7K9KkI" },
                { title: "Strengths & Weaknesses", id: "Kk5xZ5cF6eU" },
                { title: "Common HR Questions", id: "GzQ2Kx8JZ5U" },
                { title: "Mock HR Interview", id: "d9y4Pz7F4sA" }
            ],
            notes: [
                "HR Interview Questions PDF",
                "Self-Introduction Samples"
            ]
        }
    };

    if (!data[category]) return;

    data[category].videos.forEach(v => {
        let thumb = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
        let link = `https://www.youtube.com/watch?v=${v.id}`;

        videoList.innerHTML += `
            <div class="video-card">
                <img src="${thumb}">
                <a href="${link}" target="_blank">${v.title}</a>
            </div>
        `;
    });

    data[category].notes.forEach(n => {
        notesList.innerHTML += `
            <div class="note-item">📄 ${n}</div>
        `;
    });
}
