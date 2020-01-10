import { shallowMount, mount } from '@vue/test-utils';
import List from '@/components/List.vue';
import Vue from 'vue';
import '@/test/composition-helper';

describe('List', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(List);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  // TODO: figure out how to mock with composition hooks

  // test('can hold tasks', () => {
  //   const { todos, toggleComplete, removeItem } = useTodoList();

  //   const wrapper = shallowMount(List, {
  //     propsData: {
  //       items: todos,
  //       toggleComplete,
  //       removeItem
  //     }
  //   });

  //   // expect(wrapper)
  // });

  // test('can mark as completed', async () => {
  //   const wrapper = mount(List);
  //   const title = 'Do the dishes';

  //   wrapper.find('input').setValue(title);
  //   wrapper.find('button').trigger('click');
  //   await Vue.nextTick();

  //   expect(wrapper.emitted('submit')[0][0]).toBe(title);
  // });

  // test('can delete an item', async () => {
  //   const wrapper = mount(List);
  //   const title = ' Take out the trash  ';
  //   const input = wrapper.find('input');

  //   input.setValue(title);
  //   await Vue.nextTick();

  //   expect(wrapper.vm.newTitle).toBe(title);

  //   wrapper.find('button').trigger('click');
  //   await Vue.nextTick();

  //   expect(wrapper.vm.newTitle).toBe('');
  //   expect(input.text()).toBe('');
  // });

  // test('can delete an item when completed', async () => {
  //   const wrapper = mount(List);
  //   const input = wrapper.find('input');

  //   input.setValue('Vaccum the front room');
  //   input.trigger('keydown', { key: 'Enter' });
  //   await Vue.nextTick();

  //   expect(wrapper.emitted('submit')).toBeTruthy();
  // });
});
