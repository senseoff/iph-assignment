export const downloadFile = (file: any) => {
  const aElement = document.createElement("a");
  aElement.setAttribute("download", "notes");
  const href = URL.createObjectURL(file);
  aElement.href = href;
  aElement.setAttribute("target", "_blank");
  aElement.click();
  URL.revokeObjectURL(href);
  aElement.remove();
};
