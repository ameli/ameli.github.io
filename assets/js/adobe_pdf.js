// My Adobe Embedded API user ID
const clientId = "becbabeb5d0d4204b5b99689751e71ef";

// =================================
// Options to show Text (non-slides)
// =================================

const viewerOptionsForText = {
    // embedMode: "IN_LINE",
    embedMode: "LIGHT_BOX",
    // embedMode: "SIZED_CONTAINER",
    // embedMode: "FULL_WINDOW",
    defaultViewMode: "FIT_PAGE",
    // showDownloadPDF: false,
    // showPrintPDF: false,
    enableFormFilling: false,
    // showZoomControl: false,
    showThumbnails: false,
    showBookmarks: false,
    showAnnotationTools: false,
    showFullScreen: true,
    // enableLinearization: true,
    showDownloadPDF: false,
    showPrintPDF: false,
    exitPDFViewerType: "CLOSE",
};

// ======================
// Options to show slides
// ======================

const viewerOptionsForSlide = {
    // embedMode: "IN_LINE",
    embedMode: "LIGHT_BOX",
    // embedMode: "SIZED_CONTAINER",
    // embedMode: "FULL_WINDOW",
    defaultViewMode: "FIT_PAGE",
    // defaultViewMode: "FIT_WIDTH",
    // showDownloadPDF: false,
    // showPrintPDF: false,
    enableFormFilling: false,
    showZoomControl: false,
    showThumbnails: false,
    showBookmarks: false,
    showAnnotationTools: false,
    showFullScreen: true,
    // enableLinearization: true,
    showDownloadPDF: false,
    showPrintPDF: false,
    exitPDFViewerType: "CLOSE",
};

// =========
// fetch PDF
// =========

function fetchPDF(urlToPDF) {
    return new Promise((resolve) => {
        fetch(urlToPDF)
            .then((resolve) => resolve.blob())
            .then((blob) => {
                resolve(blob.arrayBuffer());
            })
    })
}

// ========
// show PDF
// ========

function showPDF(urlToPDF, slide=false, allowTextSelection) {

    var adobeDCView = new AdobeDC.View({
            clientId: clientId
        });

    var viewerOptions = null;
    if (slide == true) {
        viewerOptions = viewerOptionsForSlide;
    } else {
        viewerOptions = viewerOptionsForText;
    }

    var previewFilePromise = adobeDCView.previewFile(
        {
            content: { promise: fetchPDF(urlToPDF) },
            metaData: { fileName: urlToPDF.split("/").slice(-1)[0] }
        },
        viewerOptions
    );

    // Allow text selection
    previewFilePromise.then(adobeViewer => {
        adobeViewer.getAPIs().then(apis => {
            apis.enableTextSelection(allowTextSelection)
                .then(() => console.log("Success"))
                .catch(error => console.log(error));
         });
    });

    // Zoom if not slide
    // var zoomLevel = 1.2;
    // if (slide == false) {
    //     previewFilePromise.then(adobeViewer => {
    //         adobeViewer.getAPIs().then(apis => {
    //                 apis.getZoomAPIs().setZoomLevel(zoomLevel)
    //                         .then(result => console.log(result))
    //                         .catch(error => console.log(error));
    //         });
    //     });
    // }
}

// =============================
// List of PDF files information
// =============================

const pdfData = [
    {
        id: ["view-pdf-cv"],
        // url: "http://transport.me.berkeley.edu/nas/public/files/cv.pdf",
        url: "https://github.com/ameli/ameli.github.io/blob/main/assets/files/cv.pdf",
        slide: false,
        allowTextSelection: true,
    },
    {
        id: ["view-pdf-gpr", "view-pdf-gpr-2"],
        url: "https://arxiv.org/pdf/2206.09976.pdf",
        slide: false,
        allowTextSelection: true,
    },
    {
        id: ["view-pdf-int"],
        url: "https://arxiv.org/pdf/2009.07385.pdf",
        slide: false,
        allowTextSelection: true,
    },
    {
        id: ["view-pdf-inv"],
        url: "https://arxiv.org/pdf/2207.08038.pdf",
        slide: false,
        allowTextSelection: true,
    },
    {
        id: ["view-pdf-res"],
        url: "https://arxiv.org/pdf/1808.07965v1.pdf",
        slide: false,
        allowTextSelection: true,
    },
    {
        id: ["view-pdf-top"],
        url: "https://arxiv.org/pdf/2209.13775.pdf",
        slide: false,
        allowTextSelection: true,
    },
    {
        id: ["view-pdf-dis"],
        // url: "http://transport.me.berkeley.edu/nas/public/files/dissertation_text.pdf",
        url: "https://www.dropbox.com/s/6zu0dlmhuto1htm/dissertation_text.pdf?dl=0",
        slide: false,
        allowTextSelection: false,
    },
    {
        id: ["view-pdf-dis-slide"],
        // url: "http://transport.me.berkeley.edu/nas/public/files/dissertation_slides.pdf",
        url: "https://www.dropbox.com/s/0v669te6ampe7ma/dissertation_slides.pdf?dl=0",
        slide: true,
        allowTextSelection: false,
    },
    {
        id: ["view-pdf-the"],
        // url: "http://transport.me.berkeley.edu/nas/public/files/thesis_text.pdf",
        url: "https://www.dropbox.com/s/0yru1e5z9fckcx2/thesis_text.pdf?dl=0",
        slide: false,
        allowTextSelection: false,
    },
    {
        id: ["view-pdf-the-slide", "view-pdf-the-slide-2"],
        // url: "http://transport.me.berkeley.edu/nas/public/files/thesis_slides.pdf",
        url: "https://www.dropbox.com/s/kjx55oqoso8vo9e/thesis_slides.pdf?dl=0",
        slide: true,
        allowTextSelection: false,
    },
]

// ========================
// Direct Link From Dropbox
// ========================

// Converts a standard Dropbox link to a direct download link.

function directLinkFromDropboxLink(dropboxLink) {
    return dropboxLink.replace("www.dropbox.com", "dl.dropboxusercontent.com").replace("?dl=0", "");
}

// =======================
// Direct Link From Github
// =======================

// Converts a standard Github link to a direct download link
// This script converts:
//     "https://github.com/ameli/ameli.github.io/blob/main/assets/files/cv.pdf"
// to
//     "https://ameli.github.io/assets/files/cv.pdf"

function directLinkFromGithubLink(githubLink) {
    var reg = /github.com\/[\s\S]*?\//;
    url = githubLink.replace(reg, "").replace("blob/main/", "");
    return url;
}

// =========================================
// Add Adobe Embedded event for each element
// =========================================

document.addEventListener("adobe_dc_view_sdk.ready", function () {

    for (const data of pdfData) {
        for (const id of data.id){
            el = document.getElementById(id)

            if (el) {
                el.addEventListener("click", function () {

                    var url = data.url;

                    // If the url is a standard share link from dropbox, convert it to direct download link
                    if (url.includes("www.dropbox.com")) {
                        url = directLinkFromDropboxLink(url);
                    }

                    // If the url is a standard share link from dropbox, convert it to direct download link
                    if (url.includes("github.com")) {
                        url = directLinkFromGithubLink(url);
                    }

                    // Show pdf with Adobe Embed
                    showPDF(url, data.slide, data.allowTextSelection)
                });
            }
        }
    } 
});

// ========================================
// Add arrayBuffer if necessary i.e. Safari
// ========================================

(function () {
    if (Blob.arrayBuffer != "function") {
        Blob.prototype.arrayBuffer = myArrayBuffer;
    }

    function myArrayBuffer() {
        return new Promise((resolve) => {
            let fileReader = new FileReader();
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.readAsArrayBuffer(this);
        });
    }
})();


// document.addEventListener("adobe_dc_view_sdk.ready", function()
// {
//     var adobeDCView = new AdobeDC.View({clientId: "becbabeb5d0d4204b5b99689751e71ef", divId: "adobe-dc-view"});
//     adobeDCView.previewFile(
//         {
//             content:{location: {url: "https://arxiv.org/pdf/2009.07385.pdf"}},
//             // content:{location: {promise: filePromise}},
//             // metaData:{fileName: "Bodea Brochure.pdf"}
//             metaData:{fileName: ""}
//         },
//         {
//             // embedMode: "IN_LINE",
//             // embedMode: "LIGHT_BOX",
//             // embedMode: "SIZED_CONTAINER",
//             embedMode: "FULL_WINDOW",
//             showDownloadPDF: false,
//             showPrintPDF: false,
//             enableFormFilling: false,
//             showZoomControl: false,
//             showThumbnails: false,
//             showBookmarks: false,
//             showAnnotationTools: false,
//             showFullScreen: true,
//             enableLinearization: true,
//         }
//     );
// });
