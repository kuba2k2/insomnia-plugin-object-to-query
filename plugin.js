module.exports.templateTags = [{
    name: 'objtoquery',
    displayName: 'Query string',
    description: 'Build query string from an object.',
    args: [
		{
			name: 'path',
			displayName: 'Path',
			type: 'string',
			placeholder: 'Path to an environment object',
		},
    ],
    async run (context, path) {
		const obj = _.get(context.context, path);
		if (typeof obj == 'string') {
			return encodeURIComponent(obj);
		}
        return new URLSearchParams(obj).toString();
    }
}];
