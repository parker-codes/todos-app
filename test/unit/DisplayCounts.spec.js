import { shallowMount } from '@vue/test-utils';
import DisplayCounts from '@/components/DisplayCounts.vue';
import '@/test/composition-helper';

describe('DisplayCounts', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(DisplayCounts);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('displays correct phrase', () => {
    const wrapper = shallowMount(DisplayCounts, {
      propsData: {
        total: 10,
        remaining: 2
      }
    });

    expect(wrapper.find('div').text()).toBe('2 remaining out of 10');
  });

  test('does not display if there is no total number', () => {
    const wrapper = shallowMount(DisplayCounts, {
      propsData: {
        total: 0,
        remaining: 0
      }
    });

    expect(wrapper.find('div').exists()).toBe(false);
  });
});
