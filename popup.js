document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("timeTable");
    const progressBar = document.getElementById("screenProgress");
    const timeText = document.getElementById("screenTimeText");

    chrome.storage.local.get(null, data => {
        let totalMinutes = 0;

        for (let site in data) {
            let row = table.insertRow();
            row.insertCell(0).textContent = site;
            row.insertCell(1).textContent = formatTime(data[site]);

            totalMinutes += data[site] / 60;
        }

        timeText.textContent = `Total: ${totalMinutes.toFixed(1)} min`;
        progressBar.value = Math.min(totalMinutes, 100);
    });

    document.getElementById("clearData").addEventListener("click", () => {
        chrome.storage.local.clear(() => location.reload());
    });
});

function formatTime(seconds) {
    let minutes = (seconds / 60).toFixed(1);
    return minutes + " min";
}