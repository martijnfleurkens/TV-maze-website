import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Preview from '../Preview.vue'
import Rating from '../Rating.vue'

//Testdata example for component
const mockShowReturn = {
  name: 'Test name',
  image: {
    original: 'https://test-original.com',
    medium: 'https://test-medium.com'
  },
  rating: {
    average: 7.1
  }
}

//Testdata example with minimal data
const mockShowLightReturn = {
  name: 'Test name'
}

describe('Preview', () => {
  describe('when all data passed through', () => {
    it('should render if page content is correct', () => {
      //Setup Mount
      function mountPreview() {
        const wrapper = mount(Preview, {
          props: { showData: mockShowReturn }
        })
        return wrapper
      }

      expect(mountPreview()).toBeTruthy()

      //Title
      expect(mountPreview().text()).toContain(mockShowReturn.name)

      //Rating
      expect(mountPreview().text()).toContain(mockShowReturn.rating.average)

      //Image
      expect(mountPreview().find('img').attributes('src')).toBe(mockShowReturn.image.medium)
    })
  })

  describe('when minimal data is passed through', () => {
    it('should render if page content is correct', () => {
      //Setup Mount
      function mountPreviewEmpty() {
        const wrapper = mount(Preview, {
          props: { showData: mockShowLightReturn }
        })
        return wrapper
      }

      expect(mountPreviewEmpty()).toBeTruthy()

      //Title
      expect(mountPreviewEmpty().text()).toContain(mockShowLightReturn.name)

      //Image
      expect(mountPreviewEmpty().find('img').exists()).toBe(false)

      //Rating
      expect(mountPreviewEmpty().findComponent(Rating).exists()).toBe(false)
    })
  })
})
