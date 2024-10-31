export function copyTextToClipboard(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    const text = element.innerText || element.textContent;
    if (text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      console.error("No text found in the element");
    }
  } else {
    console.error("Element not found");
  }
}
