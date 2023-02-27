import { createTestingPinia } from '@pinia/testing'
import { beforeEach, describe, expect, it, vitest } from 'vitest'
import { mount } from '@vue/test-utils'
import Carrousel from '../Carrousel.vue'
import { Swiper } from 'swiper/vue'

//Mock data
const mockFilter = 'Action'
const customTitle = 'Test title'

//Empty mock store
const storeEmpty = createTestingPinia({
  createSpy: vitest.fn,
  initialState: {
    ShowStore: {
      shows: null,
      showsLoaded: false
    }
  }
})

//Mock store with data
const storeFull = createTestingPinia({
  createSpy: vitest.fn,
  initialState: {
    ShowStore: {
      shows: [
        {
          id: 1,
          name: 'Test name',
          image: {
            original: 'https://test.com',
            medium: 'https://test.com'
          },
          rating: {
            average: 7.1
          }
        }
      ],
      showsLoaded: true
    }
  }
})

describe('Carrousel', () => {
  let wrapper = null

  describe('before data has loaded', () => {
    //Render component
    const renderComponent = mount(Carrousel, {
      props: { filter: mockFilter },
      global: { plugins: [storeEmpty] }
    })

    beforeEach(() => {
      wrapper = renderComponent
    })

    it('should render if props value is correct', () => {
      expect(wrapper.vm.filter).toBe(mockFilter)
    })

    it('should render if page content is correct', () => {
      expect(wrapper).toBeTruthy()

      expect(wrapper.text()).toContain(mockFilter)
      expect(wrapper.text()).toContain('...Loading shows')
    })
  })

  describe('when results are available', () => {
    //renderComponent with data in store
    const renderComponent = mount(Carrousel, {
      props: { filter: mockFilter },
      global: { plugins: [storeFull] }
    })

    beforeEach(() => {
      wrapper = renderComponent
    })

    it('should render swiper carrousel', () => {
      expect(wrapper.findComponent(Swiper).exists()).toBe(true)
    })
  })

  describe('when custom title is passed through', () => {
    //Render component with custom title as prop
    const renderComponentCustomTitle = mount(Carrousel, {
      props: { filter: mockFilter, customTitle: customTitle },
      global: { plugins: [storeEmpty] }
    })

    beforeEach(() => {
      wrapper = renderComponentCustomTitle
    })

    it('should render if props value is correct', () => {
      expect(wrapper.vm.customTitle).toBe(customTitle)
    })

    it('should render the custom title', () => {
      expect(wrapper.text()).toContain(customTitle)
    })
  })
})
