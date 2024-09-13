// const field_ = document.getElementById("fset") as HTMLFieldSetElement;
// const hides = document.getElementById("hide") as HTMLElement
// hides.addEventListener("click", function () {
//     field_.style.display = field_.style.display === "none" ? "block" : "none";
// })
var btnDis = document.getElementById("btns");
var container = document.getElementById("contMain");
var form_rs = document.getElementById("form_resume");
var formOutPut_rs = document.getElementById("my_resume");
form_rs.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var image = document.getElementById("img");
    var secndry = document.getElementById("Secondry").value;
    var betchler = document.getElementById("Betchler").value;
    var master = document.getElementById("Master").value;
    var skill1 = document.getElementById("skill_1").value;
    var skill2 = document.getElementById("skill_2").value;
    var skill3 = document.getElementById("skill_3").value;
    var experience = document.getElementById("experience").value;
    var company = document.getElementById("c_name").value;
    var position = document.getElementById("position").value;
    var profile = (_a = image.files) === null || _a === void 0 ? void 0 : _a[0];
    var imageUrl = profile ? URL.createObjectURL(profile) : "";
    // Generating resume section //
    var finaleREsume = "\n\n    <h3 style = \"text-align: center; background-color: rgb(6, 138, 6); display: block; width: 220px; color:white; margin:0px auto 0px auto;\">My Simple Cutee Resume</h3>\n    <div style = \"margin: 0px auto 20px auto; width: 250px;\">\n    <img style = \"margin: 0px auto 0px auto; display: block;\" src = \"".concat(imageUrl, "\" alt =\"profile\" width=\"70%\" height=\"180px\"></div>\n\n\n    <div style = \"margin: 0px auto  10px auto; width: 250px; border: 1px solid green;\">\n    <h4 style = \"margin: 0px auto -10px 10px;\">Personal Information</h4> \n    <ul style=\"list-style-type: none;\">\n    <li style = \"margin-bottom: 3px;\">Name: ").concat(name, ".</li>\n    <li style = \"margin-bottom: 3px;\">Email: ").concat(email, ".</li>\n    <li style = \"margin-bottom: 3px;\">Number: ").concat(number, "</li>\n    </ul>\n    </div>\n\n\n        <div style = \"margin: 0px auto  10px auto; width: 250px; border: 1px solid green;\">\n    <h4 style = \"margin: 0px auto -10px 10px;\">Education</h4> \n    <ul style=\"list-style-type: none;\">\n    <li style = \"margin-bottom: 3px;\">Secondry: ").concat(secndry, ".</li>\n    <li style = \"margin-bottom: 3px;\">Master: ").concat(betchler, ".</li>\n    <li style = \"margin-bottom: 3px;\">Number: ").concat(master, "</li>\n    </ul>\n    </div>\n\n    <div style = \"margin: 0px auto  10px auto; width: 250px; border: 1px solid green;\">\n    <h4 style = \"margin: 0px auto -10px 10px;\">Skills</h4> \n    <ul style=\"list-style-type: none;\">\n    <li style = \"margin-bottom: 3px;\">Skill.01: ").concat(skill1, ".</li>\n    <li style = \"margin-bottom: 3px;\">Skill.02: ").concat(skill2, ".</li>\n    <li style = \"margin-bottom: 3px;\">Skill.03: ").concat(skill3, ".</li>\n    </ul>\n    </div>\n\n    <div style = \"margin: 0px auto  10px auto; width: 250px; border: 1px solid green;\">\n    <h4 style = \"margin: 0px auto -10px 10px;\">Experience</h4> \n    <ul style=\"list-style-type: none;\">\n    <li style = \"margin-bottom: 3px;\">Experience : ").concat(experience, ".</li>\n    <li style = \"margin-bottom: 3px;\">Com-Name : ").concat(company, ".</li>\n    <li style = \"margin-bottom: 3px;\">Position : ").concat(position, ".</li>\n    </ul>\n    </div>\n    ");
    // Display resume in page
    formOutPut_rs.innerHTML = finaleREsume;
});
btnDis.addEventListener("click", function () {
    container.style.display = "none";
});
