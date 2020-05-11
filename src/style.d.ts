/* eslint-disable */
import Vue from "vue";

// Vue has the constructor type in types/vue.d.ts
declare module 'vue/types/vue' {
    // Declare augmentation for Vue
    interface Vue {
        $style: any
    }
}

/* eslint-enable */
