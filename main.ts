const resumeForm = document.getElementById('resumeForm');
const resumeOutput = document.getElementById('resumeOutput');

// function to generate the resume
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const education = document.getElementById('education').value;
        const experience = document.getElementById('experience').value;
        const skills = document.getElementById('skills').value;
        const description = document.getElementById('description').value;

        // Generate HTML for the resume
        const resumeHTML = `
            <h2>Generated Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Education:</strong> ${education}</p>
            <p><strong>Experience:</strong> ${experience}</p>
            <p><strong>Skills:</strong> ${skills}</p>
            <p><strong>Description:</strong> ${description}</p>
        `;
        
        resumeOutput.innerHTML = resumeHTML;
    });
} else {
    console.error('Form or output div not found in the DOM!');
}