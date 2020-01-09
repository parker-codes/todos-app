import { shallowMount } from '@vue/test-utils';
import NewItem from '@/components/NewItem.vue';
// TODO: see if this is even needed
import Vue from 'vue';
import CompositionApi from '@vue/composition-api';
Vue.use(CompositionApi);

describe('NewItem', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(NewItem);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('does not emit if there is no content', async () => {
    const wrapper = shallowMount(NewItem);

    wrapper.find('button').trigger('click');
    await Vue.nextTick();

    expect(wrapper.emitted('submit')).toBeFalsy();
  });

  test('emits event with content', async () => {
    const wrapper = shallowMount(NewItem);

    const title = 'Do the dishes';

    wrapper.find('input').setValue(title);
    wrapper.find('button').trigger('click');
    await Vue.nextTick();

    expect(wrapper.emitted('submit')[0][0]).toBe(title);
  });

  test('input is cleared after submit', async () => {
    const wrapper = shallowMount(NewItem);

    const title = ' Take out the trash  ';
    const input = wrapper.find('input');

    input.setValue(title);
    await Vue.nextTick();

    expect(wrapper.vm.newTitle).toBe(title);

    wrapper.find('button').trigger('click');
    await Vue.nextTick();

    expect(wrapper.vm.newTitle).toBe('');
    expect(input.text()).toBe('');
  });

  test('trims emitted content', async () => {
    const wrapper = shallowMount(NewItem);

    wrapper.find('input').setValue(' Take out the trash  ');
    wrapper.find('button').trigger('click');
    await Vue.nextTick();

    expect(wrapper.emitted('submit')[0][0]).toBe('Take out the trash');
  });

  test('can submit multiple times', async () => {
    const wrapper = shallowMount(NewItem);

    const items = ['See a movie', 'Fill the tub', 'Look out the window'];

    for (const item of items) {
      wrapper.find('input').setValue(item);
      wrapper.find('button').trigger('click');
      await Vue.nextTick();
    }

    expect(wrapper.emitted('submit').length).toBe(items.length);
  });
});
