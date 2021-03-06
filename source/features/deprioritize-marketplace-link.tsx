import React from 'dom-chef';
import select from 'select-dom';
import elementReady from 'element-ready';
import domLoaded from 'dom-loaded';
import features from '../libs/features';

async function init(): Promise<void> {
	(await elementReady('.Header-link[href="/marketplace"]'))!
		// The Marketplace link seems to have an additional wrapper that other links don't have https://i.imgur.com/KV9rtSq.png
		.closest('.border-top, .mr-3')!.remove();

	await domLoaded;

	select.last('.header-nav-current-user ~ .dropdown-divider')!.before(
		<div className="dropdown-divider"></div>,
		<a className="dropdown-item" href="/marketplace">Marketplace</a>
	);
}

features.add({
	id: __featureName__,
	description: 'Moves the "Marketplace" link from the black header bar to the profile dropdown.',
	screenshot: false,
	exclude: [
		features.isGist
	],
	init
});
