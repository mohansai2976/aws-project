console.log("Site loaded successfully!");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    alert("Congratulations! 🎉\n\nYour website is running successfully on AWS S3 and can be deployed automatically using a CI/CD pipeline.");
});