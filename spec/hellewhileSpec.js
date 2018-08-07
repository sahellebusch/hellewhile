'use strict';
import hellewhile from '../src/hellewhile';

let context = {
  counter: 0
};

describe('.hellewhile', () => {
  beforeEach(() => {
    context.counter = 0;
  });

  it('will wait for the function to pass the expected predicate', done => {
    const predicate = results => Boolean(results);
    const async = () => Promise.resolve(true);

    hellewhile(async, predicate)
      .then(results => {
        expect(results).toBe(null);
        done();
      })
      .catch(fail);
  });

  it('will utilize a context object for the loop', done => {
    const predicate = results => results === 3;
    const async = context => {
      context.counter++;
      return Promise.resolve(context.counter);
    };

    hellewhile(async, predicate, context)
      .then(results => {
        expect(results).toEqual({ counter: 3 });
        done();
      })
      .catch(fail);
  });

  it('will assign the results to a tracker', done => {
    const predicate = results => results === 3;
    const async = context => {
      context.counter++;
      return Promise.resolve(context.counter);
    };

    hellewhile(async, predicate, context, 'results')
      .then(results => {
        expect(results).toEqual({ counter: 3, results: [1, 2, 3] });
        done();
      })
      .catch(fail);
  });
});
