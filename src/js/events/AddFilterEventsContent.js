import { handleFiltersChange } from "./handleFiltersChange";

export function AddFilterEventsContent($content) {
  $content.addEventListener("click", () => {
    handleFiltersChange("#modal form");
  });
}
