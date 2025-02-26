// Animation durations and delays
export const DURATION = {
	SHORT: 300,
	MEDIUM: 500,
	LONG: 800,
	EXTRA_LONG: 1000
};

// Stagger delay between items in a list
export function staggerDelay(index, baseDelay = 100) {
	return index * baseDelay;
}

// Initialize particles.js with custom config
export function initParticles(elementId) {
	if (typeof window === 'undefined' || !window.particlesJS) return;

	window.particlesJS(elementId, {
		particles: {
			number: {
				value: 50,
				density: {
					enable: true,
					value_area: 800
				}
			},
			color: {
				value: '#6e56cf'
			},
			shape: {
				type: 'circle',
				stroke: {
					width: 0,
					color: '#000000'
				}
			},
			opacity: {
				value: 0.5,
				random: false,
				anim: {
					enable: false
				}
			},
			size: {
				value: 3,
				random: true
			},
			line_linked: {
				enable: true,
				distance: 150,
				color: '#6e56cf',
				opacity: 0.4,
				width: 1
			},
			move: {
				enable: true,
				speed: 2,
				direction: 'none',
				random: false,
				straight: false,
				out_mode: 'out',
				bounce: false
			}
		},
		interactivity: {
			detect_on: 'canvas',
			events: {
				onhover: {
					enable: true,
					mode: 'grab'
				},
				onclick: {
					enable: true,
					mode: 'push'
				},
				resize: true
			}
		},
		retina_detect: true
	});
}

// Create a simple intersection observer
export function createIntersectionObserver(callback, options = { threshold: 0.1 }) {
	if (typeof IntersectionObserver !== 'undefined') {
		return new IntersectionObserver(callback, options);
	}
	return null;
}
