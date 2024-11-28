// Define the structure of form data
interface CVFormData {
    name: string;
    email: string;
    phone: string;
    address: string;
    skills: string;
    experience: string;
    education: string;
}

// Function to preview CV
function previewCV(): void {
    const formData: CVFormData = {
        name: (document.getElementById("name") as HTMLInputElement).value.trim(),
        email: (document.getElementById("email") as HTMLInputElement).value.trim(),
        phone: (document.getElementById("phone") as HTMLInputElement).value.trim(),
        address: (document.getElementById("address") as HTMLInputElement).value.trim(),
        skills: (document.getElementById("skills") as HTMLInputElement).value.trim(),
        experience: (document.getElementById("experience") as HTMLTextAreaElement).value.trim(),
        education: (document.getElementById("education") as HTMLTextAreaElement).value.trim(),
    };

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
        alert("Please fill in all required fields (Name, Email, Phone)!");
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
        alert("Please enter a valid email address!");
        return;
    }

    // Validate phone format (10-digit example)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.phone)) {
        alert("Please enter a valid phone number!");
        return;
    }

    // Save data in localStorage
    localStorage.setItem("cvData", JSON.stringify(formData));
    console.log("CV Data Saved:", localStorage.getItem("cvData"));

    // Redirect to preview page
    window.location.href = "preview.html";
}
