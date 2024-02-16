import packageJson from '../../package.json';

const { version } = packageJson;

const uri: { [key: string]: string } = {
  development: 'https://tools.texoit.com/backend-java/api',
  production: 'https://tools.texoit.com/backend-java/api',
  test: 'https://tools.texoit.com/backend-java/api'
};

const NODE_ENV = process.env.NODE_ENV;

export { uri, version, NODE_ENV };
