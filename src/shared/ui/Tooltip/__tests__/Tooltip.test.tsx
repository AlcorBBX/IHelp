import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';

import { Tooltip } from 'shared/ui/Tooltip';

describe('Tooltip tests', () => {
  beforeEach(() => {
    render(
      <Tooltip text="Text">{(props) => <p {...props}>Content</p>}</Tooltip>,
    );
  });

  test('should show Content all the time', () => {
    expect(screen.getByText(/Content/i)).toBeDefined();
  });

  test('should show the Text on tooltip children hover', async () => {
    const title = screen.getByText(/Content/i);
    fireEvent.mouseEnter(title);

    expect(await screen.findByText(/Text/i)).toBeDefined();
  });
});
