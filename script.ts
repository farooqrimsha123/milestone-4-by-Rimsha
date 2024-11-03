// listing element
document.getElementById('resumeform')?.addEventListener('submit', function(event) {
    event.preventDefault();


    //type assertion
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;    
const nameElement= document.getElementById('name') as HTMLInputElement;
const emailElement= document.getElementById('email') as HTMLInputElement;
const phoneElement= document.getElementById('phone') as HTMLInputElement;
const educationElement= document.getElementById('education') as HTMLInputElement;
const experienceElement= document.getElementById('experience') as HTMLInputElement;
const skillsElement= document.getElementById('skills') as HTMLInputElement;


if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){


    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;

    // picture elements
    const profilePictureFile = profilePictureInput.files?.[0]
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";




///create resume output
const resumeOutput = `
<h2>Resume</h2>
${profilePictureURL ? `<img src="${profilePictureURL} alt="Profile Picture" class="profilePicture">` : ''}
<p><strong>Name:</strong>${name}</p>
<p><strong>Email:</strong>${email}</p>
<p><strong>Phone Number:</strong>${phone}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>


<h3>Skills</h3>
<p>${skills}</p>
`;

// Display the resume output
const resumeOutputElement = document.getElementById('resumeOutput')
if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;
    makeEditable();
}
} else {
    console.error('one or more output elements are missing');
}
});

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element =>{
        element.addEventListener('click', function(){
            const currentElement = element as HTMLElement;
            const currentvalue = currentElement.textContent ||"" ;

            // replace content
            if(currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentvalue
                input.classList.add('editing.input')


                input.addEventListener('blur' , function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })

                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input,currentElement)
                input.focus()
            }
        })
    })
}