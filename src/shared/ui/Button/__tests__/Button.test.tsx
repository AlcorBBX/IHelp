import { render, screen } from '@testing-library/react';
// import renderer from 'react-test-renderer';
import { describe, expect, test } from 'vitest';

import { Button } from 'shared/ui/Button';

describe('Button test', () => {
  test('should show Content all the time', () => {
    render(
      <Button>
        <h4>Content</h4>
      </Button>,
    );

    expect(screen.getByText(/Content/i)).toBeDefined();
  });
});
// function toJson(component: renderer.ReactTestRenderer) {
//   const result = component.toJSON();
//   expect(result).toBeDefined();
//   expect(result).not.toBeInstanceOf(Array);
//   return result as renderer.ReactTestRendererJSON;
// }

// snap
//   const component = renderer.create(<Button>Test</Button>);
//   let tree = toJson(component);
//   expect(tree).toMatchSnapshot();

//   // re-rendering
//   tree = toJson(component);
//   expect(tree).toMatchSnapshot();
// });
