import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type AccordionStruct = {
  icon: IconDefinition;
  title: string;
  link: string;
}

export type ListLinksStruct = {
  title: string;
  link: string | null;
  accordion: boolean;
  className: string;
  accordionList: AccordionStruct[] | null;
}
