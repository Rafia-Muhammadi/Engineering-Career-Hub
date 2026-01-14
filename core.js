function loadCoreResources() {
    let subject = document.getElementById("courseSelect").value;
    let videoList = document.getElementById("videoList");
    let notesList = document.getElementById("notesList");

    videoList.innerHTML = "";
    notesList.innerHTML = "";

    const data = {
        dbms: {
            videos: [
                { title: "DBMS Introduction", id: "6Iu45VZGQDk" },
                { title: "ER Model", id: "e7Pr1VgPK4w" },
                { title: "Normalization", id: "bT7E6G2G9kI" },
                { title: "SQL Basics", id: "HXV3zeQKqGY" },
                { title: "Transactions", id: "dQw4w9WgXcQ" }
            ],
            notes: [
                "DBMS Complete Notes PDF",
                "SQL Cheat Sheet"
            ]
        },

        os: {
            videos: [
                { title: "OS Introduction", id: "26QPDBe-NB8" },
                { title: "Process & Threads", id: "UkE4sptu9fY" },
                { title: "CPU Scheduling", id: "EJY0z2sL1H8" },
                { title: "Deadlocks", id: "vA3-5md0pGU" },
                { title: "Memory Management", id: "dQw4w9WgXcQ" }
            ],
            notes: [
                "OS Notes PDF",
                "CPU Scheduling Algorithms"
            ]
        },

        cn: {
            videos: [
                { title: "Computer Networks Intro", id: "qiQR5rTSshw" },
                { title: "OSI Model", id: "vv4y_uOneC0" },
                { title: "TCP/IP Model", id: "2QGgEk20RXM" },
                { title: "Routing Algorithms", id: "3QhU9jd03a0" },
                { title: "Network Security", id: "dQw4w9WgXcQ" }
            ],
            notes: [
                "CN Notes PDF",
                "OSI vs TCP/IP"
            ]
        },

        coa: {
            videos: [
                { title: "COA Introduction", id: "r7Yc8F8g0ds" },
                { title: "Instruction Set", id: "1I5ZMmrOfnA" },
                { title: "Pipelining", id: "8Q3P7FvJ6W4" },
                { title: "Memory Hierarchy", id: "G6qYFfR9E9s" },
                { title: "Cache Memory", id: "dQw4w9WgXcQ" }
            ],
            notes: [
                "COA Notes PDF",
                "Memory Hierarchy Summary"
            ]
        }
    };

    if (!data[subject]) return;

    data[subject].videos.forEach(v => {
        let thumb = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
        let link = `https://www.youtube.com/watch?v=${v.id}`;

        videoList.innerHTML += `
            <div class="video-card">
                <img src="${thumb}">
                <a href="${link}" target="_blank">${v.title}</a>
            </div>
        `;
    });

    data[subject].notes.forEach(n => {
        notesList.innerHTML += `
            <div class="note-item">📄 ${n}</div>
        `;
    });
}
