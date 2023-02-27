import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Rating from '../Rating.vue'

const mockRating = 7.1

function mountRating() {
  const wrapper = mount(Rating, {
    props: { rating: mockRating }
  })
  return wrapper
}

describe('Rating', () => {
  it('should render if props value is correct', () => {
    expect(mountRating().vm.rating).toBe(mockRating)
  })

  it('should render if page content is correct', () => {
    expect(mountRating()).toBeTruthy()

    expect(mountRating().text()).toContain(mockRating)
  })
})
