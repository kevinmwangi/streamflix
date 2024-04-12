import { Captions, ChapterTitle, Controls, Gesture } from '@vidstack/react';
import * as Buttons from '@/theme/components/VideoPlayer/video-controls/Buttons';
import * as Menus from '@/theme/components/VideoPlayer/video-controls/Menus';
import * as Sliders from '@/theme/components/VideoPlayer/video-controls/Sliders';
import { TimeGroup } from '@/theme/components/VideoPlayer/video-controls/TimeGroup';
import styles from '@/theme/scss/VideoLayout.module.scss';

export interface VideoLayoutProps {
    thumbnails?: string,
    hideControls?: boolean;
}

export function VideoLayout({ thumbnails, hideControls }: VideoLayoutProps) {
  return (
    <>
      <Gestures />
      <Captions className={`${styles.captions} vds-captions`} />
      <Controls.Root className={`${styles.controls} ${ hideControls ? 'vds-controls-hidden' : 'vds-controls-visible'} vds-controls`}>
        <div className="vds-controls-spacer" />
        <Controls.Group className={`${styles.controlsGroup} vds-controls-group`}>
          <Sliders.Time thumbnails={thumbnails} />
        </Controls.Group>
        <Controls.Group className={`${styles.controlsGroup} vds-controls-group`}>
          <Buttons.Play tooltipPlacement="top start" />
          <Buttons.Mute tooltipPlacement="top" />
          <Sliders.Volume />
          <TimeGroup />
          <ChapterTitle className="vds-chapter-title" />
          <div className="vds-controls-spacer" />
          <Buttons.Caption tooltipPlacement="top" />
          <Menus.Settings placement="top end" tooltipPlacement="top" />
          <Buttons.PIP tooltipPlacement="top" />
          <Buttons.Fullscreen tooltipPlacement="top end" />
        </Controls.Group>
      </Controls.Root>
    </>
  );
}

function Gestures() {
  return (
    <>
      <Gesture className={styles.gesture} event="pointerup" action="toggle:paused" />
      <Gesture className={styles.gesture} event="dblpointerup" action="toggle:fullscreen" />
      <Gesture className={styles.gesture} event="pointerup" action="toggle:controls" />
      <Gesture className={styles.gesture} event="dblpointerup" action="seek:-10" />
      <Gesture className={styles.gesture} event="dblpointerup" action="seek:10" />
    </>
  );
}
