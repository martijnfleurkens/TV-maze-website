import { createTestingPinia } from '@pinia/testing'
import { describe, it, expect, vi, test } from 'vitest'
import { mount } from '@vue/test-utils'
import TheHeader from '../Header.vue'
import router from '@/router'

//mock store
const store = createTestingPinia({
  createSpy: vi.fn
})

//Setup mount
function mountTheHeader() {
  const wrapper = mount(TheHeader, {
    global: {
      plugins: [router, store]
    }
  })
  return wrapper
}

describe('The router', () => {
  it('mounts properly', () => {
    expect(mountTheHeader().text()).toContain('STREAMVISION')
  })

  test('click the links', async () => {
    const push = vi.spyOn(router, 'push')

    await mountTheHeader().find('a[data-link-type=nav]').trigger('click')

    expect(push).toHaveBeenCalledOnce()
    expect(push).toHaveBeenCalledWith('/')
  })
})
