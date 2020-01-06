module.exports =
    
{
	preset: 'react-native',
	testEnvironment: 'node',
	"transformIgnorePatterns": ["node_modules/(?!react-native)/"],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	"moduleDirectories": ["node_modules"],
	"coveragePathIgnorePatterns": ["__mock_data__/","jest"],
	globals: {
		"window" :{}
	}
}
