(function(hello) {
	const auth_url = 'http://localhost:4202';

	hello.init({
		osufst: {
			name: 'OSU FST Auth',

			oauth: {
				version: 2,
				auth: `${auth_url}/dialog/authorize`,
				grant: `${auth_url}/oauth/token',`,
				response_type: 'code'
			},

			// Authorization scopes
			scope: {
				basic: 'profile',
			},

			scope_delim: ',',

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

})(hello);
