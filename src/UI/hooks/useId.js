import { ref, onBeforeMount } from 'vue';
import { getRandomNumb } from '@/helpers/helpers.js';

const useId = () => {
  const id = ref('');

  const generateId = () => {
    id.value = `id-${getRandomNumb(100_000_000_000)}`;
  };

  onBeforeMount(generateId);

  return { id };
}

export default useId;