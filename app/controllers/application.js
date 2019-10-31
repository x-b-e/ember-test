import Controller from '@ember/controller';

import { task } from 'ember-concurrency';

export default Controller.extend({
  testTask: task(function* () {
   console.log('test task');
  }),

  blah: 'test',

  actions: {
    doTestTask() {
      return this.testTask.perform(...arguments);
    }
  }
});
