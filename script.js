// Function to preview CV
function previewCV() {
    var formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        address: document.getElementById("address").value.trim(),
        skills: document.getElementById("skills").value.trim(),
        experience: document.getElementById("experience").value.trim(),
        education: document.getElementById("education").value.trim(),
    };
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
        alert("Please fill in all required fields (Name, Email, Phone)!");
        return;
    }
    // Save data in localStorage
    localStorage.setItem("cvData", JSON.stringify(formData));
    console.log("CV Data Saved:", localStorage.getItem("cvData"));
    // Redirect to preview page
    window.location.href = "preview.html";
}
