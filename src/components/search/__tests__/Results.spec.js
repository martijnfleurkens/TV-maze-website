import { createTestingPinia } from '@pinia/testing'
import { beforeEach, describe, expect, it, vitest } from 'vitest'
import { mount } from '@vue/test-utils'
import Results from '../Results.vue'
import ShowPreview from '@/components/show/Preview.vue'

//Mocks store data
const storeInfoQuery = 'Arrow'
const storeInfoResults = [
  {
    score: 0.9085514,
    show: {
      id: 4,
      name: 'Arrow'
    },
    rating: {
      average: 7.4
    },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/213/534017.jpg'
    }
  }
]

//Empty mock store
const storeEmpty = createTestingPinia({
  createSpy: vitest.fn,
  initialState: {
    SearchStore: {
      query: storeInfoQuery,
      results: null
    }
  }
})

const storeFull = createTestingPinia({
  createSpy: vitest.fn,
  initialState: {
    SearchStore: {
      query: storeInfoQuery,
      results: storeInfoResults
    }
  }
})

describe('Results', () => {
  let wrapper = null

  describe('When results available', () => {
    //Render component
    const renderComponent = mount(Results, {
      global: { plugins: [storeFull] }
    })

    beforeEach(() => {
      wrapper = renderComponent
    })

    it('should render a title', () => {
      expect(wrapper).toBeTruthy()

      expect(wrapper.text()).toContain('Results for: ' + storeInfoQuery)
    })

    it('renders the results', () => {
      expect(wrapper.findComponent(ShowPreview).exists()).toBe(true)
    })
  })

  describe('before data has loaded', () => {
    //Render component
    const renderComponent = mount(Results, {
      global: { plugins: [storeEmpty] }
    })

    beforeEach(() => {
      wrapper = renderComponent
    })

    it('renders a loading message', () => {
      expect(wrapper.text()).toContain('Loading...')
    })
  })
})
