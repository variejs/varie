import Vue from 'vue';

const scrollToTop = scrollDuration => {
  let scrollCount = 0;
  let oldTimestamp = performance.now();
  let cosParameter = window.scrollY / 2;

  function step(newTimestamp) {
    scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
    if (scrollCount >= Math.PI) {
      window.scrollTo(0, 0);
    }
    if (window.scrollY === 0) {
      return;
    }

    window.scrollTo(
      0,
      Math.round(cosParameter + cosParameter * Math.cos(scrollCount))
    );
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
};


class Helpers {
	constructor() {
		Vue.mixin({
			methods: {
				scrollToTop,
			},
			computed: {},
		});
	}
}

export default Helpers;