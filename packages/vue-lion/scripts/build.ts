import { compileVueSFC } from 'compile-vue-sfc';
import { execaCommandSync as exec } from 'execa';
import { chProjectDir, copyPackageFiles, rmDist } from 'lionconfig';

chProjectDir(import.meta.url);
rmDist();
exec('tsc');
await compileVueSFC({
	files: 'src/components/*.vue',
	declarations: true,
	outDir: 'dist',
	projectRootPath: 'src',
});
exec('tsc-alias');
await copyPackageFiles({ commonjs: false });
