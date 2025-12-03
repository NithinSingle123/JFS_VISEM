// Auto-calculate total fee
let subjects = document.querySelectorAll(".subject");
let totalBox = document.getElementById("total");

subjects.forEach(item => {
    item.addEventListener("change", () => {
        let total = 0;

        subjects.forEach(sub => {
            if (sub.checked) {
                total += parseInt(sub.value);
            }
        });

        totalBox.innerText = "₹" + total;
    });
});

// Form submit - display result in div
document.getElementById("regForm").addEventListener("submit", function(e){
    e.preventDefault();

    let selectedSubjects = [];
    let totalFee = 0;

    subjects.forEach(sub => {
        if (sub.checked) {
            // Get subject name from the label text
            let subjectName = sub.parentElement.innerText.trim();
            selectedSubjects.push(subjectName);
            totalFee += parseInt(sub.value);
        }
    });

    if (selectedSubjects.length === 0) {
        alert("Please select at least one subject.");
        return;
    }

    let studentName = document.getElementById("name").value;

    // Build result HTML
    let resultHTML = `
        <h3>Registration Successful!</h3>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Selected Subjects:</strong></p>
        <ol>
            ${selectedSubjects.map(subject => `<li>${subject}</li>`).join('')}
        </ol>
        <div class="total-result">Total Registration Fee: ₹${totalFee}</div>
    `;

    // Display result
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = resultHTML;
    resultDiv.classList.add("show");

    // Scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
