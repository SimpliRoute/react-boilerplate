module.exports = {
    semi: true,
    proseWrap: 'always',
    singleQuote: true,
    trailingComma: 'all',
    tabWidth: 4,
    overrides: [
        {
            files: ['*.yml', '*.yaml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
