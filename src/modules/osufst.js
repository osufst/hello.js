(function(hello) {
	const auth_url = 'https://auth.osufst.org';

	hello.init({
		osufst: {
			name: 'OSU FST Auth',

			oauth: {
				version: 2,
				auth: `${auth_url}/dialog/authorize`,
				grant: `${auth_url}/oauth/token',`
			},

			// Authorization scopes
			scope: {
				basic: 'profile',
			},

			scope_delim: ' ',

			login: () => {

			},

			// API base url
			base: `${auth_url}/api/`,

			get: {
				me: 'userinfo',
			},
			wrap: {
				me: () => {},
			},
		},
	});

});
