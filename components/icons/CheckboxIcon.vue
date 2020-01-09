<template>
  <i class="gg-check-o" :class="[size]" />
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';

export default createComponent({
  props: {
    size: { type: String, default: 'regular' }
  }
});
</script>

<style scoped>
.gg-check-o.mini {
  --ggs: 0.8;
}
.gg-check-o.small {
  --ggs: 0.95;
}
.gg-check-o.regular {
  --ggs: 1;
}
.gg-check-o.large {
  --ggs: 2;
}
.gg-check-o.x-large {
  --ggs: 3;
}
</style>
