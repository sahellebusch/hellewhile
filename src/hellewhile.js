/**
 *An awesome while loop implementation for promises.
 *
 * @module hellewhile
 */

/**
 * While loop implementation for an asynchronous function.
 * @param {Function} asyncFn - the asynchronous function run with the context object.
 * @param {Function} predicate - the predicate function to be used as the while loop conditional.  Provided the asyncFn results and context object.
 * @param {Object} [context=null] - optional context object to be passed into the asyncFn and predicate functions.
 * @param {String} [tracker=null] - optional property to be set on the context object that will store the results of each individual asyncFn call.
 */
export function hellewhile(asyncFn, predicate, context = null, tracker = null) {
  if (context && tracker && !context[tracker]) {
    context = Object.assign({}, context, { [tracker]: [] });
  }

  return asyncFn(context).then(res => {
    if (context && tracker) {
      context[tracker] = [...context[tracker], res];
    }

    return predicate(res, context)
      ? Promise.resolve(context)
      : hellewhile(asyncFn, predicate, context, tracker);
  });
}

// export hellewhile;
