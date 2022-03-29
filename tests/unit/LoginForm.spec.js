import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emits an event with a user data payload', () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('input[type="text"]')
    input.setValue('Daniel Ma')
    wrapper.trigger('submit')

    const forSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(forSubmittedCalls).toHaveLength(1)

    const expectedPayload = { name: 'Daniel Ma' }
    expect(forSubmittedCalls[0][0]).toMatchObject(expectedPayload)
  })
})
