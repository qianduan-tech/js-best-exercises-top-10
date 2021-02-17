/* eslint-disable func-names */
/* eslint-disable no-extend-native */
/* eslint-disable prefer-rest-params */

const init = () => {
  Function.prototype.myBind = function () {
    const self = this;
    const context = [].shift.call(arguments);
    const args = [].slice.call(arguments);
    return function () {
      return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
    };
  };

  Function.prototype.myApply = function (context = window, arr = []) {
    context.fn = this;
    const result = context.fn(...arr);
    delete context.fn;
    return result;
  };

  Function.prototype.myCall = function (context = window, ...arr) {
    context.fn = this;
    const result = context.fn(...arr);
    delete context.fn;
    return result;
  };
};

export default init;
