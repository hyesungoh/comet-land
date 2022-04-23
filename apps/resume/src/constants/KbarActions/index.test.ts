import defaultFunction from './index';
import generateKbarAction from './KbarActions';

describe('resume - constants - KbarActions index', () => {
  it('should return same', () => {
    const defaultResult = defaultFunction();
    const kbarActionsResult = generateKbarAction();

    expect(JSON.stringify(defaultResult)).toEqual(JSON.stringify(kbarActionsResult));
  });
});
