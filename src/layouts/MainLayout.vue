<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Main Header -->
    <Navbar></Navbar>
    <!-- Main Container -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Main Footer -->
    <Footer></Footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
    }
  }
}
</script>
