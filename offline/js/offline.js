function onLoadOfflineBot(title) {
    initializeFtcBlocks();
    setTimeout(function () {
        loadNewBasicOpMode(title);
    }, 10);
}

function initializeBlocks() { } // just skip it

function loadNewBasicOpMode() {
    titlePrefix = getOfflineConfigurationName();
    currentProjectName = getOfflineSampleName();
    var sampleName = currentProjectName;
    var blkFileContent = getSampleBlkFileContent(sampleName);
    var blocksLoadedCallback = function () {
        //showJava();
    };

    loadBlocks(blkFileContent, blocksLoadedCallback);
}


function uploadButtonClicked(input) {
    var file = input.files[0];
    currentProjectName = makeUploadProjectName(file.name);
    var reader = new FileReader();
    reader.onload = function (event) {
        // Get the blocks from the uploaded file.
        var blkFileContent = event.target.result;
        var blocksLoadedCallback = function () {
            //showJava();
        };

        loadBlocks(blkFileContent, blocksLoadedCallback);
    };
    reader.readAsText(file);
}

function makeUploadProjectName(uploadFileName) {
    var lastDot = uploadFileName.lastIndexOf('.');
    var preferredName = (lastDot == -1)
        ? uploadFileName
        : uploadFileName.substr(0, lastDot);
    return preferredName; // No suffix.
}

function exportJavaButtonClicked() {
    var javaCode = generateJavaCode();
    if (javaCode) {
        // Download the java file.
        var a = document.getElementById('download_link');
        a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(javaCode);
        a.download = currentClassName + '.java';
        a.target = '_blank';
        a.click();
    } else {
        alert('Unable to download Java. Sorry about that!');
    }
}

function offline_showJavaChanged() {
    var btn = document.getElementById("show_java");
    btn.checked = false;
    btn.parentElement.setAttribute('style', "display:none");
    ftc_showJavaChanged();
}

var ftc_showJavaChanged = showJavaChanged;
window.showJavaChanged = offline_showJavaChanged;

