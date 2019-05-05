<template>
  <div>
    <base-layout @search="handleSearch">
      <h1>Home View</h1>
    </base-layout>
  </div>
</template>

<script>
import Searchable from '../components/mixins/Searchable'
import BaseLayout from '../components/BaseLayout'

export default {
  components: { BaseLayout },

  mixins: [Searchable]
}
</script>
