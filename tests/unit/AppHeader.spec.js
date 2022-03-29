import AppHeader from '@/components/AppHeader'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
  it('If user not logged in, do not show loggout button', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  it('If user logged in, show loggout button', async () => {
    const wrapper = mount(AppHeader)
    await wrapper.setData({ loggedIn: true })
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})
