import { transformUrl } from "./url-transformer.js";
import QrCode from "./qrcodegen.js";
function main() {
    const inputElement = document.getElementById("url-input");
    const outputElement = document.getElementById("qrc-output-text");
    const imageElement = document.getElementById("qrc-image");
    const imageLabel = document.getElementById("qrc-image-label");
    if (inputElement === null ||
        outputElement === null ||
        imageElement === null ||
        imageLabel === null) {
        throw new Error("QRC generator elements are missing");
    }
    inputElement.addEventListener("input", function () {
        const value = this.value;
        if ((value === null || value === void 0 ? void 0 : value.length) < 1) {
            return;
        }
        let output = "";
        try {
            output = transformUrl(this.value);
            const qrc = QrCode.encodeText(output, QrCode.Ecc.MEDIUM);
            const svg = qrc.toSvgString(4);
            const svgBlob = new Blob([svg], { type: "image/svg+xml" });
            imageElement.src = URL.createObjectURL(svgBlob);
            output = "";
            outputElement.classList.add("hidden");
            imageElement.classList.remove("hidden");
            imageLabel.classList.remove("hidden");
        }
        catch (e) {
            output = e.message;
            imageElement.classList.add("hidden");
            imageLabel.classList.add("hidden");
            outputElement.classList.remove("hidden");
        }
        outputElement.innerHTML = output;
    });
}
export default main;
