// 테스트 유틸 라이브러리 로딩
// 컴포넌트 로딩
import { shallowMount } from '@vue/test-utils';
import SignUpForm from './SignUpForm.vue';

describe('SignUpForm.vue', () => {
  test('ID는 이메일 형식이어야 한다.', () => {
    const wrapper = shallowMount(SignUpForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const waringText = wrapper.find('.warning');
    expect(waringText.exists()).toBeTruthy();
  });
});

//미완
