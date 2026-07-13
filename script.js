console.log("Site loaded — served via CloudFront, deployed via GitHub Actions.");

// Smooth-scroll offset correction for the sticky nav (in case of hash links)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const navHeight = document.querySelector(".nav")?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

// Pause the pipeline "runner" animation on hover so visitors can read each step
const track = document.getElementById("pipeline-track");
if (track) {
  track.addEventListener("mouseenter", () => {
    track.querySelectorAll(".runner").forEach((r) => (r.style.animationPlayState = "paused"));
  });
  track.addEventListener("mouseleave", () => {
    track.querySelectorAll(".runner").forEach((r) => (r.style.animationPlayState = "running"));
  });
}
