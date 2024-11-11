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
    padding: 5px 10px;
    border-radius: var(--app-border-radius);
    font: 16px/120% var(--app-font-family);
    box-sizing: border-box;
    border: 1px solid #000;
    margin-bottom: 24px;
    position: relative;

    &::placeholder {
      color: #000;
      opacity: .6;
    }

    &:focus {
      &::placeholder {
        opacity: 0;
      }
    }

    &-wrap {
      position: relative;
    }

    &-error {
      color: #f00;
      min-height: 24px;
      margin-top: -24px;
      margin-bottom: -24px;
    }

    &-pas-icon {
      top: 7px;
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
