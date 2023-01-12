import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const vuejs = createApp(App);
vuejs.use(store).use(router).mount("#app");

vuejs.directive("change-color", {
  updated: (el, binding) => {
    if (binding.value === 1) {
      el.style.color = "red";
    } else if (binding.value >= 4) {
      el.style.color = "blue";
    }
    console.log(binding.oldValue)
  },
});

vuejs.directive("custom-event", {
  created: (el, binding) => {
    // el.addEventListener('mouseover',()=>{
    //     console.log("mouseOver")
    // })
    console.log(binding)
    if (binding.arg == "focus") {
      el.addEventListener("focus", () => {
        console.log("focus");
      });
      return;
    }
    if (binding.value) {
      el.addEventListener("copy", () => {
        console.log("copy to background change");
        el.style.backgroundColor = binding.value
      });
      
    }
  },
});
