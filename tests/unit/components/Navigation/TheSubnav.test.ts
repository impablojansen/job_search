import type { Mock } from 'vitest'

import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'

import TheSubnav from '@/components/Navigation/TheSubnav.vue'
import { useJobsStore } from '@/stores/jobs'

import { useRoute } from 'vue-router'
const useRouteMock = useRoute as Mock

vi.mock('vue-router')

describe('TheSubnav', () => {
  const renderTheSubnav = () => {
    const pinia = createTestingPinia()
    const jobsStore = useJobsStore()

    render(TheSubnav, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
    return { jobsStore }
  }

  describe('When user is on jobs page', () => {
    it('displays job count', async () => {
      useRouteMock.mockReturnValue({ name: 'JobResults' })

      const { jobsStore } = renderTheSubnav()
      const numberOfJobs = 16
      // @ts-expect-error
      jobsStore.FILTERED_JOBS = Array(numberOfJobs).fill({})

      const jobCount = await screen.findByText(numberOfJobs)
      expect(jobCount).toBeInTheDocument()
    })
  })

  describe('When user is not on jobs page', () => {
    it('does NOT display job count', () => {
      useRouteMock.mockReturnValue({ name: 'JobResults' })

      const { jobsStore } = renderTheSubnav()
      const numberOfJobs = 16
      // @ts-expect-error
      jobsStore.FILTERED_JOBS = Array(numberOfJobs).fill({})

      const jobCount = screen.queryByText(numberOfJobs)
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
