<script lang="ts" setup>

const audioPlayer = ref<HTMLAudioElement>()
const { playing, currentTime, duration, volume, muted, waiting, ended } = useMediaControls(audioPlayer, {
  src: "https://www.hymnalaccompanist.com/mp3/3.mp3"
})

function playPauseAudio() {
  playing.value = !playing.value
}
function mutedAudio() {
  muted.value = !muted.value
}
function formatDuration(seconds: number) {
  return new Date(1000 * seconds).toISOString().slice(14, 19)
}
</script>

<template>
  <div>
    <p>{{ $t('hello') }}</p>
    <MiscLanguageSwitcher />

    <UContainer>
      <FullScreen />
      <MusicPlayer url="https://www.hymnalaccompanist.com/mp3/3.mp3" />
      <!-- <div class="space-y-1">
        <audio ref="audioPlayer" controls src="https://www.hymnalaccompanist.com/mp3/3.mp3" />
        <div class="p-4 bg-gray-200 dark:bg-gray-800 max-w-80 rounded-xl ring-1 ring-gray-100 dark:ring-gray-800 ring-inset space-y-3">
          <div class="space-y-1">
            <UProgress size="md" :value="currentTime" :max="duration" />
            <div class="flex items-center justify-end">
              <span>
                {{ waiting ? '--/--' : `${formatDuration(currentTime)}/${formatDuration(duration)}` }}
              </span>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
            <UButton size="xs" color="white" @click="playPauseAudio" icon="i-heroicons-play-20-solid" />
            <UButton size="xs" color="white" @click="playPauseAudio" icon="i-heroicons-pause-20-solid" />
          </div>
          <UButton size="xs" color="white" @click="mutedAudio" :icon=" muted ? 'i-heroicons-speaker-wave-20-solid' : 'i-heroicons-speaker-x-mark-20-solid'" />
          </div>
        </div>
        {{ formatDuration(currentTime) }} : {{ formatDuration(duration) }}
      </div> -->
    </UContainer>
  </div>
</template>

<style scoped></style>