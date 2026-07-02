import type { ReactNode } from 'react';
import { Overlay } from '../../Overlay/Overlay';
import '../Modal.css';

export type ModalSceneSize = 'slot' | 'text';

export type ModalSceneProps = {
  showOverlay?: boolean;
  size?: ModalSceneSize;
  children: ReactNode;
};

export function ModalScene({
  showOverlay = true,
  size = 'text',
  children,
}: ModalSceneProps) {
  const dialogClass =
    size === 'slot' ? 'spark-modal-scene-dialog spark-modal-scene-dialog-slot' : 'spark-modal-scene-dialog';

  return (
    <div
      className={[
        'spark-modal-scene',
        showOverlay ? '' : 'spark-modal-scene--no-overlay',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {showOverlay ? <Overlay /> : null}
      <div className={dialogClass}>{children}</div>
    </div>
  );
}
