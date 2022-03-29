import RandomNumber from '@/components/RandomNumber'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
  it('By default, the randomNumber data value should be 0', () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain('<span>0</span>')
  })

  it('If button is clicked, randomNumber should be between 0 and 1', async () => {
    const wrapper = mount(RandomNumber)
    await wrapper.find('button').trigger('click')
    const randomNumber = parseInt(wrapper.find('span').text())
    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })

  it('If button is clicked, randomNumber should be between 200 and 300', async () => {
    const wrapper = mount(RandomNumber, {
      props: {
        min: 200,
        max: 300
      }
    })
    await wrapper.find('button').trigger('click')
    const randomNumber = parseInt(wrapper.find('span').text())
    expect(randomNumber).toBeGreaterThanOrEqual(200)
    expect(randomNumber).toBeLessThanOrEqual(300)
  })
})
