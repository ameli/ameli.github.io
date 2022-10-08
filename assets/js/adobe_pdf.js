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

function showPDF(urlToPDF, slide=false) {

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
}

// =============================
// List of PDF files information
// =============================

const pdfData = [
    {
        id: "view-pdf-thesis-text",
        url: "http://transport.me.berkeley.edu/nas/public/files/thesis_text.pdf",
        slide: false,
    },
    {
        id: "view-pdf-thesis-slides",
        url: "http://transport.me.berkeley.edu/nas/public/files/thesis_slides.pdf",
        slide: true,
    },
    {
        id: "view-pdf-dissertation-text",
        url: "http://transport.me.berkeley.edu/nas/public/files/dissertation_text.pdf",
        slide: false,
    },
    {
        id: "view-pdf-dissertation-slides",
        url: "http://transport.me.berkeley.edu/nas/public/files/dissertation_slides.pdf",
        slide: true,
    },
    {
        id: "view-pdf-gpr",
        url: "https://arxiv.org/pdf/2206.09976.pdf",
        slide: false,
    },
    {
        id: "view-pdf-int",
        url: "https://arxiv.org/pdf/2009.07385.pdf",
        slide: false,
    },
    {
        id: "view-pdf-inv",
        url: "https://arxiv.org/pdf/2207.08038.pdf",
        slide: false,
    },
    {
        id: "view-pdf-res",
        url: "https://arxiv.org/pdf/1808.07965v1.pdf",
        slide: false,
    },
    {
        id: "view-pdf-top",
        url: "https://arxiv.org/pdf/2209.13775.pdf",
        slide: false,
    },
    {
        id: "view-pdf-dis",
        url: "http://transport.me.berkeley.edu/nas/public/files/dissertation_text.pdf",
        slide: false,
    },
    {
        id: "view-pdf-dis-slide",
        url: "http://transport.me.berkeley.edu/nas/public/files/dissertation_slides.pdf",
        slide: true,
    },
    {
        id: "view-pdf-the",
        url: "http://transport.me.berkeley.edu/nas/public/files/thesis_text.pdf",
        slide: false,
    },
    {
        id: "view-pdf-the-slide",
        url: "http://transport.me.berkeley.edu/nas/public/files/thesis_slides.pdf",
        slide: true,
    },
]

// =========================================
// Add Adobe Embedded event for each element
// =========================================

document.addEventListener("adobe_dc_view_sdk.ready", function () {

    for (const data of pdfData) {
        el = document.getElementById(data.id)
        if (el) {
            el.addEventListener("click", function () {
                showPDF(data.url, data.slide)
            });
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
