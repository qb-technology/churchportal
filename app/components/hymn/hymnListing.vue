<script lang="ts" setup>
import type { UiHymnResponse } from '~/types';
import { useI18nLink } from '#imports';

const props = defineProps({
  q: String,
  hymnals: {
    type: Array<UiHymnResponse>,
    default:[]
  }
})
const emits = defineEmits([
  'update:q', 'update:hymnals', 'search',
])

// search query
const q = computed({
  get: () => props.q,
  set: (val) => emits('update:q', val)
})

const hymnals = computed({
  get: () => props.hymnals,
  set:(val)=>emits('update:hymnals',val)
})

// search function
const searchFunc = async () => {
  if (!q.value || q.value == '') {
    return
  }
  emits('search')

}

watch(q, async () => {
  await searchFunc()
})

</script>

<template>
    <div class="min-w-full sm:min-w-[500px] md:min-w-[650px] max-w-full sm:max-w-[550px] md:max-w-[650px]">
      <UCard>
        <template #header>
          <div>

          </div>
          <UInput v-model="q" color="gray" placeholder="Search..."
            trailing-icon="i-heroicons-magnifying-glass" :ui="{ icon: { trailing: { pointer: '' } } }">

            <template #trailing>
              <UButton @click="searchFunc" color="gray" variant="ghost" icon="ic:round-subdirectory-arrow-left"
                :padded="false" />
            </template>
          </UInput>
        </template>

        <div class="space-y-5">

          <div v-for="hymn of hymnals.slice(0, 10)" :key="(hymn.number as string)" class="ring-1 ring-gray-200 dark:ring-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 sm:p-4 rounded-lg">

            <div class="grid grid-cols-[54px_minmax(0,1fr)] grid-rows-2 gap-y-2 gap-x-1">
              <div class="flex items-center">
                <UButton variant="ghost" color="gray" :label="hymn.number" />
              </div>
              <div>
                <ULink :to="useI18nLink(`/hymn/${hymn.number}`)">
                  {{ hymn.title }}
                </ULink>
              </div>
              <div class="col-start-2 flex items-center gap-5">
                <UButtonGroup size="xs" orientation="horizontal">
                  <UButton variant="ghost" color="gray" icon="i-heroicons-play" >
                    <span class="first-letter:capitalize">
                      {{ $t('hymn') }} {{ hymn.number }}
                    </span>
                  </UButton>
                </UButtonGroup>

                <UButtonGroup size="xs" orientation="horizontal">
                  <UButton color="gray" variant="ghost" >
                    <span class="first-letter:capitalize">
                      {{ $t('author') }}
                    </span>
                  </UButton>
                  <UButton v-if="hymn.author" color="gray" variant="ghost" :label="hymn.author" />
                </UButtonGroup>

                <UButtonGroup size="xs" orientation="horizontal">
                  <UButton color="gray" variant="ghost" :label="hymn.language.join(', ')" icon="i-heroicons-language" />
                </UButtonGroup>

              </div>

            </div>
          </div>
        </div>
      </UCard>
    </div>
</template>

<style scoped></style>