import type { Component } from "solid-js";
import type { TPreviewCard } from "@/types/preview";

type Props = TPreviewCard;

export const PreviewCard: Component<Props> = ({
  title,
  description,
  picture,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={picture} />
      <p>{description}</p>
    </div>
  );
};
