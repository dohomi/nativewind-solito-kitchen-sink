import { renderUi } from '@my/tests/src'
import { LmText } from './LmText'

describe('<LmText />', () => {
  it('has 1 child', () => {
    const {type, children} = renderUi(<LmText>hello</LmText>).toJSON();
    expect(type).toBe('View')
    expect(children.length).toBe(1)
  });
});