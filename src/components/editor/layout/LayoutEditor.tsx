import { useMemo } from "react";
import { Slide } from "../../../domain/schema";
import LayoutEditorNav from "./LayoutEditorNav";
import * as styles from "./LayoutEditor.module.css";
import LayoutSlide from "./LayoutSlide";
import { IID_of } from "../../../id";
import { CtxAsync as Ctx } from "@vlcn.io/react";
import { Deck } from "../../../domain/schema";
import queries from "../../../domain/queries";
import AppState from "../../../domain/ephemeral/AppState";

export default function LayoutEditor({ appState }: { appState: AppState }) {
  return (
    <div>
      <LayoutEditorNav appState={appState} />
      <LayoutSurface ctx={appState.ctx} deckId={appState.current_deck_id} />
    </div>
  );
}

function LayoutSurface({ ctx, deckId }: { ctx: Ctx; deckId: IID_of<Deck> }) {
  const slideIds = queries.slideIds(ctx, deckId).data;
  const selectedSlideIds = queries.selectedSlideIds(ctx, deckId).data;
  const set = useMemo<Set<IID_of<Slide>>>(
    () => new Set(selectedSlideIds),
    [selectedSlideIds]
  );
  return (
    <div className={styles.container}>
      {slideIds.map((id, i) => (
        <LayoutSlide
          selected={set.has(id)}
          ctx={ctx}
          key={id.toString()}
          deckId={deckId}
          slideId={id}
          i={i}
        />
      ))}
    </div>
  );
}
