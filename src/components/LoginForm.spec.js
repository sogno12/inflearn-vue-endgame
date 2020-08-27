import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

// describe('컴포넌트 이름', () => {
//   test('테스트 할 동작이나 기능', () => {
//     //내용 정의
//   });
// });

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이어야 한다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const waringText = wrapper.find('.warning');
    expect(waringText.exists()).toBeTruthy();
  });

  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy();
  });
});
