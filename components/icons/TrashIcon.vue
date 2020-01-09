<template>
  <i class="gg-trash" :class="[size]" />
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
.gg-trash.mini {
  --ggs: 0.8;
}
.gg-trash.small {
  --ggs: 0.95;
}
.gg-trash.regular {
  --ggs: 1;
}
.gg-trash.large {
  --ggs: 2;
}
.gg-trash.x-large {
  --ggs: 3;
}
</style>
