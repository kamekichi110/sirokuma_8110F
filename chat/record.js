function drawElementToCanvas(sourceElem, canvas) {
        let serialized = new XMLSerializer().serializeToString(sourceElem);

            const padding = 20; // レンダリング時に上下左右に隙間が入ってしまうので、その分をcanvasサイズに加味

                canvas.height = sourceElem.offsetHeight + padding * 2;
                    canvas.width = sourceElem.offsetWidth + padding * 2;
                        rasterizeHTML.drawHTML(serialized, canvas);
                        }

                        window.addEventListener('load', (event) => {
                            let sourceElem = document.getElementById("source");
                                let canvas = document.getElementById("resultCanvas");
                                    drawElementToCanvas(sourceElem, canvas);
                                    });