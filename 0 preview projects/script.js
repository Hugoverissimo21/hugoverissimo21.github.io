function showPdf() {
    hideAllTabs();
    document.getElementById("pdfTab").style.display = "block";
}

function showGithubFile() {
    hideAllTabs();
    document.getElementById("githubTab").style.display = "block";
}

// Add more functions for additional tabs

function hideAllTabs() {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => {
        tab.style.display = "none";
    });
}

function showCode() {
    hideAllTabs();

    // GitHub raw content URL for the provided file
    const githubRawUrl = 'https://raw.githubusercontent.com/Hugoverissimo21/University-Projects/main/Py%20code_graphs.py';

    // Fetch the content using Fetch API
    fetch(githubRawUrl)
        .then(response => response.text())
        .then(codeContent => {
            // Display the code content
            document.getElementById("codeTab").innerHTML = `<pre><code class="language-python">${codeContent}</code></pre>`;
        })
        .catch(error => {
            console.error('Error fetching GitHub content:', error);
            document.getElementById("codeTab").innerHTML = '<p>Error fetching code from GitHub</p>';
        });
}


