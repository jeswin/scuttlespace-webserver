import defaultTemplate from "scuttlespace-template-default";
import exception from "../exception";

export async function getTemplate(templateName: string) {
  return templateName === "default"
    ? defaultTemplate
    : exception(`Unknown template name.`);
}
