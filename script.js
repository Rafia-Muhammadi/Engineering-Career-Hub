function showRoadmap(year) {
    const title = document.getElementById("roadmapTitle");
    const list = document.getElementById("roadmapList");

    list.innerHTML = "";

    let data = {
        year1: {
            title: "1st Year Roadmap",
            topics: [
                "C / Python basics",
                "Engineering Mathematics",
                "HTML & CSS basics",
                "Problem solving"
            ]
        },
        year2: {
            title: "2nd Year Roadmap",
            topics: [
                "Data Structures",
                "OOPS concepts",
                "DBMS",
                "Mini projects"
            ]
        },
        year3: {
            title: "3rd Year Roadmap",
            topics: [
                "Advanced DSA",
                "Web Development",
                "Internships",
                "Major projects"
            ]
        },
        year4: {
            title: "4th Year Roadmap",
            topics: [
                "Final year project",
                "Placements prep",
                "Mock interviews",
                "Resume building"
            ]
        }
    };

    title.textContent = data[year].title;

    data[year].topics.forEach(topic => {
        let li = document.createElement("li");
        li.textContent = topic;
        list.appendChild(li);
    });
}
//for internships page
function filterInternships() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.getElementsByClassName("internship-card");

    for (let card of cards) {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? "block" : "none";
    }
}

document.getElementById("searchInput")?.addEventListener("keyup", filterInternships);

//admin page
document.getElementById("internshipForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let role = document.getElementById("role").value;
    let company = document.getElementById("company").value;
    let duration = document.getElementById("duration").value;
    let location = document.getElementById("location").value;

    alert("Internship Added!\n\n" +
          role + " at " + company);
});


//resource-details logic
function filterResources(language) {
    let resources = document.getElementsByClassName("resource");

    for (let item of resources) {
        if (language === "all" || item.classList.contains(language)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    }
}
