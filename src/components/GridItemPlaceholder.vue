<template>
<div
  class="grid-item grid-item__placeholder"
  @click="onClick"
  @mouseover="hover = true"
  @mouseleave="hover = false">
    <font-awesome-icon
      v-if="hover === true"
      :icon="['fas', 'plus-square']">
    </font-awesome-icon>
    <font-awesome-icon
      v-else
      :icon="['far', 'plus-square']">
    </font-awesome-icon>
</div>
</template>

<script>
export default {
  name: 'GridItemPlaceholder',
  data: () => ({
    hover: false,
  }),
  methods: {
    /** Emits `add` when the component is pressed. */
    onClick() {
      this.$emit('add');
    },
  },
};
</script>

<style lang="less">

</style>
