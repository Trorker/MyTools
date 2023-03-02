// ==UserScript==
// @name         Extractor Pdf for FB
// @namespace    https://github.com/trorker
// @version      1.0.1
// @description  Aggiunge lo strumento per estrazzione dei RPC o ST
// @author       Ruslan Dzyuba
// @match        https://it-beat.enelint.global/
// @icon         data:image/png;base64,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
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11
// @require      https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.3.122/pdf.min.js
// @require      https://unpkg.com/downloadjs@1.4.7
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict'; // @unwrap

    //Add css
    /*window.GM_addStyle = (cssStr) => {
        var D = document;
        var newNode = D.createElement ('style');
        newNode.textContent = cssStr;

        var targ = D.getElementsByTagName ('head')[0] || D.b
        targ.appendChild (newNode);
    }*/

    window.GM_addStyle(`
                       .swal2-close { box-shadow: none !important }
                       .swal2-popup { font-size: unset; }
                       .swal2-styled.swal2-confirm { background-color: #ff0f64; }
                       .swal2-height-auto { height: 100% !important; }
                       img.swal2-image { border-radius: 50%; }
                       `);

    // Your code here...
    const { degrees, PDFDocument, rgb, StandardFonts } = window.PDFLib;
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.3.122/pdf.worker.min.js"; //https://npmcdn.com/pdfjs-dist/build/pdf.worker.min.js

    setInterval (() => {
        var contUl = document.querySelectorAll("body > bb-root > bb-navbar > dropdown-menu > div > div > div:nth-child(2) > ul > li:nth-child(5) > ul")[0];
        if (contUl != undefined && document.querySelector("#Extract") == null) {

            var Extract_li = document.createElement("li");
            Extract_li.setAttribute("onmouseenter", "event.target.classList.add('open')");
            Extract_li.setAttribute("onmouseleave", "event.target.classList.remove('open')");
            Extract_li.setAttribute("id", "Extract");
            Extract_li.setAttribute("class", "dropdown ng-star-inserted dropdown-submenu");
            Extract_li.innerHTML = `
                                    <a class="dropdown-toggle ng-star-inserted" href="/" onClick="event.preventDefault()">Estrazione <b style="font-size: 0.8em;"><i>&nbsp;&nbsp;&nbsp;by Ruslan</i>&nbsp;&#169;</b>
                                      <span class="e-ico ng-star-inserted"></span>
                                    </a>
                                    <ul class="testo dropdown-menu dropdownhover-bottom ng-star-inserted">
                                      <li class="ng-star-inserted"><a href="/" id="ExtractRPC" onclick="event.preventDefault();" class="ng-star-inserted"> Preventivo<span class="e-ico ng-star-inserted"></span></a></li>
                                      <li class="ng-star-inserted"><a href="/" id="ExtractST" onclick="event.preventDefault();" class="ng-star-inserted"> Specifica Tecnica (RPC)<span class="e-ico ng-star-inserted"></span></a></li>
                                      <li class="ng-star-inserted"><a href="/" id="About" onclick="event.preventDefault();" class="ng-star-inserted"> About<span class="e-ico ng-star-inserted"></span></a></li>
                                    </ul>
                                    `;

            contUl.insertBefore(Extract_li, contUl.childNodes[0]);

            document.getElementById("ExtractRPC").addEventListener("click", window.ExtractRPC);
            document.getElementById("ExtractST").addEventListener("click", window.ExtractST);
            document.getElementById("About").addEventListener("click", window.About);
        }
    }, 100);

    window.Toast = window.Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', window.Swal.stopTimer)
            toast.addEventListener('mouseleave', window.Swal.resumeTimer)
        }
    });

    window.ErrorAlert = (text) => {
        window.Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: text,
            footer: '<span>Il problema persiste?</span><a href="mailto:ruslan.dzyuba@e-distribuzione.com"> ...manda una mail al sviluppatore</a>'
        });
    }

    window.About = () => {

      var ScriptInfo = GM_info.script;
      console.log(GM_info)

        window.Swal.fire({
            title: 'About us',
            html: `
                    <h3><b>${ScriptInfo.name}</b></h3>
                    <h4><i>by&nbsp;</i><a href="https://github.com/trorker" target="_blank"><b>${ScriptInfo.author}</b></a><h4>
                    <div style="font-size: 0.6em"><i><b>Version:&nbsp;</b>${ScriptInfo.version}</i><div>
                    `,
            footer: '<span>Vuoi contattare lo sviluppatore</span>...manda una&nbsp;<a href="mailto:ruslan.dzyuba@e-distribuzione.com"> mail</a>',
            showConfirmButton: false,
            showCloseButton: true,
            willOpen: () => {
                Swal.showLoading();
                fetch(`//api.github.com/users/Trorker`)
                    .then((response) => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }

                    return response.json()
                })
                    .then((result) => {
                    Swal.update({
                        imageUrl: result.avatar_url,
                        imageWidth: 100,
                        imageHeight: 100,
                        imageAlt: 'GitHub Avatar',
                    })
                }) //.catch(error => { Swal.showValidationMessage(`Request failed: ${error}` )});
            },
        });
    }

    window.JsonToCsv = (items, char = ';') => {
        const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
        const header = Object.keys(items[0])
        const csv = [
            header.join(char), // header row first
            ...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(char))
        ].join('\r\n');

        return csv;
    }

    window.ExtractST = async () => {

        const { value: formValues } = await window.Swal.fire({
            title: 'Seleziona Specifica Tecnica',
            html:
            '<input type="file" id="swal-file" class="swal2-file" accept="application/pdf">' +
            '<label for="swal2-checkbox" class="swal2-checkbox" style="display: flex;"><input disabled id="swal-checkbox" type="checkbox" value="1" id="swal2-checkbox"><span class="swal2-label">Firma la Specifica Tecnica</span></label>',
            focusConfirm: false,
            showCancelButton: true,
            cancelButtonText: 'Cancella',
            preConfirm: () => {
                const file = document.getElementById('swal-file').files[0];
                const checkbox = document.getElementById('swal-checkbox').checked;
                if (!file) window.Swal.showValidationMessage("Selezione il file da caricare!");
                return {
                    file,
                    checkbox,
                }
            }
        });

        if (formValues && formValues.file) {
            const { file, checkbox } = formValues;
            const reader = new FileReader()
            reader.onload = (e) => {
                var pdf_blob = new Blob([e.target.result], { type: 'application/pdf' });
                window.extractPdf(pdf_blob, "ST");
            }
            reader.readAsArrayBuffer(file)
        }

    }

    window.ExtractRPC = async () => {
        const { value: formValues } = await window.Swal.fire({
            title: 'Seleziona Preventivo',
            html:
            '<input type="file" id="swal-file" class="swal2-file" accept="application/pdf">' +
            '<label for="swal2-checkbox" class="swal2-checkbox" style="display: flex;"><input id="swal-checkbox" type="checkbox" value="1" id="swal2-checkbox"><span class="swal2-label">Scarica report</span></label>',
            focusConfirm: false,
            showCancelButton: true,
            cancelButtonText: 'Cancella',
            preConfirm: () => {
                const file = document.getElementById('swal-file').files[0];
                const checked_report = document.getElementById('swal-checkbox').checked;
                if (!file) window.Swal.showValidationMessage("Selezione il file da caricare!");
                return {
                    file,
                    checked_report,
                }
            }
        });

        if (formValues && formValues.file) {
            const { file, checked_report } = formValues;
            const reader = new FileReader()
            reader.onload = (e) => {
                var pdf_blob = new Blob([e.target.result], { type: 'application/pdf' });
                window.extractPdf(pdf_blob, "RPC", checked_report);
            }
            reader.readAsArrayBuffer(file)
        }
    }

    window.getDataPdf = (pdf_array, pdf_blob, select) => {
        return new Promise(function (resolve, reject) {

            var loadingTask = window.pdfjsLib.getDocument(pdf_array);
            loadingTask.promise.then(function (pdf) {

                pdf.getPage(1).then(function (page) {
                    // you can now use page here
                    page.getTextContent().then(function (textContent) {
                        // Solve promise with the text retrieven from the page
                        //console.log(textContent.items);

                        let searchTable = {
                            "ID": {
                                "RPC": {
                                    X: 482.97599999999994,
                                    Y: 684.328,
                                },
                                "ST": {
                                    X: 493.37,
                                    Y: 675.23,
                                },
                            },
                            "Name": {
                                "RPC": {
                                    X: 391.176,
                                    Y: 609.664,
                                },
                                "ST": {
                                    X: 106.9,
                                    Y: 594.31,
                                },
                            },
                            "TipoLavoro": {
                                "RPC": {
                                    X: 302.976,
                                    Y: 684.472,
                                },
                                "ST": {
                                    X: 293.49,
                                    Y: 681.7600000000001,
                                },
                            },
                            "oldFasi": {
                                "RPC": {
                                    X: 297.57599999999996,
                                    Y: 561.712,
                                },
                                "ST": {
                                    X: 290.6,
                                    Y: 560.35,
                                },
                            },
                            "oldPotenza": {
                                "RPC": {
                                    X: 470.52,
                                    Y: 548.9680000000001,
                                },
                                "ST": {
                                    X: 456.22,
                                    Y: 548.12,
                                },
                            },
                            "newFasi": {
                                "RPC": {
                                    X: 297.57599999999996,
                                    Y: 513.2560000000001,
                                },
                                "ST": {
                                    X: 292.13,
                                    Y: 511.3,
                                },
                            },
                            "newPotenza": {
                                "RPC": {
                                    X: 470.52,
                                    Y: 499.93600000000004,
                                },
                                "ST": {
                                    X: 456.22,
                                    Y: 499.48,
                                },
                            },
                            "Capex": {
                                "RPC": {
                                    X: null,
                                    Y: null,
                                },
                                "ST": {
                                    X: null,
                                    Y: null,
                                },
                            },
                        };

                        var result = {
                            ID: null,
                            Name: null,
                        }

                        try {

                            Object.keys(searchTable).forEach(element => {
                                let resultValue = (textContent.items).find(obj => {
                                    return (obj.transform[4] === searchTable[element][select].X && obj.transform[5] === searchTable[element][select].Y)
                                });

                                result[element] = ((resultValue) ? resultValue.str : null);
                            });

                            // Trigger the browser to download the PDF document
                            if (result.ID != null || result.ID != undefined) {
                                let nameFile = ((select == 'RPC') ? "Preventivo" : "Specifica Tecnica") + ((result.newFasi == '3F') ? "_MT" : "") + "_" + result.ID + " - " + result.Name;
                                window.download(pdf_blob, nameFile + ".pdf", "application/pdf");
                            }

                            resolve(result);

                        }
                        catch(err) {
                            console.log(err)
                            window.ErrorAlert('Qualcosa è andato storto!');
                        }
                    });
                });
            }, function (reason) {
                // PDF loading error
                console.error(reason);
            });
        });
    }

    window.extractPdf = (pdf_blob, select, checked_report) => {
        new Response(pdf_blob).arrayBuffer().then(async (ArrayBuffer) => {

            let results = [];

            // Load a PDFDocument from the existing PDF bytes
            const pdfDoc = await PDFDocument.load(ArrayBuffer);
            const pages = pdfDoc.getPages();

            for (let i = 0; i < pages.length; i += ((select == 'RPC') ? 2 : 6)) { //console.log(select); //diferenza fra specifica tecnica e RPC

                const extract_pdfDoc = await PDFDocument.create();

                if (select == 'RPC') {
                    const [Page_1, Page_2] = await extract_pdfDoc.copyPages(pdfDoc, [i, i + 1]);

                    extract_pdfDoc.addPage(Page_1);
                    extract_pdfDoc.addPage(Page_2);
                } else if (select == 'ST') {
                    const [Page_1, Page_2, Page_3, Page_4, Page_5, Page_6] = await extract_pdfDoc.copyPages(pdfDoc, [i, i + 1, i + 2, i + 3, i + 4, i + 5]);

                    extract_pdfDoc.addPage(Page_1);
                    extract_pdfDoc.addPage(Page_2);
                    extract_pdfDoc.addPage(Page_3);
                    extract_pdfDoc.addPage(Page_4);
                    extract_pdfDoc.addPage(Page_5);
                    extract_pdfDoc.addPage(Page_6);
                }

                const pdfBytes = await extract_pdfDoc.save()
                const result = await window.getDataPdf(pdfBytes, new Blob([pdfBytes], { type: 'application/pdf' }), select);

                if (!result.ID) {
                    window.ErrorAlert('Nessun Codice Rintracciabilità trovato!');
                    return 0;
                }

                results.push(result);
            }

            window.Toast.fire({
                icon: 'success',
                title: 'Your work has been executed'
            });

            console.log(results);

            let html = new String();
            let clipboard = new String();
            for (const result of results) {
                html += `<div style="text-align: left; display: flex; justify-content: space-between;">
                          <span><em><span style="font-size: 12px;">c.r.&nbsp;</span></em><strong><span style="font-size: 18px;">${result.ID} </span></strong><em><span style="font-size: 12px;">(${result.Name})</span></em><strong>&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></span>
                          <span><strong><span style="color: red;">${result.TipoLavoro}&nbsp;</span>- ${result.oldFasi}</strong><span style="font-size: 12px;">(${result.oldPotenza}kW)</span><strong> &gt;&nbsp;</strong><strong>${result.newFasi}</strong><span style="font-size: 12px; color: ${((parseInt(result.newPotenza) >= 50) ? "red" : "unset")}">(${result.newPotenza}kW)</span></span>
                        </div>`
                clipboard += result.ID + "\n";
            }

            window.Swal.fire({
                title: '<strong>Report</strong>',
                icon: 'info',
                width: "auto",
                html,
                showCancelButton: true,
                cancelButtonText: "Chiudi",
                confirmButtonText: 'Copy to clipboard',
                allowOutsideClick: false,
                //preConfirm: (value) => { return false } //cancell event to clouse modal (click button confirm)
            }).then((result) => {
                if (result.isConfirmed) {
                    navigator.clipboard.writeText(clipboard).then(function () {
                        window.Toast.fire({
                            icon: 'success',
                                         title: 'Copying to clipboard was successful!'
                        });
                        console.log('Async: Copying to clipboard was successful!');
                    }, function (err) {
                        window.Toast.fire({
                            icon: 'error',
                            title: 'Could not copy text'
                        });
                        console.error('Async: Could not copy text: ', err);
                    });
                }
            });


            if (checked_report) {
                window.download(window.JsonToCsv(results), "report.csv", "text/csv");
            }

        });
    }
})();
