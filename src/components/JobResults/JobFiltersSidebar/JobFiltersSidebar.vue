<script setup>
import { computed } from 'vue'

import ActionButton from '@/components/Shared/ActionButton.vue'
import JobFiltersSideBarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSideBarCheckboxGroup.vue'

import { useJobsStore } from '@/stores/jobs'
import { useUserStore } from '@/stores/user'

const jobsStore = useJobsStore()
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS)
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES)

const userStore = useUserStore()
</script>
<template>
  <div class="flex flex-col border-r border-solid border-brand-gray-1 bg-white p-4 w-96">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>

      <job-filters-side-bar-checkbox-group
        header="Job Types"
        :unique-values="UNIQUE_JOB_TYPES"
        :action="userStore.ADD_SELECTED_JOB_TYPES"
      />
      <job-filters-side-bar-checkbox-group
        header="Organizations"
        :unique-values="UNIQUE_ORGANIZATIONS"
        :action="userStore.ADD_SELECTED_ORGANIZATIONS"
      />
    </section>
  </div>
</template>
