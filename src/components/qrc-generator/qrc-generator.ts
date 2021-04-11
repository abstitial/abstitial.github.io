import { transformUrl } from "./url-transformer.js";
import QrCode from "./qrcodegen.js";

function main(): void {
  const inputElement = document.getElementById("url-input") as HTMLInputElement;
  const outputElement = document.getElementById(
    "qrc-output-text"
  ) as HTMLParagraphElement;
  const canvasElement = document.getElementById(
    "qrc-canvas"
  ) as HTMLCanvasElement;
  const imageElement = document.getElementById("qrc-image") as HTMLImageElement;
  const imageLabel = document.getElementById(
    "qrc-image-label"
  ) as HTMLLabelElement;

  if (
    inputElement === null ||
    outputElement === null ||
    canvasElement === null ||
    imageElement === null ||
    imageLabel === null
  ) {
    throw new Error("QRC generator elements are missing");
  }

  inputElement.addEventListener("input", function (this: HTMLInputElement) {
    const value = this.value;
    if (value?.length < 1) {
      return;
    }
    let output = "";
    try {
      output = transformUrl(this.value);
      const qrc = QrCode.encodeText(output, QrCode.Ecc.MEDIUM);
      qrc.drawCanvas(8, 4, canvasElement);
      imageElement.src = canvasElement.toDataURL();
      output = "";
      outputElement.classList.add("hidden");
      imageElement.classList.remove("hidden");
      imageLabel.classList.remove("hidden");
    } catch (e) {
      output = e.message;
      imageElement.classList.add("hidden");
      imageLabel.classList.add("hidden");
      outputElement.classList.remove("hidden");
    }
    outputElement.innerHTML = output;
  });
}

export default main;
