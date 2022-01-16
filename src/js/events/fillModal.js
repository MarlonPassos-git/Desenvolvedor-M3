import { returnFormWithDetails } from "../tools/returnFormWithDetails";
import { AddFilterEventsContent } from "./AddFilterEventsContent";
import { AddOrderEventsContent } from "./AddOrderEventsContent";

export function fillModal(title, $content) {
  const $modalTitle = document.querySelector(".modal__title");
  const $modalContent = document.querySelector(".modal__content");
  let $cloneContent = $content.cloneNode(true);
  $modalTitle.innerHTML = title;

  console.log($modalContent);

  if (title == "Ordernar") AddOrderEventsContent($cloneContent);
  else if (title == "filtrar") {
    $cloneContent = returnFormWithDetails()
    AddFilterEventsContent($cloneContent);
  }

  $modalContent.innerHTML = "";
  $modalContent.appendChild($cloneContent);
}
