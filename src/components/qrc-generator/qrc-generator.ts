import { transformUrl } from "./url-transformer.js";

function main(): void {
  const inputElement = document.getElementById("url-input") as HTMLInputElement;
  const outputElement = document.getElementById("url-output");

  if (inputElement === null || outputElement === null) {
    throw new Error(
      "QRC generator inputElement or Output elements are missing"
    );
  }

  inputElement.addEventListener("input", function (this: HTMLInputElement) {
    const value = this.value;
    if (value?.length < 1) {
      return;
    }
    let output = "";
    try {
      output = transformUrl(this.value);
    } catch (e) {
      output = e.message;
    }
    outputElement.innerHTML = `<p>${output}</p>`;
  });
}

export default main;
