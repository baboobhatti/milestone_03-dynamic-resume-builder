

// const field_ = document.getElementById("fset") as HTMLFieldSetElement;
// const hides = document.getElementById("hide") as HTMLElement

// hides.addEventListener("click", function () {
//     field_.style.display = field_.style.display === "none" ? "block" : "none";
// })

const btnDis = document.getElementById("btns") as HTMLButtonElement;
const container = document.getElementById("contMain") as HTMLDivElement;
const form_rs = document.getElementById("form_resume") as HTMLFormElement;
const formOutPut_rs = document.getElementById("my_resume") as HTMLDivElement;

form_rs.addEventListener("submit", function (event: Event) {
    event.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const number = (document.getElementById("number") as HTMLInputElement).value
    const image = document.getElementById("img") as HTMLInputElement;
    const secndry = (document.getElementById("Secondry") as HTMLInputElement).value
    const betchler = (document.getElementById("Betchler") as HTMLInputElement).value
    const master = (document.getElementById("Master") as HTMLInputElement).value
    const skill1 = (document.getElementById("skill_1") as HTMLInputElement).value
    const skill2 = (document.getElementById("skill_2") as HTMLInputElement).value
    const skill3 = (document.getElementById("skill_3") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value
    const company = (document.getElementById("c_name") as HTMLInputElement).value
    const position = (document.getElementById("position") as HTMLInputElement).value
        
    const profile = image.files?.[0]
    const imageUrl = profile? URL.createObjectURL(profile): "";
    
    
    // Generating resume section //
    



    const finaleREsume = `

    <h3 style = "text-align: center; background-color: rgb(6, 138, 6); display: block; width: 220px; color:white; margin:0px auto 0px auto;">My Simple Cutee Resume</h3>
    <div style = "margin: 0px auto 20px auto; width: 250px;">
    <img style = "margin: 0px auto 0px auto; display: block;" src = "${imageUrl}" alt ="profile" width="70%" height="180px"></div>


    <div style = "margin: 0px auto  10px auto; width: 250px; border: 1px solid green;">
    <h4 style = "margin: 0px auto -10px 10px;">Personal Information</h4> 
    <ul style="list-style-type: none;">
    <li style = "margin-bottom: 3px;">Name: ${name}.</li>
    <li style = "margin-bottom: 3px;">Email: ${email}.</li>
    <li style = "margin-bottom: 3px;">Number: ${number}</li>
    </ul>
    </div>


        <div style = "margin: 0px auto  10px auto; width: 250px; border: 1px solid green;">
    <h4 style = "margin: 0px auto -10px 10px;">Education</h4> 
    <ul style="list-style-type: none;">
    <li style = "margin-bottom: 3px;">Secondry: ${secndry}.</li>
    <li style = "margin-bottom: 3px;">Master: ${betchler}.</li>
    <li style = "margin-bottom: 3px;">Number: ${master}</li>
    </ul>
    </div>

    <div style = "margin: 0px auto  10px auto; width: 250px; border: 1px solid green;">
    <h4 style = "margin: 0px auto -10px 10px;">Skills</h4> 
    <ul style="list-style-type: none;">
    <li style = "margin-bottom: 3px;">Skill.01: ${skill1}.</li>
    <li style = "margin-bottom: 3px;">Skill.02: ${skill2}.</li>
    <li style = "margin-bottom: 3px;">Skill.03: ${skill3}.</li>
    </ul>
    </div>

    <div style = "margin: 0px auto  10px auto; width: 250px; border: 1px solid green;">
    <h4 style = "margin: 0px auto -10px 10px;">Experience</h4> 
    <ul style="list-style-type: none;">
    <li style = "margin-bottom: 3px;">Experience : ${experience}.</li>
    <li style = "margin-bottom: 3px;">Com-Name : ${company}.</li>
    <li style = "margin-bottom: 3px;">Position : ${position}.</li>
    </ul>
    </div>
    `

    // Display resume in page
    formOutPut_rs.innerHTML =  finaleREsume;

})

btnDis.addEventListener("click", function() {
    container.style.display = "none" 
})