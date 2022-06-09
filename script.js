let btnDownload = document.querySelector("button");

btnDownload.addEventListener("click", startDownload);

async function startDownload() {
  let url = "Resume.pdf";
  let fileName = "My Document";
  const res = await fetch(url);
  const blob = await res.blob();
  saveAs(blob, fileName);
}
