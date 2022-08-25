import { LmText } from 'app/src/components/text/LmText'
import { renderUi } from '../../src'

describe('Lm Text', () => {
  test('render LmText', async ()=> {
    const {type, children} = renderUi(<LmText>hello</LmText>).toJSON();
    expect(type).toBe('Text')
    expect(children.length).toBe(1)
  })
})