const navicon = document.querySelector("#navicon");
const navbar = document.querySelector("#navbar");
const navlinks = document.querySelectorAll("#navbar a");
const project_container = document.querySelector("#project-container");


const myprojects = [
    {
        projectname: "AirBNB Clone",
        icon: '<i class="fa-brands fa-airbnb"></i>',
        link: "https://sahilzore-2003.github.io/airbnbclone/",
        tech: ["html", "css"],
        date: "august 2023"
    },
    {
        projectname: "Ecommerce Templete",
        icon: '<i class="fa-brands fa-shopify"></i>',
        link: "https://sahilzore-2003.github.io/ecommerce/",
        tech: ["html", "css", "javascript"],
        date: "september 2023"
    },
    {
        projectname: "Bootsrap Website",
        icon: '<i class="fa-brands fa-bootstrap"></i>',
        link: "https://sahilzore-2003.github.io/build/",
        tech: ["html", "css", "bootstrap"],
        date: "june 2023"

    },
    {
        projectname: "Hotel Bill Genrator",
        icon: '<i class="fa-solid fa-square-h"></i>',
        link: "https://sahilzore-2003.github.io/hotelbill/",
        tech: ["html", "css", "javascript"],
        date: "september 2023"
    },
    {
        projectname: "Gym Website",
        icon: '<i class="fa-solid fa-dumbbell"></i>',
        link: "https://sahilzore-2003.github.io/gymsite/",
        tech: ["html", "css", "javascript"],
        date: "october 2023"
    },
    {
        projectname: "RedBuyers Homepage",
        icon: '<i class="fa-regular fa-hand-spock"></i>',
        link: "https://sahilzore-2003.github.io/redbuyers/",
        tech: ["html", "css"],
        date: "october 2023"
    },
    {
        projectname: "Ecommerce using react ",
        icon: '<i class="fa-solid fa-shop"></i>',
        link: "https://shopperecommercereact.netlify.app/",
        tech: ["React", "React Router Dom", "Context Api"],
        date: "December 2023"
    },
    {
        projectname: "Crud react app",
        icon: '<i class="fa-solid fa-users-line"></i>',
        link: "https://crudreactasignment.netlify.app/",
        tech: ["React", "Redux"],
        date: "December 2023"
    },
    {
        projectname: "Food website with react",
        icon: '<i class="fa-solid fa-utensils"></i>',
        link: "https://foodwebsiteasignment.netlify.app/",
        tech: ["React"],
        date: "December 2023"
    },
    {
        projectname: "React User Data",
        icon: '<i class="fa-solid fa-star-of-life"></i>',
        link: "https://reactbanaoassignment.netlify.app/",
        tech: ["React"],
        date: "November 2023"
    },
    {
        projectname: "React Asignment",
        icon: '<i class="fa-solid fa-chalkboard-user"></i>',
        link: "https://fanciful-piroshki-68986b.netlify.app/",
        tech: ["React", "React Router Dom", "Context API"],
        date: "December 2023"
    },

]

myprojects.forEach((e) => {
    project_container.innerHTML +=
        `
    <div class="project" data-link="${e.link}">
    <div class="icon center">
       ${e.icon}
    </div>
    <h2 class="center">${e.projectname}</h2>
    <div class="tech">
        ${e.tech.map((e) => `<span>${e}</span>`).join("")}
    </div>
    <div style="text-align:end"">
        <p class="center projectdate">${e.date ?? "Not Know"}</p>
    </div>
</div>
    `
})




document.querySelectorAll(".project").forEach((e) => {
    e.addEventListener("click", () => {
        let link = e.getAttribute("data-link")
        window.open(link)
    })
})

navicon.addEventListener("click", () => {
    navbar.classList.toggle("navactive")
})

navlinks.forEach((e) => {
    e.addEventListener("click", () => navbar.classList.remove("navactive"))
})


// scroll reveal js 



ScrollReveal().reveal('.skill', {
    delay: 400,
    distance: '200%',
    origin: 'bottom',
});

ScrollReveal().reveal('.project', {
    delay: 400,
    distance: '200%',
    origin: 'bottom',
});


// form handleling

function showAlert(msg, bgColor) {
    let alert = document.getElementById("alert")
    alert.innerHTML = `<h3>${msg}</h3>`;
    alert.style.background = bgColor;
    alert.style.top = "0%"

    setTimeout(() => { alert.style.top = "-50px" }, 1500)
}

function sendEmail(senderName, senderNumber, senderMessage) {
    (function () {
        emailjs.init("8c3Sgn1ib4YDJWhCF");
    })()

    var params = {
        name: senderName,
        number: senderNumber,
        message: senderMessage
    }

    var serviceID = "service_cnjrihq";
    var templeteID = "template_dyc6w7m";

    emailjs.send(serviceID, templeteID, params)
        .then(() => {
            showAlert("message sent successfully!", "green")
            form.reset()
        }).catch((e) => showAlert("message not send..", "red"))
}


function handleform(e) {



    e.preventDefault()
    var data = new FormData(form)
    const obj = Object.fromEntries(data)

    const { name, number, message } = obj;

    if (name == "") {
        return showAlert("Enter valid name..", "red")
    }

    if (number.length < 10) {
        return showAlert("Number must be 10 digits", "red")
    }

    if (message == "") {
        return showAlert("Message can not be empty", "red")
    }



    sendEmail(name, number, message)

}

form.addEventListener("submit", handleform)