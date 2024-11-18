<template>
  <input
    v-model="inpVal"
    :id="id"
    :name="props.name"
    :value="props.value"
    type="radio"
    class="ui-radio"
  />

  <label
    :for="id"
    class="ui-radio-label"
  >
    <slot></slot>
  </label>
</template>

<script setup>
  import { computed } from 'vue';

  import useId from './hooks/useId';

  const { id } = useId();

  const emit = defineEmits(['update:modelValue']);

  const props = defineProps({
    modelValue: [String, Boolean],
    name: String,
    value: [String, Boolean],
  });

  const inpVal = computed({
    get() {
      return props.modelValue;
    },
    set(val) {
      emit('update:modelValue', val);
    }
  });
</script>

<style lang="scss">
  .ui-radio {
    margin-left: -30000px;
    position: absolute;

    &:checked + label {
      &::after {
        background: #0b0bae;
      }
    }

    &-label {
      cursor: pointer;
      user-select: none;
      display: inline-block;
      position: relative;
      background: #fff;
      padding: 8px 10px 8px 25px;
      border: 1px solid var(--app-primary-color);
      box-shadow: 0 0 10px #aaa;
      border-radius: var(--app-border-radius);

      &::before,
      &::after {
        content: ' ';
        display: block;
        position: absolute;
        border-radius: 50%;
      }
      &::before {
        top: 11px;
        left: 5px;
        width: 14px;
        height: 14px;
        border: 1px solid var(--app-primary-color);
      }

      &::after {
        top: 14px;
        left: 8px;
        width: 8px;
        height: 8px;
        background: transparent;
      }
    }
  }
</style>
