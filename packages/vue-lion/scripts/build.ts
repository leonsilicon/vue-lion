import { compileVueSFC } from 'compile-vue-sfc';
import { execaCommandSync as exec } from 'execa';
import { chProjectDir, copyPackageFiles, rmDist } from 'lion-system';

chProjectDir(import.meta.url);
rmDist();
exec('tsc');
exec('tsc-alias');
await compileVueSFC({
	files: 'src/components/*.vue',
	declarations: true,
	outDir: 'dist',
	projectRootPath: 'src',
});
await copyPackageFiles({ commonjs: false });
