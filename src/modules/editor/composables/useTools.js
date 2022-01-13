import { ref } from "vue";

const useTools = () => {
  let toolSelected = ref(null);

  const changeTools = (name) => {
    name ? (toolSelected.value = name) : null;
 
  };

  return {
    toolSelected,
    changeTools,
  };
};

export default useTools;
