describe('Sample it', () => {
  it('Visits main page', () => {
    cy.visit('/');
    cy.contains('h1', 'TODOs');
  });

  // it('can add items and check count', async () => {
  //   const wrapper = mount(List);

  //   wrapper.find('button').trigger('click');
  //   await Vue.nextTick();

  //   expect(wrapper.emitted('submit')).toBeFalsy();
  // });

  // it('displayed counts match entered todos', async () => {
  //   const wrapper = mount(List);
  //   const input = wrapper.find('input');

  //   // TODO: figure out how to set focus in composition API

  //   input.setValue('Scrub the floors');
  //   wrapper.find('button').trigger('click');
  //   await Vue.nextTick();

  //   expect(document.activeElement).toBe(input.element);
  // });
});
