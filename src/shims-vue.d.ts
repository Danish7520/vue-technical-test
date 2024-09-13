  declare module '*.vue' {
    import { Task1 } from 'vue';
    import Task2 from '@/views/Task2.vue'
    import Task3 from '@/views/Task3.vue'
    import Task4 from '@/views/Task4.vue'
    import Task5 from '@/views/Task5.vue'
    import Task6 from '@/views/Task6.vue'
    import Task7 from '@/views/Task7.vue'
    import ModalView from '@/views/Modal-View.vue'
    const component: Task1<{}, {}, any>;
    const component: Task2<{}, {}, any>;
    const component: Task3<{}, {}, any>;
    const component: Task4<{}, {}, any>;
  const component: Task5<{}, {}, any>;
    const component: Task6<{}, {}, any>;
    const component: Task7<{}, {}, any>;
    const component: ModalView<{}, {}, any>;
    export default component;
  }