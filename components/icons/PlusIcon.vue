<template>
  <i class="gg-add" :class="[size]" />
</template>

<script lang="ts">
import { createComponent, computed } from '@vue/composition-api';

export default createComponent({
  props: {
    size: { type: String, default: 'regular' }
  }
});
</script>

<style scoped>
.gg-add.mini {
  --ggs: 0.8;
}
.gg-add.small {
  --ggs: 0.95;
}
.gg-add.regular {
  --ggs: 1;
}
.gg-add.large {
  --ggs: 2;
}
.gg-add.x-large {
  --ggs: 3;
}
</style>
