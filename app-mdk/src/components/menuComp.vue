<template>
<div >
  <div class="q-pa-md" style="max-width: 350px">
      <q-list class="rounded-borders">
        <q-item clickable v-ripple to="/home">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section>Dashboard</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/api_style">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section>Api Style</q-item-section>
        </q-item>


      </q-list>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
   name: 'menuComp',
  setup () {
    return {

    }
  }
}
</script>
<style lang="sass">
.my-menu-link
  color: white
  background: #F2C037
</style>
Inbox
