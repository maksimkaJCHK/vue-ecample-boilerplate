import { ref, onMounted } from 'vue';
import { getRandomNumb } from '@/helpers/helpers.js';

const useId = () => {
  const id = ref('');

  const generateId = () => {
    id.value = `id-${getRandomNumb(100_000_000_000)}`;
  };

  onMounted(generateId);

  return { id };
}

export default useId;