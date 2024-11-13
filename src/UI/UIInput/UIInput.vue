<template>
  <div class="inp-wrap">
    <div
      v-if="isPassword"
      class="inp-pas-icon"
      :class="{ 'inp-pas-icon-vis': isVisPas }"
      @click="changeVisPas"
    ></div>

    <input
      v-model="inputVal"
      :type="typeInput"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      class="inp"
      :class="{ isError: props.errorText }"
    >

    <div
      v-if="props.errorText"
      class="inp-error"
    >
      {{ props.errorText }}
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const props = defineProps({
    modelValue: String,
    errorText: String,
    typeInput: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
  });

  const emit = defineEmits(['update:modelValue']);

  const autocomplete = computed(() => props.typeInput === 'password' ? 'new-password' : 'off');
  const isPassword = computed(() => props.typeInput === 'password');
  const isVisPas = ref(false);

  const typeInput = computed(() => {
    if (props.typeInput === 'password') {
      return isVisPas.value ? 'text' : 'password';
    }

    return props.typeInput;
  });

  const inputVal = computed({
    get() {
      return props.modelValue;
    },
    set(val) {
      emit('update:modelValue', val);
    }
  });

  const changeVisPas = () => isVisPas.value = !isVisPas.value;
</script>

<style lang="scss" scoped>
  .inp {
    width: 100%;
    display: block;
    outline: none;
    color: #000;
    padding: 10px 10px;
    border-radius: var(--app-border-radius);
    font: 16px/120% var(--app-font-family);
    box-sizing: border-box;
    border: 1px solid var(--app-color-text);
    margin-bottom: 24px;
    position: relative;
    background-color: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &::placeholder {
      color: #000;
      opacity: .6;
    }

    &:focus {
      box-shadow: 0 0 0 .25rem rgba(55, 90, 127, .25);

      &::placeholder {
        opacity: 0;
      }
    }

    &.isError {
      border-color: var(--app-danger-color);

      &:focus {
        box-shadow: 0 0 0 .25rem rgba(200, 90, 127, .25);
      }
    }

    &-wrap {
      position: relative;
    }

    &-error {
      color: var(--app-danger-color);
      min-height: 24px;
      margin-top: -24px;
      margin-bottom: -24px;
    }

    &-pas-icon {
      top: 11px;
      right: 5px;
      width: 20px;
      height: 20px;
      z-index: 1;
      cursor: pointer;
      position: absolute;
      background: url('./pas.svg') no-repeat 50% 50%;
      background-size: contain;

      & + .inp {
        padding-right: 30px;
      }

      &-vis {
        background-image: url('./pas-vis.svg');
      }
    }
  }
</style>
