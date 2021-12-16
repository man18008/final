import { todoFilterPipe } from './todo-filter.pipe';

describe('todoFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new todoFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
