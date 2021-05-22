<template>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Crazy Dots
        </q-toolbar-title>

        <div>Game v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
</template>

<script>
export default {
  name: 'Navbar',
  }
</script>

<style scoped>
</style>
