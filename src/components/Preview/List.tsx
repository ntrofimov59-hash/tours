import type { TPreviewCard } from "@/types/preview";
import type { Component } from "solid-js";
import { PreviewCard } from "./Card";

type Props = {
  previews: TPreviewCard[];
};

export const PreviewList: Component<Props> = ({ previews }) => (
  <ul>
    {previews.map((preview) => (
      <PreviewCard {...preview} />
    ))}
  </ul>
);
