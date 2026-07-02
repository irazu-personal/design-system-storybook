import type { Decorator, Parameters } from '@storybook/react';

export const modalStoryParameters: Parameters = {
  layout: 'fullscreen',
  docs: {
    story: {
      height: '480px',
    },
  },
};

export const modalStoryDecorators: Decorator[] = [
  (StoryComponent) => (
    <div className="spark-modal-story-wrap">
      <StoryComponent />
    </div>
  ),
];
