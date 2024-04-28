/* Create an html-page for displaying and editing text. When opening the page, 
the text should be displayed with div tag. 
When clicking Ctrl+E, textarea appears instead of div and can be edited. 
When pressing Ctrl+S, the div with edited text appears instead of textarea. 
Don’t forget to turn off default settings for these hotkey combinations. */

const div = document.getElementById("container");
const info = document.querySelector(".info");

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyE" && event.ctrlKey === true) {
    event.preventDefault();
    const textarea = document.createElement("textarea");
    Object.assign(textarea, {
      rows: "4",
      cols: "50",
    });
    textarea.value = div.textContent;
    div.replaceWith(textarea);
    textarea.focus();
    info.textContent = "This text can be saved by pressing Ctrl+S.";

    document.addEventListener("keydown", (event) => {
      if (event.code === "KeyS" && event.ctrlKey === true) {
        event.preventDefault();
        div.textContent = textarea.value;
        textarea.replaceWith(div);
        info.textContent = "";
      }
    });
  }
});
